function printDesires() {
    let parentTeg = document.getElementsByClassName('homeTaskWrap')[0]
    let desireList = ['путін_здох','машина','квартира','дача','човен','телеграм група','бізнес']

    for (let i = 0; i < 3; i++) {
        let findIndexOfDesireListEl = Math.floor((Math.random()*desireList.length))
        let createDiv = document.createElement('div')
        createDiv.innerHTML = desireList[findIndexOfDesireListEl]
        parentTeg.prepend(createDiv)
    }
}

window.onload = printDesires()