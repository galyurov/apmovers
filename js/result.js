let obj = {};
let prices = {};
let dates = {}

let resultForm = document.querySelector('.result-form')

const moveDate = document.querySelector('.move-date')
window.addEventListener('load', () => {
	if (localStorage.savedInfo) {
		obj = JSON.parse(localStorage.savedInfo);
		getPricesFromDb();
		setTypeOfButton()
	}
})

function setTypeOfButton() {
	if (obj.searchParam.status === 'Accepted') {
		resultForm.innerHTML = '<button data-type="Accepted" class="acceptOrder ok" type="submit">Accepted</button><button data-type="Completed" class="completeOrder" type="submit">Complete</button>'
	} else if(obj.searchParam.status === 'Completed') {
		resultForm.innerHTML = '<button data-type="Completed" class="completeOrder  ok" type="submit">Completed</button>'

	} else if(obj.searchParam.status === 'New') {
		resultForm.innerHTML = '<button data-type="Accepted" class="acceptOrder" type="submit">Accept</button><button data-type="Completed" class="completeOrder" type="submit">Complete</button>'
	}
	else{
		if(localStorage.saved == '1'){
			resultForm.innerHTML = ''
				resultForm.insertAdjacentHTML("afterend",`<div class="result-save-info">
                        <h2>Your order save!</h2>
                        <div>You can change your items and parameters in <a class="save-link" href="/profile-admin">Profile Page</a></div>
                    </div>`)
		} else {
			resultForm.innerHTML = '<button class="saveOrder" type="submit">Book</button>'
		}

	}
}
function getWeekDay(date) {
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	date = new Date(date)
	obj.searchParam.dayName = days[date.getDay()]
	return days[date.getDay()]
}
let volSum = function (items = obj.choisedItems) {
	let sum = 0;
	for (let value in items) {
		sum += items[value].sum
	}
	return sum
}
function parseAddress(address, location) {
	let result = address.split(',', 3)
	return `${result[0]} <br/> ${result[1]}<br/> ${result[2]}  <br/> ${obj.searchParam[location] ? 'Apt: ' + obj.searchParam[location] : ''}`
}

function calculateTotalSum(total) {
	const prices = document.querySelectorAll('.sum-price')
	let arr = []
	prices.forEach(value => {
		arr.push(value.textContent.replace(' ', '').replace('$', ''))
	})
	arr = arr.reduce((sum, current) => +sum + (+current), 0).toFixed(2)
	obj.searchParam.totalPrice = arr;
	return total.textContent = arr + " $"

}
async function getPricesFromDb() {
	await fetch('getPricesinDB.php?get', {
		method: 'GET'
	})
		.then((response) => response.json())
		.then((result) => {
			prices = result

			setParametersInHtml();
		})
		.catch((error) => console.error(error))

}

function calculateMovePrice() {
	if (+obj.searchParam.range <= +prices['local-max-distance'] && +obj.searchParam.range > 10) {
		var movePrice = (+prices['truckCharges'] + +prices['localTollCharge'] + (+prices['chargesPerMile'] * (+obj.searchParam.range - +prices['freeMile'])))
	} else if (+obj.searchParam.range > +prices['local-max-distance']) {
		var movePrice = (+prices['truckCharges'] + +(prices['chargesPerMile'] * (+obj.searchParam.range - prices['freeMile'])))
	} else {
		var movePrice = +prices['truckCharges'] + +prices['localTollCharge']
	}
	return movePrice
}

async function setParametersInHtml() {
	let percent= 0;
	const moveDay = document.querySelector('.move-day')
	const estimateDate = document.querySelector('.estimate-date')
	const estimateVolume = document.querySelector('.volume')
	const addressFrom = document.querySelector('#result-adress-from')
	const addressTo = document.querySelector('#result-adress-to')
	const stairsFrom = document.querySelector('#result-stairs-from')
	const stairsTo = document.querySelector('#result-stairs-to')
	const moveType = document.querySelector('.move-type')
	const inventory = document.querySelector('.result-inventory')
	const moving = document.querySelector('.result-total-moving')
	const travel = document.querySelector('.result-total-travel')
	const total = document.querySelector('.result-total-total')
	const fromImg = document.querySelector('.from-img')
	const toImg = document.querySelector('.to-img')
	const clientName = document.querySelector('#client-name')
	const clientPhone = document.querySelector('#client-phone')
	const clientEmail = document.querySelector('#client-email')
	const relocationBlock = document.getElementById('relocation')

	moveDate.textContent = obj.searchParam.datepicker
	moveDay.textContent = getWeekDay(moveDate.textContent)
	estimateDate.textContent = obj.searchParam.estimateDate ? obj.searchParam.estimateDate: new Date().toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
	obj.searchParam.estimateDate = estimateDate.textContent;
	estimateVolume.textContent = `${volSum()} cf. (${volSum() * 7} lbs)`
	obj.searchParam.volume = estimateVolume.textContent;
if (obj.searchParam['details-request'] != ''){
	relocationBlock.insertAdjacentHTML('afterend',` <div class="result-estimate">
                <div class="title-wrap">
                    <h2 class="result-title">Special request & instructions</h2>
                </div>
                <div class="result-block request">${obj.searchParam['details-request']}</div>
            </div>`)
}
	// add block with stairs in info to location
	if (obj.searchParam['select-stairs-from'] !== '0' && obj.searchParam['select-stairs-from'] !== 'e') {
		stairsFrom.innerHTML = `Stairs, Floor: ${obj.searchParam['select-stairs-from']}`
	}
	if (obj.searchParam['select-stairs-to'] !== '0' && obj.searchParam['select-stairs-to'] !== 'e') {
		stairsTo.innerHTML = `Stairs, Floor: ${obj.searchParam['select-stairs-to']}`
	}

	// choice type of move
	if (+obj.searchParam.range <= +prices['local-max-distance']) {
		moveType.textContent = `Local Move, ${obj.searchParam.range} mile`
	} else {
		moveType.textContent = `Long Distance Move, ${obj.searchParam.range} mile`
	}

	if(!obj.searchParam.percent){
		await fetch('getDatesFromDB.php?get', {
			method: 'GET'
		})
			.then((response) => response.json()
			)
			.then((result)=>{
				dates = result
				if (dates[moveDate.textContent]){
					percent = (dates[moveDate.textContent][0] ? dates[moveDate.textContent][0] : dates['calendar-rate'][0] )/100
					obj.searchParam.percent = percent
					return percent
				} else {
					percent = (dates['calendar-rate'][0])/100
					obj.searchParam.percent = percent
					return percent
				}

			})
	} else {
		percent = obj.searchParam.percent
	}


	// insert items in inventory block
	for (let key in obj.choisedItems) {
		let row = document.createElement('tr')
		const itemClass = obj.choisedItems[key].class;
		const name = obj.choisedItems[key].name;
		const subName = obj.choisedItems[key].subname ? obj.choisedItems[key].subname : '';
		const handlingFee = prices[obj.choisedItems[key].cat] ? +prices[obj.choisedItems[key].cat]+(+prices[obj.choisedItems[key].cat]*percent) : 0;
		const volumeFee = ((obj.choisedItems[key].size * prices.costByVol)+(obj.choisedItems[key].size * prices.costByVol*percent)).toFixed(2);
		const qty = obj.choisedItems[key].qty;
		const itemTotal = ((+handlingFee + +volumeFee) * +qty).toFixed(2);
		row.classList.add('inventory-row')
		row.innerHTML = `
						<td>
							<div class="inventory-img ${itemClass}_small"></div>
						</td>
						<td>
							<div class="inventory-row-text">${name}</div>
							<div class="inventory-row-subtext">${subName}</div>
						</td>
						<td>
							<div class="inventory-row-text">${handlingFee}</div>
						</td>
						<td>
							<div class="inventory-row-text">${volumeFee}</div>
						</td>
						<td>
							<div class="inventory-row-text">${qty}</div>
						</td>
						<td>
							<div class="inventory-row-text item-total">${itemTotal}</div>
						</td>

`
		inventory.firstElementChild.appendChild(row)
	}

	//calculate total price from all prices block
	const itemPrices = document.querySelectorAll('.item-total')
	let arrPrice = []
	itemPrices.forEach(value => {
		arrPrice.push(value.textContent)
	})
	let totalMoving = arrPrice.reduce((sum, current) => +sum + (+current), 0).toFixed(2)
	let travelPrice = calculateMovePrice()

	// Additional price if add Pick Up Or Drop Off
	if (obj.searchParam['add-checkbox']) {
		if (obj.searchParam['coi-building-add-pick-up']) {
			totalMoving = +totalMoving + +prices['COI']
		}
		if (obj.searchParam['select-Add-pick-up'] > 2) {
			totalMoving = +totalMoving + (+prices['chargePerFlight'] * volSum()) * (+obj.searchParam['select-Add-pick-up'] - 2).toFixed(2)
		}
		if (obj.searchParam['inputAdd-pick-up'] !== '') {
			travelPrice += 50
		}
	}
	if (obj.searchParam['add-drop-checkbox']) {
		if (obj.searchParam['coi-building-add-drop']) {
			totalMoving = +totalMoving + +prices['COI']
		}
		if (obj.searchParam['select-Add-drop'] > 2) {
			totalMoving = +totalMoving + (+prices['chargePerFlight'] * volSum()) * (+obj.searchParam['select-Add-drop'] - 2).toFixed(2)
		}
		if (obj.searchParam['inputAdd-drop'] !== '') {
			travelPrice += 50
		}
	}


	//Add Coi price if true
	if (obj.searchParam['coi-building-from']) {
		totalMoving = +totalMoving + +prices['COI']
	}
	if (obj.searchParam['coi-building-to']) {
		totalMoving = +totalMoving + +prices['COI']
	}



	// Calculate additional price for floor
	if (obj.searchParam['select-stairs-from'] > 2) {
		totalMoving = (+totalMoving + (+prices['chargePerFlight'] * volSum()) * (+obj.searchParam['select-stairs-from'] - 2)).toFixed(2)
	}
	if (obj.searchParam['select-stairs-to'] > 2) {
		totalMoving = (+totalMoving + (+prices['chargePerFlight'] * volSum()) * (+obj.searchParam['select-stairs-to'] - 2)).toFixed(2)
	}
	//
	// Insert block with additional price for minimum cf price, and calculate total price
	if (volSum() < prices.cfLocal) {
		moving.parentElement.insertAdjacentHTML('afterend', `<tr class="result-tr">
                                <td  data-description="We charges for a minimum of ${prices.cfLocal} cubic feet."  class="tooltip minimum-feet">Minimum cubic feet surcharge:</td>
                                <td class="sum-price">${((prices.cfLocal - volSum()) * prices.costByVol).toFixed(2)} $</td>
                            </tr>`)
		moving.textContent = totalMoving + ' $'
	} else {
		moving.textContent = totalMoving + ' $'
	}
	//
	// Calculate and insert travel price
	travel.textContent = `${travelPrice+(travelPrice*percent)} $`

	// Insert location image and info

	if (obj.searchParam['storage-checkbox'] && obj.searchParam['radioLong']) {
		addressTo.innerHTML = `<div>Move to storage</div>`
		travel.parentElement.insertAdjacentHTML('afterend', `<tr class="result-tr">
                                <td>Storage:</td>
                                <td class="result-total-storage sum-price">${Math.round(prices['storageCost'] * volSum())} $</td>
                            </tr>`)
		moveType.textContent = 'Move to storage'
		travel.textContent = `${+prices['truckCharges'] + +(prices['chargesPerMile'] * 45)} $`
	} else if (obj.searchParam['storage-checkbox'] && obj.searchParam['radioShort']) {
		toImg.innerHTML = `<img src="https://maps.googleapis.com/maps/api/staticmap?markers=color:red%7C${obj.searchParam.destination}&size=200x150&zoom=15&maptype=roadmap&key=AIzaSyAwWXleWh8d8A2lS2TbRAqqGp5-HLKyTh4" alt="Image To">`
		addressTo.innerHTML = parseAddress(obj.searchParam.destination, 'apt-to')
		moveDate.parentElement.insertAdjacentHTML('afterend', `<tr class="result-tr">
                                <td>Out of Storage:</td>
                                <td class="move-out-storage">${obj.searchParam['storage-datepicker']}</td>
                            </tr>`)
		travel.parentElement.insertAdjacentHTML('afterend', `<tr class="result-tr">
                                <td>Storage:</td>
                                <td class="result-total-storage sum-price">${Math.round(prices['storageCost'] * volSum())} $</td>
                            </tr>`)
		moving.textContent = totalMoving * 2 + ' $'

	} else {
		toImg.innerHTML = `<img src="https://maps.googleapis.com/maps/api/staticmap?markers=color:red%7C${obj.searchParam.destination}&size=200x150&zoom=15&maptype=roadmap&key=AIzaSyAwWXleWh8d8A2lS2TbRAqqGp5-HLKyTh4" alt="Image To">`
		addressTo.innerHTML = parseAddress(obj.searchParam.destination, 'apt-to')
	}
	fromImg.innerHTML = `<img src="https://maps.googleapis.com/maps/api/staticmap?markers=color:blue%7C${obj.searchParam.origin}&size=200x150&zoom=15&maptype=roadmap&key=AIzaSyAwWXleWh8d8A2lS2TbRAqqGp5-HLKyTh4" alt="Image From">`
	addressFrom.innerHTML = parseAddress(obj.searchParam.origin, 'apt-from')


	// insert client info
	clientName.textContent = `Name: ${obj.searchParam['details-name']}`
	clientPhone.innerHTML = `<a class="client-phone" href="tel:${obj.searchParam['details-phone']}">Phone: ${obj.searchParam['details-phone']}</a>`
	clientEmail.innerHTML = `<a class="client-email" href="mailto:${obj.searchParam['details-email']}">Email: ${obj.searchParam['details-email']}</a>`



	calculateTotalSum(total)

}
let animation = `<div class="windows8">
                        <div class="wBall" id="wBall_1">
                            <div class="wInnerBall"></div>
                        </div>
                        <div class="wBall" id="wBall_2">
                            <div class="wInnerBall"></div>
                        </div>
                        <div class="wBall" id="wBall_3">
                            <div class="wInnerBall"></div>
                        </div>
                        <div class="wBall" id="wBall_4">
                            <div class="wInnerBall"></div>
                        </div>
                        <div class="wBall" id="wBall_5">
                            <div class="wInnerBall"></div>
                        </div>
                    </div>`
document.forms.writeOrderInDb.addEventListener('click', (event) => {
	event.preventDefault();
	let saveButton = document.querySelector('.saveOrder')
	if(event.target == saveButton){
		obj.searchParam.status = 'New';
		saveOrderToUser(obj,prices,Date.now(),obj.searchParam['details-name'], obj.searchParam['details-email']);
		saveButton.textContent = '';
		saveButton.innerHTML = animation
	}
	let acceptButton = document.querySelector('.acceptOrder')
	let completeButton = document.querySelector('.completeOrder')
	if(event.target == acceptButton){
		acceptButton.innerHTML = animation

		changeStatusOfOrder(acceptButton)
	}
	if(event.target == completeButton){
		acceptButton.style.display = 'none'
		completeButton.innerHTML = animation
		changeStatusOfOrder(completeButton)
	}
})

function changeStatusOfOrder(button) {
	button.setAttribute('type','button')
	obj.searchParam.status = button.dataset.type;
	let order = localStorage.orderId
	fetch('updateOrderStatus.php', {
		method: 'POST',
		body: JSON.stringify({obj, order})
	})
		.then(() => {
			button.textContent = button.dataset.type
			button.classList.add('ok')
		})
		.catch((error) => {
			resultForm.innerHTML = `<div class="result-save-info">
                        <h2>Error!</h2>
                        <div>${error}</div>
                        <div>Update page and try again</div>
                    </div>`
		})

}

function saveOrderToUser(values,prices,order, name, email) {
	fetch('saveOrderToUser.php', {
		method: 'POST',
		body: JSON.stringify({values,prices, order, name, email })
	})
		.then((promise) => {
			let saveButton = document.querySelector('.saveOrder')
			localStorage.saved = 1
			saveButton.style.display = 'none'
			resultForm.insertAdjacentHTML('afterend', `<div class="result-save-info">
                        <h2>Your order save!</h2>
                        <div>You can change your items and parameters in <a class="save-link" href="/profile">Profile Page</a></div>
                    </div>`)
			resultForm.remove();
		})
		.then(()=>{
			localStorage.removeItem('savedInfo')
		})
		.catch((error) => {
			resultForm.innerHTML = `<div class="result-save-info">
                        <h2>Error!</h2>
                        <div>${error}</div>
                        <div>Update page and try again</div>
                    </div>`
		})

}


