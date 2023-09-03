class AdditionResult{
    constructor(){
        this.answerCounter = 0
    }
    
    runCheck(){
        let userAnswer = parseInt(this.taskInput.value)

        if (userAnswer !== this.result) {
            this.answerCounter++
            this.taskInput.style.border = '3px solid #fc0330'
            setTimeout(()=> this.taskInput.style.border = 'none', 1500)
        }
        else if (userAnswer === this.result) {
            this.answerCounter++
            this.taskInput.style.border = '3px solid #377a32'
            this.taskInput.style.color = '#377a32'
            this.taskInput.style.fontWeight = '700'
            this.endDate = new Date().getTime()
            console.log(this.endDate)
            this.dateResult = Math.floor((this.endDate - this.startDate) / 1000) 
            this.resultAnswer.innerText = `Приклад розв'язано з ${this.answerCounter}-ї спроби за ${this.dateResult} секунд`
        }
    }

    randomNum(minValue = 500, maxValue = 1000){
        let randNum = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
        return randNum
    }

    createTask(minValue, maxValue){
        let firstRandNum = this.randomNum(minValue, maxValue)
        let secondRandNum = this.randomNum(minValue, maxValue)
        
        this.result = firstRandNum + secondRandNum
        this.task.innerText = `${firstRandNum} + ${secondRandNum}`
        this.startDate = new Date().getTime()
        console.log(this.startDate)
    }

    render(containerSelector){
        let taskWrapper = document.querySelector(containerSelector)

            let taskTitle = document.createElement('span')
            taskTitle.classList.add('taskTitle')
            taskTitle.innerText = "Розв'яжіть приклад"
            taskWrapper.append(taskTitle)

            let task = document.createElement('span')
            task.classList.add('task')
            taskWrapper.append(task)
            this.task = task

            let taskLabel = document.createElement('label')
            taskLabel.setAttribute('for','userAnswer')
            taskWrapper.append(taskLabel)

            let taskInput = document.createElement('input')
            taskInput.setAttribute('id','userAnswer')
            taskWrapper.append(taskInput)
            this.taskInput = taskInput

            let taskButton = document.createElement('button')
            taskButton.setAttribute('id','checkAnswer')
            taskButton.innerText = 'Перевірити'
            taskWrapper.append(taskButton)
            taskButton.onclick = this.runCheck.bind(this)

            let resultAnswer = document.createElement('span')
            resultAnswer.classList.add('resultAnswer')
            taskWrapper.append(resultAnswer)
            this.resultAnswer = resultAnswer
    }
}

window.onload = function () {
    let myTask = new AdditionResult()    
    myTask.render('.taskWrapper')
    myTask.createTask(200, 300)
}