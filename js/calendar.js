Date.prototype.daysInMonth = function () {
	return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};


let calendar = document.getElementById('calendar');

function getFirstDayOfMonth(month) {
	if (!month) {
		let firstDayOfMonth = new Date();
		firstDayOfMonth.setDate(1);
		return firstDayOfMonth
	} else {
		let firstDayOfMonth = new Date();
		firstDayOfMonth.setDate(1);
		firstDayOfMonth.setMonth(+month);
		return firstDayOfMonth
	}

}

function getDaysInMonth(month) {
	let daysInMonth = getFirstDayOfMonth(month).daysInMonth();
	return daysInMonth
}




function render(month) {
	calendar.innerHTML = ``;
	for (let i = 1; i <= getDaysInMonth(month) + getFirstDayOfMonth(month).getDay(); i++) {
		if (i - 1 < getFirstDayOfMonth(month).getDay()) {
			let block = document.createElement('div');
			block.innerHTML = `<div></div>`;
			calendar.appendChild(block);
		} else {
			let block = document.createElement('div');
			block.classList.add('calendar-day');
			block.dataset.day = i - getFirstDayOfMonth(month).getDay();
			block.innerHTML =
				`<div class="calendar-day-number">${i - getFirstDayOfMonth(month).getDay()}</div>
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
render();


let monthText = document.querySelector('.calendar-month-text')


function resetSelectedDays(){

	let allCalendarDays = document.querySelectorAll('.calendar-day')

	allCalendarDays.forEach(element=> {
		if( element.dataset.day == new Date().getDate() ){
			element.classList.add('currentDay')
		}
		// element.classList.remove('selected')
		// element.addEventListener('click',(event) => {
		// 	resetSelectedDays();
		// 	event.currentTarget.classList.add('selected')
		// });
	})
}



function insertCurrentMonth(month){
	let monthArr = ['January', 'February','March','April','May','June','July','August','September','October','November','December']
	if (month === undefined){
		monthText.textContent = monthArr[getFirstDayOfMonth().getMonth()]
		monthText.dataset.month = getFirstDayOfMonth().getMonth()
		render(month)
	} else if(month >=0 && month<11){
		monthText.textContent = monthArr[+month]
		monthText.dataset.month = +month
		render(month)
	} else if(month <=11 && month > 0) {
		monthText.textContent = monthArr[+month]
		monthText.dataset.month = +month
		render(month)
	}

}

let monthBlock = document.querySelector('.calendar-month')

monthBlock.addEventListener('click', (event)=>{
	if(event.target.dataset.type === 'prev'){
		insertCurrentMonth(monthText.dataset.month-1)
	}
	if(event.target.dataset.type === 'next'){
		insertCurrentMonth(+monthText.dataset.month+1)
	}
})




resetSelectedDays();
insertCurrentMonth()