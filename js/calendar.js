Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

let calendar = document.getElementById('calendar');

let monthText = document.querySelector('.calendar-month-text');

let selectYear = document.getElementById('year')

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
    if(event.target.dataset.type === 'prev' && monthText.dataset.month > 0 && monthText.dataset.month <= 11){
        calendarClass.setMonth(monthText.dataset.month-1)
        calendarClass.insertCurrentMonth()
        calendarClass.render();
    }else if(event.target.dataset.type === 'prev' && monthText.dataset.month == 0 && selectYear.value > 2020){
        calendarClass.setMonth(monthText.dataset.month = 11)
        calendarClass.setYear(calendarClass.getFirstDayOfMonth().getFullYear()-1)
        calendarClass.insertCurrentMonth()
        selectYear.value = calendarClass.getFirstDayOfMonth().getFullYear()
        calendarClass.render();
    }
    if(event.target.dataset.type === 'next' && monthText.dataset.month >= 0 && monthText.dataset.month < 11){
        calendarClass.setMonth(+monthText.dataset.month+1)
        calendarClass.insertCurrentMonth()
        calendarClass.render();
    } else if(event.target.dataset.type === 'next' && monthText.dataset.month == 11 && selectYear.value < 2025){
        calendarClass.setMonth(monthText.dataset.month = 0)
        calendarClass.setYear(+calendarClass.getFirstDayOfMonth().getFullYear()+1)
        calendarClass.insertCurrentMonth()
        selectYear.value = calendarClass.getFirstDayOfMonth().getFullYear()
        calendarClass.render();
    }
})

let calendarClass = new Calendar(new Date().getMonth(),new Date().getFullYear());
calendarClass.insertCurrentMonth();
calendarClass.insertYearInSelect();
calendarClass.render();

selectYear.addEventListener('change',event=>{
    calendarClass.setYear(+event.target.value)
    calendarClass.render();
})

