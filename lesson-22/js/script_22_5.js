class FindUserAge {
    
    findAge(){
        let userBirthDate = new Date(this.userAgeInput.value).getTime()
        console.log(userBirthDate);
        let carrentDate = new Date().getTime()
        console.log(carrentDate);
        let userAge = Math.floor((carrentDate - userBirthDate) / (365*24*60*60*1000) )
        console.log(userAge);
        
        this.answerWrap.innerText = `Вам ${userAge} повних років`
    }

    render(containerSelector){
        let taskWrap = document.querySelector(containerSelector)

            let userAgeLabel = document.createElement('label')
            userAgeLabel.setAttribute('for','userAgeInput')
            userAgeLabel.innerText = 'Введіть Вашу дату народження'
            taskWrap.append(userAgeLabel)

            let userAgeInput = document.createElement('input')
            userAgeInput.setAttribute('id','userAgeInput')
            userAgeInput.setAttribute('value','1995-01-26')
            this.userAgeInput = userAgeInput
            taskWrap.append(userAgeInput)

            let userAgeButton = document.createElement('button')
            userAgeButton.classList.add('userAgeButton')
            userAgeButton.innerText = 'Обчислити'
            taskWrap.append(userAgeButton)
            userAgeButton.onclick = this.findAge.bind(this)

        let answerWrap = document.createElement('span')
        answerWrap.classList.add('answerWrap')
        this.answerWrap = answerWrap
        taskWrap.after(answerWrap)
    }
}

window.onload = function () {
    let myTask = new FindUserAge()
    myTask.render('.userAgeWrapper')
}