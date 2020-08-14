let rate = document.querySelector('.calendar-rate')
let rateButton = document.querySelector('.rate-button')

rateButton.addEventListener('click', () => {
     fetch('sendPriceToDB.php', {
        method: 'POST',
        body: JSON.stringify(rate.value)
    })
    .then((promise) => console.log(promise))
    .catch((error) => console.log(error))
})

window.addEventListener('load',()=> {
    fetch('getPricesinDB.php?get', {
            method: 'GET'
    })
        .then((response) => {
            console.log(response)
        })
        .then((result)=>{
            console.log(result)
        })
    // .then((responce) => responce.json())
    // .then((result) => {
    //     putPricesInInputs(result)
    // })
    // .catch((error) => console.error(error))
})