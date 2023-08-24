class Client{
    constructor({id,userName,totalBalance}){
        this.id = id
        this.userName = userName
        this.totalBalance = totalBalance
    }

    increaceBalance(){
        let increaseValue = parseInt(this.clientIncreaseBalanceInput.value)
        this.totalBalance = this.totalBalance + increaseValue
        this.clientIncreaseBalanceInput.value = ''
        this.clientTotalBalance.innerText = 'Баланс рахунку: ' + this.totalBalance + ' грн'
    }    
    
    reduceBalance(){
        let reduceValue = parseInt(this.clientReduceBalanceInput.value)
        if (reduceValue <= this.totalBalance) {
            this.totalBalance = this.totalBalance - reduceValue
            this.clientReduceBalanceInput.value = ''
            this.clientTotalBalance.innerText = 'Баланс рахунку: ' + this.totalBalance + ' грн'
        }
        else alert('На рахунку недостатньо коштів для видачі такої суми!')
    }

    render(containerSelector){
        let clientWrap = document.querySelector(containerSelector)
        
            let client = document.createElement('div')
            client.classList.add('client')
            clientWrap.append(client)

                let clientAccount = document.createElement('div')
                clientAccount.classList.add('client__account')
                client.append(clientAccount)

                    let clientId = document.createElement('span')
                    clientId.classList.add('client__id')
                    clientId.innerText = 'Обліковий номер клієнта: ' + this.id
                    clientAccount.append(clientId)
                    this.clientId = clientId

                    let clientName = document.createElement('span')
                    clientName.classList.add('client__name')
                    clientName.innerText = 'ПІБ: ' + this.userName
                    clientAccount.append(clientName)
                    this.clientName = clientName

                    let clientTotalBalance = document.createElement('span')
                    clientTotalBalance.classList.add('client__totalBalance')
                    clientTotalBalance.innerText = 'Баланс рахунку: ' + this.totalBalance + ' грн'
                    clientAccount.append(clientTotalBalance)
                    this.clientTotalBalance = clientTotalBalance

                let clientIncreaseBalanceWrap = document.createElement('div')
                clientIncreaseBalanceWrap.classList.add('client__increaseBalanceWrap')
                client.append(clientIncreaseBalanceWrap)

                    let clientIncreaseBalanceTitle = document.createElement('label')
                    clientIncreaseBalanceTitle.classList.add('client__increaseBalanceTitle')
                    clientIncreaseBalanceTitle.setAttribute('for',"increaseBalanceInput")
                    clientIncreaseBalanceTitle.innerText = 'Додавання грошей '
                    clientIncreaseBalanceWrap.append(clientIncreaseBalanceTitle)

                    let clientIncreaseBalanceInput = document.createElement('input')
                    clientIncreaseBalanceInput.classList.add("client__increaseBalanceInput")
                    clientIncreaseBalanceInput.setAttribute('id',"increaseBalanceInput")
                    clientIncreaseBalanceWrap.append(clientIncreaseBalanceInput)
                    this.clientIncreaseBalanceInput = clientIncreaseBalanceInput

                    let clientIncreaseBalanceBtn = document.createElement('button')
                    clientIncreaseBalanceBtn.classList.add("client__increaseBalanceButton")
                    clientIncreaseBalanceBtn.innerText = 'Додати'
                    clientIncreaseBalanceWrap.append(clientIncreaseBalanceBtn)
                    clientIncreaseBalanceBtn.onclick = this.increaceBalance.bind(this)

                let clientReduceBalanceWrap = document.createElement('div')
                clientReduceBalanceWrap.classList.add('client__reduceBalanceWrap')
                client.append(clientReduceBalanceWrap)

                    let clientReduceBalanceTitle = document.createElement('label')
                    clientReduceBalanceTitle.classList.add('client__reduceBalanceTitle')
                    clientReduceBalanceTitle.setAttribute('for',"reduceBalanceInput")
                    clientReduceBalanceTitle.innerText = 'Зняття грошей '
                    clientReduceBalanceWrap.append(clientReduceBalanceTitle)

                    let clientReduceBalanceInput = document.createElement('input')
                    clientReduceBalanceInput.classList.add("client__reduceBalanceInput")
                    clientReduceBalanceInput.setAttribute('id',"reduceBalanceInput")
                    clientReduceBalanceWrap.append(clientReduceBalanceInput)
                    this.clientReduceBalanceInput = clientReduceBalanceInput

                    let clientReduceBalanceBtn = document.createElement('button')
                    clientReduceBalanceBtn.classList.add("client__reduceBalanceBtn")
                    clientReduceBalanceBtn.innerText = 'Зняти'
                    clientReduceBalanceWrap.append(clientReduceBalanceBtn)
                    clientReduceBalanceBtn.onclick = this.reduceBalance.bind(this)
    }

    toString(){
        return `ClientID -  ${this.id}, ClientName - ${this.userName}, ClientBalance - ${this.totalBalance}`
    }
}

class GoldenClient extends Client{
    constructor({id,userName,totalBalance,creditLimitAmount,creditPercentSize}){
        super({ id, userName, totalBalance })
        this.creditLimitAmount = creditLimitAmount
        this.creditPercentSize = creditPercentSize
    }

    reduceBalance(){
        let reduceValue = parseInt(this.clientReduceBalanceInput.value)
        let availableTotalSum = this.totalBalance + this.creditLimitAmount

        if (reduceValue <= this.totalBalance) {
            this.totalBalance = this.totalBalance - reduceValue
            this.clientReduceBalanceInput.value = ''
            this.clientTotalBalance.innerText = 'Баланс рахунку: ' + this.totalBalance + ' грн'
        }
        
        if (reduceValue > this.totalBalance && reduceValue <= availableTotalSum) {
            this.percentPayment(reduceValue)
        }

        else alert('На рахунку недостатньо коштів для видачі такої суми!')
    }

    percentPayment(reduceValue){
        if (confirm('Власних коштів не достатньо. Бажаєте скористатись кредитними?')) {
            let usedCreditMoney = reduceValue - this.totalBalance 
            let creditPercentPaymentSize = (usedCreditMoney / 100) * this.creditPercentSize
            this.totalBalance = 0
            this.creditLimitAmount = this.creditLimitAmount - usedCreditMoney
            this.clientCreditLimitAmount.innerText = 'Ліміт кредитних коштів: ' + this.creditLimitAmount + ' грн'
            this.clientTotalBalance.innerText = 'Баланс рахунку: ' + this.totalBalance + ' грн'
            this.clientCreditPercentPaymentSize.innerText = 'Розмір пені за використання кредитних коштів: ' + creditPercentPaymentSize + ' грн'
        }
    }

    //  Можна ще написати метод - повернення кредиту. Але, вже нема сил

    render(containerSelector){
        super.render(containerSelector)

        let goldenClientWrap = document.querySelector('.client__account')

        let clientCreditLimitAmount = document.createElement('span')
        clientCreditLimitAmount.classList.add('client__creditLimitAmount')
        clientCreditLimitAmount.innerText = 'Ліміт кредитних коштів: ' + this.creditLimitAmount + ' грн'
        goldenClientWrap.append(clientCreditLimitAmount)
        this.clientCreditLimitAmount = clientCreditLimitAmount

        let clientCreditPercentSize = document.createElement('span')
        clientCreditPercentSize.classList.add('client__creditPercentSize')
        clientCreditPercentSize.innerText = 'Відсоток за використання кредитних коштів: ' + this.creditPercentSize + ' %'
        goldenClientWrap.append(clientCreditPercentSize)
    
        let clientCreditPercentPaymentSize = document.createElement('span')
        clientCreditPercentPaymentSize.classList.add('client__creditlimitAmountPayment')
        clientCreditPercentPaymentSize.innerText = 'Розмір пені за використання кредитних коштів: '
        goldenClientWrap.append(clientCreditPercentPaymentSize)
        this.clientCreditPercentPaymentSize = clientCreditPercentPaymentSize
    }
    toString(){
        return `ClientID -  ${this.id}, ClientName - ${this.userName}, ClientBalance - ${this.totalBalance}, ClientCreditLimitAmount - ${this.creditLimitAmount}, ClientCreditPercentSize - ${creditPercentSize}`
    }
}

let user1 = {
    id: 124951,
    userName: 'Ivanov I.I.',
    totalBalance: 480000,
    creditLimitAmount: 100000,
    creditPercentSize: 5
}

window.onload = function () {
    let userIvan = new GoldenClient(user1)
    userIvan.render('.taskWrap')
    console.log(userIvan)
}