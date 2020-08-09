

const priceItems = document.querySelectorAll('.pricing-item-title');
function setListener() {
	this.nextElementSibling.classList.toggle('hide')
	this.lastElementChild.classList.toggle('rotate')
}

priceItems.forEach(i => i.addEventListener('click', setListener))

const allForms = [...document.forms]
allForms.forEach(form => {
	form.addEventListener('submit', (event) => {
		event.preventDefault()
		let valuesOfInputs = {}
		for (let input of form) {
			if (input.name === 'costByVolLb') {
				valuesOfInputs[input.name] = valuesOfInputs['costByVol'] / 7
			} else if (input.name === 'cfLocalLBS') {
				valuesOfInputs[input.name] = valuesOfInputs['cfLocal'] * 7
			} else if (input.name === 'cfLongLBS') {
				valuesOfInputs[input.name] = valuesOfInputs['cfLong'] * 7
			} else if (input.type === 'checkbox') {
				valuesOfInputs[input.name] = `${input.checked}`
			}
			else {
				valuesOfInputs[input.name] = input.value
			}

		}
		sendDataToDB(valuesOfInputs)
	})
})

async function sendDataToDB(values) {
	await fetch('wp-content/themes/apmovers/sendPriceToDB.php', {
		method: 'POST',
		body: JSON.stringify(values)
	})
		.then((promise) => console.log(promise))
		.catch((error) => console.log(error))
}

window.addEventListener('load', () => {
	getPricesFromDb()
})

async function getPricesFromDb() {
	await fetch('getPricesinDB.php?get', {
		method: 'GET'
	})
		.then((responce) => responce.json())
		.then((result) => {
			putPricesInInputs(result)
		})
		.catch((error) => console.error(error))


}
function putPricesInInputs(allPrices) {
	const inputs = document.querySelectorAll('.item-input')
	inputs.forEach(item => {
		if (allPrices[item.name]) {
			if (item.type === 'checkbox' && allPrices[item.name] > 0) {
				item.checked = allPrices[item.name]
			} else {
				item.placeholder = allPrices[item.name]
			}

		}

	})
}