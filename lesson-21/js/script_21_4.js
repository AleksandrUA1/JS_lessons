class ScoreValidator{
    constructor(){}

    render(containerSelector){
        let validator = document.querySelector(containerSelector)

            let validatorMonthSetting = document.createElement('div')
            validatorMonthSetting.classList.add('validator__monthSetting')
            validator.append(validatorMonthSetting)

                let validatorMonthTitle = document.createElement('label')
                validatorMonthTitle.classList.add('validator__monthTitle')
                validatorMonthTitle.innerText = 'Задайте номер навчального місяця: '
                validatorMonthTitle.setAttribute('for','monthInput')
                validatorMonthSetting.append(validatorMonthTitle)

                let validatorMonthInput = document.createElement('input')
                validatorMonthInput.classList.add('validator__monthInput')
                validatorMonthInput.setAttribute('id','monthInput')
                validatorMonthSetting.append(validatorMonthInput)

            let validatorScoreSetting = document.createElement('div')
            validatorScoreSetting.classList.add('validator__scoreSetting')
            validator.append(validatorScoreSetting)

                let validatorScoreTitle = document.createElement('label')
                validatorScoreTitle.classList.add('validator__scoreTitle')
                validatorScoreTitle.innerText = 'Введіть оцінку: '
                validatorScoreTitle.setAttribute('for','scoreInput')
                validatorScoreSetting.append(validatorScoreTitle)

                let validatorScoreInput = document.createElement('input')
                validatorScoreInput.classList.add('validator__scoreInput')
                validatorScoreInput.setAttribute('id','scoreInput')
                validatorScoreSetting.append(validatorScoreInput)

            let validatorResultSetting = document.createElement('div')
            validatorResultSetting.classList.add('validator__resultSetting')
            validator.append(validatorResultSetting)

                let validatorResult = document.createElement('span')
                validatorResult.classList.add('validator__result')
                validatorResultSetting.append(validatorResult)

            let validatorBtn = document.createElement('button')
            validatorBtn.setAttribute('id','validator__btn')
            validatorBtn.innerText = 'Чи можливо виправити оцінку?'
            validator.append(validatorBtn)

            let validatorResultAnswer = document.createElement('span')
            validatorResultAnswer.classList.add('validator__resultAnswer')
            validator.append(validatorResultAnswer)
    }
}

class IsNotNumberError extends Error{
    constructor(){
        super()
        this.message = 'Має бути числом'
        this.name = 'IsNotNumberError'
    }
}

class IsLowMonthValueError extends Error{
    constructor(){
        super()
        this.message = 'Не може бути меншим за 1'
        this.name = 'IsLowMonthValueError'
    }
}

class IsHightMonthValueError extends Error{
    constructor(){
        super()
        this.message = 'Не може бути більшим за 12'
        this.name = 'IsHightMonthValueError'
    }
}

class IsNotStudyPeriodError extends Error{
    constructor(){
        super()
        this.message = 'Канікули. Значення не може дорівнювати 6,7,8'
    }
}

class IsLowScoreValueError extends Error{
    constructor(){
        super()
        this.message = 'Не може бути меншим за 1'
        this.name = 'IsLowScoreValueError'
    }
}

class IsHightScoreValueError extends Error{
    constructor(){
        super()
        this.message = 'Не може бути більшим за 100'
        this.name = 'IsHightScoreValueError'
    }
}

class AcceptableScoreError extends Error{
    constructor(){
        super()
        this.message = 'Так, ботан, іди не витрачай мій час. Це теж добра оцінка.'
        this.name = 'AcceptableScoreError'
    }
}

class HolidayPeriodError extends Error{
    constructor(){
        super()
        this.message = 'Нажаль, вже пізно для перездачі.'
        this.name = 'HolidayPeriodError'
    }
}

function monthValidate() {
    try {
        let monthInput = document.getElementById('monthInput')
        let currentMonthValue = parseInt(monthInput.value)
        
            if (isNaN(currentMonthValue)) throw new IsNotNumberError()
            if (currentMonthValue < 1) throw new IsLowMonthValueError()
            if (currentMonthValue > 12) throw new IsHightMonthValueError()
            if (currentMonthValue > 5 && currentMonthValue < 9) throw new IsNotStudyPeriodError()

    } catch (error) {
        if (error instanceof IsNotNumberError) {
            alert(error.message)
            monthInput.value = ''
        }
        else if (error instanceof IsLowMonthValueError) {
            alert(error.message)
            monthInput.value = ''
        }
        else if (error instanceof IsHightMonthValueError) {
            alert(error.message)
            monthInput.value = ''
        }
        else if (error instanceof IsNotStudyPeriodError) {
            alert(error.message)
            monthInput.value = ''
        }
        else alert(error.message)
        return false
    }
    return true
}

function scoreValidate() {
    try {
        let scoreInput = document.getElementById('scoreInput')
        let currentScoreValue = parseInt(scoreInput.value)

            if (isNaN(currentScoreValue)) throw new IsNotNumberError()
            if (currentScoreValue < 1) throw new IsLowScoreValueError()
            if (currentScoreValue > 100) throw new IsHightScoreValueError()

    } catch (error) {
        if (error instanceof IsNotNumberError) {
            alert(error.message)
            monthInput.value = ''
        }
        else if (error instanceof IsLowScoreValueError) {
            alert(error.message)
            scoreInput.value = ''
        }
        else if (error instanceof IsHightScoreValueError) {
            alert(error.message)
            scoreInput.value = ''
        }
        else alert(error.message)
        return false
    }
    return true
}

function resultAnswer(){
    try {
        let scoreInput = document.getElementById('scoreInput')
        let monthInput = document.getElementById('monthInput')

        let currentScoreValue = parseInt(scoreInput.value)
        let currentMonthValue = parseInt(monthInput.value)

        let answerWrapper = document.querySelector('.validator__resultAnswer')
        
        if (currentMonthValue !== 12 && currentMonthValue !== 5 && currentScoreValue < 90) {
            answerWrapper.innerText = 'Так, ви ще можете виправити оцінку.'
        }

        if (currentMonthValue === 12 || currentMonthValue === 5) {
            throw new HolidayPeriodError()
        }

        if (currentScoreValue >= 90) {
            throw new AcceptableScoreError()
        }

    } catch (error) {
        if (error instanceof HolidayPeriodError) {
            alert(error.message)
        }
        else if (error instanceof AcceptableScoreError) {
            alert(error.message)
        }
    }
}

window.onload = function () {
    new ScoreValidator().render('.validator')
    
    let monthInputEl = document.getElementById('monthInput')
    monthInputEl.addEventListener('input',monthValidate)
    
    let scoreInputEl = document.getElementById('scoreInput')
    scoreInputEl.addEventListener('input',scoreValidate)
    
    let btn = document.getElementById('validator__btn')
    btn.addEventListener('click',resultAnswer)
    
}