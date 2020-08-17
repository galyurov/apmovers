Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

let calendar = document.getElementById('calendar');
let monthText = document.querySelector('.calendar-month-text');

let selectYear = document.getElementById('year')
let datesRate;
let selectedDay;
let calendarRate;
let dayRate;
let editBlock = document.querySelector('.calendar-day-rate')
let editTitle = document.querySelector('.calendar-day-title')
let editCommands = document.querySelector('.calendar-input-commands')
let editRate = document.querySelector('.calendar-input-rate')
let editButton = document.querySelector('.calendar-day-button')


class Calendar {
    constructor(month,year) {
        this.month = month
        this.year = year
    }
    getFirstDayOfMonth() {
        let firstDayOfMonth = new Date();
        firstDayOfMonth.setFullYear(this.year,this.month,1)
        return firstDayOfMonth
    }
    getDaysInMonth() {
        let daysInMonth = this.getFirstDayOfMonth(this.month).daysInMonth();
        return daysInMonth
    }
    setMonth(month){
        this.month = month
    }
    setYear(year){
        this.year = year
    }
    insertCurrentMonth(){
        let monthArr = ['January', 'February','March','April','May','June','July','August','September','October','November','December']
        monthText.textContent = monthArr[this.month];
        monthText.dataset.month = this.month;
    }
    insertYearInSelect(){
        selectYear.innerHTML = `<option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option><option value="2025">2025</option>`
    }
    render() {
        calendar.innerHTML = ``;
        for (let i = 1; i <= 42; i++) {
            let date = `${this.month+1}/${i - this.getFirstDayOfMonth().getDay()}/${this.year}`
            if (i - 1 < this.getFirstDayOfMonth().getDay() || i > this.getDaysInMonth()+this.getFirstDayOfMonth().getDay()) {

                let block = document.createElement('div');
                block.classList.add('another-month-day');
                calendar.appendChild(block);
            } else {
                let block = document.createElement('div');
                block.classList.add('calendar-day');
                block.dataset.day = i - this.getFirstDayOfMonth().getDay();
                if(block.dataset.day == new Date().getDate() && monthText.dataset.month == new Date().getMonth() && this.year == new Date().getFullYear()){
                    block.classList.add('currentDay');
                }
                block.innerHTML =
                    `<div data-date="${date}" class="calendar-day-number">${i - this.getFirstDayOfMonth().getDay()}</div>
<div class="calendar-day-block">
<div class="calendar-day-qty">${datesRate[date]? datesRate[date][1] : 3}</div>
 <div class="calendar-day-percent">${datesRate[date]? datesRate[date][0] : calendarRate}%</div>
    </div>`;
                calendar.appendChild(block);
            }
        }
    }
}

let monthBlock = document.querySelector('.calendar-month')

monthBlock.addEventListener('click', (event)=>{
    if(event.target.dataset.type === 'prev' && monthText.dataset.month > 0 && monthText.dataset.month <= 11){
        calendarClass.setMonth(monthText.dataset.month-1)
        calendarClass.insertCurrentMonth()
        calendarClass.render();
        daysListener()
    }else if(event.target.dataset.type === 'prev' && monthText.dataset.month == 0 && selectYear.value > 2020){
        calendarClass.setMonth(monthText.dataset.month = 11)
        calendarClass.setYear(calendarClass.getFirstDayOfMonth().getFullYear()-1)
        calendarClass.insertCurrentMonth()
        selectYear.value = calendarClass.getFirstDayOfMonth().getFullYear()
        calendarClass.render();
        daysListener()
    }
    if(event.target.dataset.type === 'next' && monthText.dataset.month >= 0 && monthText.dataset.month < 11){
        calendarClass.setMonth(+monthText.dataset.month+1)
        calendarClass.insertCurrentMonth()
        calendarClass.render();
        daysListener()
    } else if(event.target.dataset.type === 'next' && monthText.dataset.month == 11 && selectYear.value < 2025){
        calendarClass.setMonth(monthText.dataset.month = 0)
        calendarClass.setYear(+calendarClass.getFirstDayOfMonth().getFullYear()+1)
        calendarClass.insertCurrentMonth()
        selectYear.value = calendarClass.getFirstDayOfMonth().getFullYear()
        calendarClass.render();
        daysListener()
    }
})



selectYear.addEventListener('change',event=>{
    calendarClass.setYear(+event.target.value)
    calendarClass.render();
    daysListener()
})
let calendarClass = new Calendar(new Date().getMonth(),new Date().getFullYear());

window.addEventListener('load',()=> {
    getDates()
})

function getDates() {
    fetch('getDatesFromDB.php?get', {
        method: 'GET'
    })
        .then((response) => response.json()
        )
        .then((result)=>{
            calendarClass.insertCurrentMonth();
            calendarClass.insertYearInSelect();
            datesRate = result
            calendarRate = result['calendar-rate'][0]
            rate.value = result['calendar-rate'][0]
            calendarClass.render();
            daysListener()
        })
}
function daysListener() {
    let days = document.querySelectorAll('.calendar-day')
    days.forEach(value => {
        value.addEventListener('click',()=>{
            days.forEach(value1 => {
                value1.classList.remove('selected')
            })
            selectedDay = value
            value.classList.add('selected')
            editBlock.classList.remove('hide')
            editDay(value)
        })
    })

}
function editDay(day) {
    editTitle.textContent = day.firstElementChild.dataset.date
    editCommands.value =  day.lastElementChild.firstElementChild.textContent
    editRate.value = day.lastElementChild.lastElementChild.textContent.replace('%','')
}
editButton.addEventListener('click', ()=> {
    fetch('sendDatesToDB.php', {
        method: 'POST',
        body: JSON.stringify({[editTitle.textContent]: {'rate':editRate.value,'commands':editCommands.value}})
    })
        .then((promise) => console.log(promise))
        .catch((error) => console.log(error))

    selectedDay.lastElementChild.lastElementChild.textContent = editRate.value+'%'
    selectedDay.lastElementChild.firstElementChild.textContent = editCommands.value
    datesRate[editTitle.textContent] = [editRate.value,editCommands.value]
})