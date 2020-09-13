let orders = {};
window.addEventListener('load',()=> {
    fetch('getUserOrders.php?get', {
        method: 'GET'
    })
        .then((response) => console.log(response))
        .then((result)=>{
            result.reverse();
            orders = result
            render(orders)
        })
        .then(()=> {
            setListenerOnLinks()
        })
})
let ordersTable = document.querySelector('.orders-table')
function render(orders) {
    for(let order of orders) {
        let params = JSON.parse(order[3])
        if (params.searchParam) {
            let orderRow = document.createElement('tr')
            orderRow.innerHTML = `  
        <td><a class="order-link" data-id="${order[0]}" href="orderInfo.html?${params.searchParam.estimateDate}-${order[1]}">${params.searchParam.estimateDate}-${order[1]}</a></td>
        <td>${params.searchParam.datepicker}</td>
        <td>${params.searchParam.range} mi</td>
        <td>${params.searchParam.volume}</td>
        <td>${params.searchParam.totalPrice} $</td>
        <td>${params.searchParam.status}</td>`
            if (params.searchParam.status === 'Completed') {
                orderRow.classList.add('completed')
            }
            if (params.searchParam.status === 'Accepted') {
                orderRow.classList.add('accepted')
            }
            ordersTable.appendChild(orderRow)
        }
        else {
            let info = JSON.parse(order[4])
            let orderRow = document.createElement('tr')
            orderRow.innerHTML = `  
            <td><a class="order-link" data-id="${order[0]}" href="orderInfo.html?${params.estimateDate}-${order[1]}">${params.estimateDate}-${order[1]}</a></td>     
            <td>${params['datepicker']}</td>
            <td>${info['type']}</td>
            <td>${info['name']}</td>
            <td>${info['price']} $</td>
            <td>${params.status}</td>`
            if (params.status === 'Completed') {
                orderRow.classList.add('completed')
            }
            if (params.status === 'Accepted') {
                orderRow.classList.add('accepted')
            }
            ordersTable.appendChild(orderRow)
        }
    }
}

function setListenerOnLinks() {
    let links = document.querySelectorAll('.order-link')
    links.forEach(value => {
        value.addEventListener('click', ()=>{
            localStorage.orderId = value.dataset.id
            localStorage.orderNumber = value.textContent
            let result = orders.find(item => item[0]===value.dataset.id)[3].replace(/u0027/g,'\'').replace(/u0026/g,'\&')
            let prices = orders.find(item => item[0]===value.dataset.id)[4].replace(/u0027/g,'\'').replace(/u0026/g,'\&')
            localStorage.savedInfo = result
            localStorage.prices = prices
        })
    })
}



