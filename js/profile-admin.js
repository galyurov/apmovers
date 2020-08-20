let orders = {};
window.addEventListener('load',()=> {
    fetch('getOrdersFromDB.php?get', {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((result)=>{
            orders = result
            setOrderFromDB()
        })
        .then(()=> {
            setListenerOnLinks()
        })
})
let ordersTable = document.querySelector('.orders-table')

function setOrderFromDB() {
    for(let order of orders){
        render(order)
    }
}

function render(order) {
    let params = JSON.parse(order[3])
    let orderRow = document.createElement('tr')
    orderRow.innerHTML = `  
    <td><a class="order-link" data-id="${order[1]}" href="order.html">${params.searchParam.estimateDate}- ${order[1]}</a></td>
    <td>${params.searchParam['details-name']}</td>
    <td>${params.searchParam['details-phone']}</td>
    <td>${params.searchParam.datepicker}</td>
    <td>${params.searchParam.range} mi</td>
    <td>${params.searchParam.volume}</td>
    <td>${params.searchParam.totalPrice} $</td>
    <td>${params.searchParam.status}</td>`
    if(params.searchParam.status === 'Completed') {orderRow.classList.add('completed')}
    if(params.searchParam.status === 'Accepted') {orderRow.classList.add('accepted')}
    ordersTable.appendChild(orderRow)
}

function setListenerOnLinks() {
    let links = document.querySelectorAll('.order-link')
    links.forEach(value => {
        value.addEventListener('click', ()=>{
            localStorage.orderId = value.dataset.id
            localStorage.savedInfo = orders[value.dataset.id][2].replace(/u0027/g,'\'')
        })
    })
}