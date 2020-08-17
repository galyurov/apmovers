let rate = document.querySelector('.calendar-rate-input')
let rateButton = document.querySelector('.rate-button')

rateButton.addEventListener('click', () => {
     fetch('sendDatesToDB.php', {
        method: 'POST',
        body: JSON.stringify({[rate.name]:{'rate': rate.value}})
    })
    .then((promise) => console.log(promise))
    .catch((error) => console.log(error))
})




