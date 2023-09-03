class EndOfVacation{
    constructor(vacationPeriod){
        this.vacationPeriod = vacationPeriod
        
    }
    
    
    returningDay(){
        let firstVacationDay = new Date(this.vacationInput.value).getTime()
        console.log(firstVacationDay)
        let vacationTimestamp = firstVacationDay + (this.vacationPeriod * 24 * 60 * 60 * 1000)
        let lastVacationDay = new Date(vacationTimestamp).toLocaleDateString()
        console.log(this.vacationPeriod)
        this.vacationSpan.innerText = `Останній день відпустки - ${lastVacationDay}`
    }

    render(containerSelector){
        let vacationWrapper = document.querySelector(containerSelector)
        
            let vacationLabel = document.createElement('label')
            vacationLabel.setAttribute('for','vacationInput')
            vacationLabel.innerText = 'Введіть початкову дату відпустки'
            vacationWrapper.append(vacationLabel)

            let vacationInput = document.createElement('input')
            vacationInput.setAttribute('id','vacationInput')
            vacationInput.setAttribute('value','2023-09-02')
            vacationWrapper.append(vacationInput)
            this.vacationInput = vacationInput

            let vacationButton = document.createElement('button')
            vacationButton.setAttribute('id','vacationButton')
            vacationButton.innerText = 'Розрахувати'
            vacationWrapper.append(vacationButton)
            vacationButton.onclick = this.returningDay.bind(this)

            let vacationSpan = document.createElement('span')
            vacationSpan.setAttribute('id','vacationAnswer')
            vacationWrapper.append(vacationSpan)       
            this.vacationSpan = vacationSpan 
    }

}


window.onload = function () {
    let vacationPeriod = 56
    let myVacation = new EndOfVacation(vacationPeriod)
    // console.log(myVacation);
    myVacation.render('.vacationWrapper')
}