const movingLocal = document.getElementById('local');
const movingLong = document.getElementById('longDistance');
const movingHead = document.querySelector(".hourly-head");
const localCards = document.querySelector('.local')
const longCards = document.querySelector('.long')
const back = document.querySelector('.main-screen__bg')
const orderNow = document.querySelectorAll('.card-button');
let my = {}

let counter = 1;

function changeBackground() {
    back.style.backgroundImage = `url("wp-content/themes/apmovers/img/slide${counter}.jpg")`;
    if (counter < 10){
        counter++;
    } else {
        counter = 1;
    }

}
setInterval(changeBackground,3000)

movingHead.addEventListener("click", ()=>{
    event.preventDefault()
    if (event.target == movingLong && !movingLong.classList.contains('.hourly-title.title-active')){
        movingLong.classList.add('title-active');
        movingLocal.classList.remove('title-active');
        showMovingPrices('long')
    }
    if (event.target == movingLocal && !movingLocal.classList.contains('.hourly-title.title-active')) {
        movingLocal.classList.add('title-active');
        movingLong.classList.remove('title-active')
        showMovingPrices('local')
    }
})

function showMovingPrices(param) {
    if (param === 'long'){
        localCards.style.transform=`translateY(-${localCards.offsetHeight}px)`;
        longCards.style.top='0'
    }
    if (param === 'local') {
        localCards.style.transform=`translateY(0px)`;
        longCards.style.top=`${longCards.offsetHeight}px`
    }
}

Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}
function _createModal(id) {
    const modal = document.getElementById('vmodal')
    return modal
}

my.modal = function (id) {
    const ANIMATION_SPEED = 300;
    const $modal = _createModal(id);
    const modal = {
        open() {
            $modal.classList.add('open');
        },
        close() {
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            if (modalOrderButton.innerText !== 'Send your order') {
                modalOrderButton.innerText = 'Send your order';
                modalOrderButton.classList.remove('send');
            }
            setTimeout(() => {
                $modal.classList.remove('hide');
            }, ANIMATION_SPEED)
        }
    }
    const listener = event => {
        if (event.target.dataset.close) {
            modal.close()
        }
    }
    $modal.addEventListener('click', listener)
    return modal;
}


let priceModal;
orderNow.forEach(value => {
    value.addEventListener("click", event => {
        event.preventDefault();
        let id =  event.target.dataset.id
        priceModal = my.modal(id);
        priceModal.open()
    })
})

let modalOrderButton = document.getElementById('modalButton');
modalOrderButton.addEventListener('click',(event)=> {
    event.preventDefault();
    let modalInfo = {
        Name: document.getElementById('modalName').value,
        Phone: document.getElementById('modalPhone').value,
        Email: document.getElementById('modalEmail').value,
        From: document.getElementById('modal-input-from').value,
        To: document.getElementById('modal-input-to').value,
        Date: document.getElementById('modalDatepicker').value,
    }
    let text = `<b><i>ORDER</i></b>
<b>${modalInfo.Name}</b>,
${modalInfo.Phone},
${modalInfo.Email},
From: ${modalInfo.From};
To: ${modalInfo.To};
${modalInfo.Date},

<a href="https://maps.google.com?saddr=${modalInfo.From}&daddr=${modalInfo.To}">Navi</a>`
    if(modalInfo.Name && modalInfo.Phone && modalInfo.Email && modalInfo.From && modalInfo.To && modalInfo.Date) {
        postData(text)
            .then((data) => {
                if (data.ok) {
                    event.target.innerText = 'Your order send';
                    event.target.classList.add('send')
                    setTimeout(priceModal.close, 1000);
                    document.getElementById('modalName').value = '';
                    document.getElementById('modalPhone').value = '';
                    document.getElementById('modalEmail').value = '';
                    document.getElementById('modal-input-from').value = '';
                    document.getElementById('modal-input-to').value = '';
                    document.getElementById('modalDatepicker').value = '';
                }
            })
    }
})
async function postData(text) {
    const response = await fetch('https://api.telegram.org/bot1192366179:AAEGgX1rrt12A1ZtuE_Gd2s9qadjeEqG3f8/sendMessage', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"chat_id":375532873, "parse_mode":"HTML", "text":text})
    });
    return await response.json();
}
let footerSubmit = document.getElementById('footerButton');
footerSubmit.addEventListener('click', (event)=> {
    event.preventDefault()
    let submitInfo = {
        Name: document.getElementById('footerInputName').value,
        Email: document.getElementById('footerInputEmail').value,
        Phone: document.getElementById('footerInputPhone').value,
        Text: document.getElementById('footerInputText').value,
    };
    let text = `<b><i>CONTACT</i></b>
<b>${submitInfo.Name}</b>,
${submitInfo.Phone},
${submitInfo.Email},
${submitInfo.Text},`
    if(submitInfo.Name && submitInfo.Phone && submitInfo.Email && submitInfo.Text) {
        postData(text)
            .then((data) => {
                if (data.ok) {
                    event.target.innerText = 'Your message send';
                    event.target.classList.add('send')

                }
            })
    }
})









