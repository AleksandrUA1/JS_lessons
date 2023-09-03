class RentPeriod{
    constructor(){

    }

    rentalReturningDate(){
        let currentDate = new Date().getTime()
        console.log(currentDate);
        
        let userHoursRentalPeriod = this.rentalInput.value * 60 * 60 * 1000
        console.log(userHoursRentalPeriod);
        
        let endRentalDate = new Date(currentDate + userHoursRentalPeriod).toLocaleString()
        console.log(endRentalDate);
        this.rentalSpan.innerText = `
        Автомобіль потрібно повернути не пізніше - ${endRentalDate}
        `
    }

    render(containerSelector){
        let rentalWrapper = document.querySelector(containerSelector)

            let rentalLabel = document.createElement('label')
            rentalLabel.setAttribute('for','rentalInput')
            rentalLabel.innerText = 'На скільки годин берете авто в оренду?'
            rentalWrapper.append(rentalLabel)

            let rentalInput = document.createElement('input')
            rentalInput.setAttribute('id','rentalInput')
            rentalInput.setAttribute('value','60')
            rentalWrapper.append(rentalInput)
            this.rentalInput = rentalInput

            let rentalButton = document.createElement('button')
            rentalButton.setAttribute('id','rentalButton')
            rentalButton.innerText = 'Розрахувати'
            rentalWrapper.append(rentalButton)
            rentalButton.onclick = this.rentalReturningDate.bind(this)

            let rentalSpan = document.createElement('span')
            rentalSpan.setAttribute('id','rentalAnswer')
            rentalWrapper.append(rentalSpan)
            this.rentalSpan = rentalSpan
    }
}





window.onload = function () {
    let myRent = new RentPeriod()
    myRent.render('.rentalWrapper')
}