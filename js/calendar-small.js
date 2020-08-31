Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};
const inputDatepicker = document.querySelector('#datepicker')
const storageDatepicker = document.querySelector('#storage-datepicker')
if(inputDatepicker){
    inputDatepicker.addEventListener('click',(event)=>{
        event.target.nextElementSibling.classList.toggle('hide')
    })
}
if(storageDatepicker){
    storageDatepicker.addEventListener('click',(event)=>{
        event.target.nextElementSibling.classList.toggle('hide')
    })
}


class Calendar {
    constructor(month,year,calendar,monthText) {
        this.month = month
        this.year = year
        this.calendar = calendar
        this.monthText = monthText
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
        this.monthText.textContent = `${monthArr[this.month]}, ${this.year}`;
        this.monthText.dataset.month = this.month;
    }
    render() {
        this.calendar.innerHTML = ``;
        for (let i = 1; i <= 42; i++) {
            let date = `${this.month+1}/${i - this.getFirstDayOfMonth().getDay()}/${this.year}`
            if (i - 1 < this.getFirstDayOfMonth().getDay() || i > this.getDaysInMonth()+this.getFirstDayOfMonth().getDay()) {

                let block = document.createElement('div');
                block.classList.add(`another-month-day`)
                block.classList.add('another-small');
                this.calendar.appendChild(block);
            } else {
                let block = document.createElement('div');
                if(this.calendar.id === 'storage-block'){
                    block.classList.add('storage-day')
                }
                block.classList.add('day-small');
                block.dataset.day = i - this.getFirstDayOfMonth().getDay();
                block.innerHTML =`<div data-date="${date}" class="calendar-day-number day-number-small">${i - this.getFirstDayOfMonth().getDay()}</div>`;
                if(this.calendar.id === 'calendar-block'){
                    block.classList.add('calendar-day')
                    if(this.result[date] && this.result[date][1] == '0'){
                        block.classList.add('inactive')
                        block.classList.add('tooltip')
                        let tooltip = document.createElement('span')
                        tooltip.classList.add('tooltiptext')
                        tooltip.textContent ='Sorry, all trucks are busy this day. Choice another date.'
                        block.appendChild(tooltip)
                    }
                }
                if(block.dataset.day == new Date().getDate() && this.monthText.dataset.month == new Date().getMonth() && this.year == new Date().getFullYear()){
                    block.classList.add('currentDay');
                }


                this.calendar.appendChild(block);
            }
        }
    }
}

let monthBlock = document.querySelector('.calendar-month')
let monthStorage = document.querySelector('.storage-month')

if(monthBlock) {
    monthBlock.addEventListener('click', (event) => {
        if (event.target.dataset.type === 'prev' && calendarMain.monthText.dataset.month > 0 && calendarMain.monthText.dataset.month <= 11) {
            calendarMain.setMonth(calendarMain.monthText.dataset.month - 1);
            calendarMain.insertCurrentMonth();
            calendarMain.render();
            daysListener(inputDatepicker);
        } else if (event.target.dataset.type === 'prev' && calendarMain.monthText.dataset.month == 0 && calendarMain.year > 2020) {
            calendarMain.setMonth(calendarMain.monthText.dataset.month = 11);
            calendarMain.setYear(calendarMain.getFirstDayOfMonth().getFullYear() - 1);
            calendarMain.insertCurrentMonth();
            calendarMain.render();
            daysListener(inputDatepicker);
        }
        if (event.target.dataset.type === 'next' && calendarMain.monthText.dataset.month >= 0 && calendarMain.monthText.dataset.month < 11) {
            calendarMain.setMonth(+calendarMain.monthText.dataset.month + 1);
            calendarMain.insertCurrentMonth();
            calendarMain.render();
            daysListener(inputDatepicker);
        } else if (event.target.dataset.type === 'next' && calendarMain.monthText.dataset.month == 11 && calendarMain.year < 2025) {
            calendarMain.setMonth(calendarMain.monthText.dataset.month = 0);
            calendarMain.setYear(+calendarMain.getFirstDayOfMonth().getFullYear() + 1);
            calendarMain.insertCurrentMonth();
            calendarMain.render();
            daysListener(inputDatepicker);
        }
    }, true)
}

if(monthStorage) {
    monthStorage.addEventListener('click', (event) => {
        if (event.target.dataset.type === 'prev' && calendarStorage.monthText.dataset.month > 0 && calendarStorage.monthText.dataset.month <= 11) {
            calendarStorage.setMonth(calendarStorage.monthText.dataset.month - 1);
            calendarStorage.insertCurrentMonth();
            calendarStorage.render();
            daysListener(null, storageDatepicker);
        } else if (event.target.dataset.type === 'prev' && calendarStorage.monthText.dataset.month == 0 && calendarStorage.year > 2020) {
            calendarStorage.setMonth(calendarStorage.monthText.dataset.month = 11);
            calendarStorage.setYear(calendarStorage.getFirstDayOfMonth().getFullYear() - 1);
            calendarStorage.insertCurrentMonth();
            calendarStorage.render();
            daysListener(null, storageDatepicker);
        }
        if (event.target.dataset.type === 'next' && calendarMain.monthText.dataset.month >= 0 && calendarStorage.monthText.dataset.month < 11) {
            calendarStorage.setMonth(+calendarStorage.monthText.dataset.month + 1);
            calendarStorage.insertCurrentMonth();
            calendarStorage.render();
            daysListener(null, storageDatepicker);
        } else if (event.target.dataset.type === 'next' && calendarStorage.monthText.dataset.month == 11 && calendarStorage.year < 2025) {
            calendarStorage.setMonth(calendarStorage.monthText.dataset.month = 0);
            calendarStorage.setYear(+calendarStorage.getFirstDayOfMonth().getFullYear() + 1);
            calendarStorage.insertCurrentMonth();
            calendarStorage.render();
            daysListener(null, storageDatepicker);
        }
    }, true)
}
let calendar = document.getElementById('calendar-block');
let monthText = document.querySelector('.calendar-month-text');
let storageBlock = document.getElementById('storage-block');
let storageText = document.querySelector('.storage-month-text');
let calendarStorage;
let calendarMain;




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
            if(storageText && storageBlock){
                calendarStorage = new Calendar(new Date().getMonth(),new Date().getFullYear(),storageBlock,storageText)
                calendarStorage.result = result
                calendarStorage.insertCurrentMonth();
                calendarStorage.render();
            }
            if(calendar && monthText){
                calendarMain = new Calendar(new Date().getMonth(),new Date().getFullYear(),calendar,monthText);
                calendarMain.result = result
                calendarMain.insertCurrentMonth();
                calendarMain.render();
            }
        })
        .then(()=> {
            daysListener(inputDatepicker,storageDatepicker)
        })
}
function daysListener(input,storage) {
    if(input){
        let days = document.querySelectorAll('.calendar-day')
        days.forEach(value => {
            if(!value.classList.contains('inactive')){
                value.addEventListener('click',()=>{
                    input.value = value.firstElementChild.dataset.date
                    input.nextElementSibling.classList.toggle('hide')
                })
            }
        })
    }
    if(storage){
        let days = document.querySelectorAll('.storage-day')
        days.forEach(value => {
            value.addEventListener('click',()=>{
                storage.value = value.firstElementChild.dataset.date
                storage.nextElementSibling.classList.toggle('hide')
            })
        })
    }


}