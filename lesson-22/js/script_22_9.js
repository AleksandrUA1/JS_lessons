class ExpirationDate{
    runCheck(){
        let currentDate = new Date().getTime()
        let productProductionDate = new Date(this.productionDateInput.value).getTime()
        let productExpirationDate = this.expirationDateInput.value * 24 * 60 * 60 * 1000
        let usabilityLastDate = new Date(productProductionDate + productExpirationDate)
        let printUsabilityLastDate = usabilityLastDate.toLocaleDateString()

        if (usabilityLastDate >= currentDate){
            this.answerSpan.innerText = `Вжити до ${printUsabilityLastDate}. Продукт придатний до вживання`
        }
        else this.answerSpan.innerText = `Вжити до ${printUsabilityLastDate}. Продукт не придатний до вживання`
    }

    render(containerSelector){
        let productWraper = document.querySelector(containerSelector)

            let productionDateDiv = document.createElement('div')
            productionDateDiv.classList.add('product_productionDate')
            productWraper.append(productionDateDiv)

                let productionDateLabel = document.createElement('label')
                productionDateLabel.setAttribute('for','productionInput')
                productionDateLabel.classList.add('product_productionDateTitle')
                productionDateLabel.innerText = 'Дата виробництва йогурта'
                productionDateDiv.append(productionDateLabel)

                let productionDateInput = document.createElement('input')
                productionDateInput.setAttribute('id','productionInput')
                productionDateInput.classList.add('product_productionDateValue')
                productionDateInput.setAttribute('value','2023-09-01')
                productionDateDiv.append(productionDateInput)
                this.productionDateInput = productionDateInput

            let expirationDateDiv = document.createElement('div')
            expirationDateDiv.classList.add('product_expirationDate')
            productWraper.append(expirationDateDiv)

                let expirationDateLabel = document.createElement('label')
                expirationDateLabel.setAttribute('for','expirationDateInput')
                expirationDateLabel.classList.add('product_expirationDateTitle')
                expirationDateLabel.innerText = 'Кількість днів придатності'
                expirationDateDiv.append(expirationDateLabel)

                let expirationDateInput = document.createElement('input')
                expirationDateInput.setAttribute('id','expirationDateInput')
                expirationDateInput.classList.add('product_expirationDateValue')
                expirationDateInput.setAttribute('value','3')
                expirationDateDiv.append(expirationDateInput)
                this.expirationDateInput = expirationDateInput

            let checkButton = document.createElement('button')
            checkButton.setAttribute('id','checkData')
            checkButton.innerText = 'Перевірити'
            productWraper.append(checkButton)
            checkButton.onclick = this.runCheck.bind(this)
            
            let answerSpan = document.createElement('span')
            answerSpan.setAttribute('id','taskResult')
            productWraper.append(answerSpan)
            this.answerSpan = answerSpan
    }
}







window.onload = function () {
    let myProduct = new ExpirationDate()
    myProduct.render('.productWraper')
}