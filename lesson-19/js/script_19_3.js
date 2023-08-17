
window.onload = function () {
    
    let taskContainer = document.getElementsByClassName('taskWrap')
    
    let list1 = new RandomNumberList(taskContainer)
    list1.render()
    let list2 = new RandomNumberList(taskContainer)
    list2.render()
    let list3 = new RandomNumberList(taskContainer)
    list3.render()
    let list4 = new RandomNumberList(taskContainer)
    list4.render()
    let list5 = new RandomNumberList(taskContainer)
    list5.render()
    
    
    let btn = document.createElement('button')
    btn.classList.add('btnStyles')
    btn.innerText = 'Зафарбувати'
    taskContainer[0].after(btn)
    btn.onclick = paintList
}

function paintList() {
    listsColection = document.getElementsByClassName('olListStyles')
    for (const list of listsColection) {
        if (list.classList.contains('green')) list.style.backgroundColor = 'green'
        else if (list.classList.contains('red')) list.style.backgroundColor = 'red'
    }
}

class RandomNumberList{

    constructor(taskContainer,maxNumber = 10, maxValue = 100){
        this.taskContainer = taskContainer
        this.maxNumber = maxNumber
        this.maxValue = maxValue
    }
    
    render(){
        let olList = document.createElement('ol')
        olList.classList.add('olListStyles')
        
        let countElements = Math.floor((Math.random() * this.maxNumber)+1)
        
        if (countElements % 2 === 0) olList.classList.add('green')
        else olList.classList.add('red')
        
        for (let i = 0; i < countElements; i++) {
            let liElement = document.createElement('li')
            let randomLiValue = Math.floor((Math.random() * this.maxValue)+1)
            liElement.innerText = ` ${randomLiValue} `
            olList.append(liElement)
        }

        this.taskContainer[0].append(olList)
    }
}


