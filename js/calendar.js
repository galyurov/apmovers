Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

let calendar = document.getElementById('calendar');

let monthText = document.querySelector('.calendar-month-text')

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
    render() {
        calendar.innerHTML = ``;
        for (let i = 1; i <= this.getDaysInMonth(this.month) + this.getFirstDayOfMonth(this.month).getDay(); i++) {
            if (i - 1 < this.getFirstDayOfMonth(this.month).getDay()) {
                let block = document.createElement('div');
                block.innerHTML = `<div></div>`;
                calendar.appendChild(block);
            } else {
                let block = document.createElement('div');
                block.classList.add('calendar-day');
                block.dataset.day = i - this.getFirstDayOfMonth(this.month).getDay();
                if(block.dataset.day == new Date().getDate() && monthText.dataset.month == new Date().getMonth()){
                    block.classList.add('currentDay');
                }
                block.innerHTML =
                    `<div class="calendar-day-number">${i - this.getFirstDayOfMonth().getDay()}</div>
			            <div class="calendar-day-block">
				            <div class="calendar-day-pm">
					        <div class="calendar-day-qty">3</div>
					        <div class="calendar-day-percent">25%</div>
				        </div>
			        </div>`;
                calendar.appendChild(block);
            }
        }
    }
}

let monthBlock = document.querySelector('.calendar-month')

monthBlock.addEventListener('click', (event)=>{
    if(event.target.dataset.type === 'prev' && monthText.dataset.month>0 && monthText.dataset.month<=11){
        calendarClass.setMonth(monthText.dataset.month-1)
        calendarClass.insertCurrentMonth()
        calendarClass.render();
    }
    if(event.target.dataset.type === 'next' && monthText.dataset.month>=0 && monthText.dataset.month<11){
        console.log('+++')
        calendarClass.setMonth(+monthText.dataset.month+1)
        calendarClass.insertCurrentMonth()
        calendarClass.render();
    }
})
let calendarClass = new Calendar(new Date().getMonth(),new Date().getFullYear());
calendarClass.insertCurrentMonth();
calendarClass.render();

