window.onload = function () {
    let bodyWrap = document.querySelector('body')

    let inputCounter = 0
    let buttonCounter = 0
    
    let inputDiv = document.createElement('div')
    let buttonDiv = document.createElement('div')

    bodyWrap.addEventListener('click', function (event) {
        if (event.target.tagName === 'INPUT') {
            inputCounter++
            
        }
        if (event.target.tagName === 'BUTTON') {
            buttonCounter++
        }

        inputDiv.innerText = 'Натискань на input - ' + inputCounter
        buttonDiv.innerText = 'Натискань на button - ' + buttonCounter
    })

    let tableWrap = document.getElementsByTagName('table')
    tableWrap[0].append(inputDiv)
    tableWrap[0].append(buttonDiv)
}