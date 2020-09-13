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
// setInterval(changeBackground,3000)

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
        if (window.matchMedia("(max-width: 400px)").matches){
            longCards.parentElement.style.height = '1940px';
        }
    }
    if (param === 'local') {
        localCards.style.transform=`translateY(0px)`;
        longCards.style.top=`${longCards.offsetHeight}px`
        longCards.parentElement.style.height = '100%';
    }
}

Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}

my.modal = function (id) {
    const ANIMATION_SPEED = 300;
    const $modal = document.getElementById('vmodal');
    $modal.firstElementChild.firstElementChild.lastElementChild.dataset.id = id
    const modal = {
        open() {
            $modal.classList.add('open');
        },
        close() {
            $modal.classList.remove('open');
            $modal.classList.add('hide');

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


document.forms.modalForm.addEventListener('submit',(event)=> {
    const ordersType = {
        '148597': {
            name:'Economy',
            type:'Local Moving',
            price:460
        },
        '148503': {
            name:'Standard',
            type:'Local Moving',
            price:540
        },
        '148561': {
            name:'Premium',
            type:'Local Moving',
            price:660
        },
        '158241': {
            name:'2 bedroom, <500 mi',
            type:'Long Distance Moving',
            price:1800
        },
        '158259': {
            name:'2 bedroom, 500-1000 mi',
            type:'Long Distance Moving',
            price:2100
        },
        '158208': {
            name:'2 bedroom, 1100-1600 mi',
            type:'Long Distance Moving',
            price:2600
        },
        '158277': {
            name:'3 bedroom',
            type:'Long Distance Moving',
            price:2900
        }
    }
    event.preventDefault();
    let values={};
    for(let item of document.forms.modalForm){
        values[item.id]=item.value
    }
    let options = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
    };
    values.estimateDate = new Date().toLocaleString('en-US', options);
    values.status = 'New'
    fetch('/wp-content/themes/apmovers/saveOrderToUser.php', {
        method: 'POST',
        body: JSON.stringify({values,prices: ordersType[event.currentTarget.dataset.id], order: Date.now(),name:values['modalName'],email:values['modalEmail']})
    })
        .then((response)=>console.log(response))
})
async function postData(text) {
    const response = await fetch('/wp-content/themes/apmovers/sendContactMessage.php', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(text)
    });
    return  response;
}
let footerSubmit = document.getElementById('footerButton');
footerSubmit.addEventListener('click', (event)=> {
    event.preventDefault()
   setMessage(event)
})

function setMessage(event) {
    let submitInfo = {
        name: document.getElementById('footerInputName').value,
        email: document.getElementById('footerInputEmail').value,
        phone: document.getElementById('footerInputPhone').value,
        text: document.getElementById('footerInputText').value,
    };
    if(submitInfo.name && submitInfo.phone && submitInfo.email && submitInfo.text) {
        postData(submitInfo)
            .then((data) => {
                if (data.ok) {
                    event.target.innerText = 'Your message send';
                    event.target.classList.add('send')
                    document.getElementById('footerInputName').value =  document.getElementById('footerInputEmail').value =  document.getElementById('footerInputPhone').value =  document.getElementById('footerInputText').value = ''
                }
            })
    }
}






