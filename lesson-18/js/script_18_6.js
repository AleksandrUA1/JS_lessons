function printTable() {
    let inputsQuantity = parseInt(document.getElementById('scoresQuantity').value)
    let parentEl = document.getElementsByClassName('taskWrap')[0]
    let table = document.createElement('table')
    table.classList.add('tableStyles')
    parentEl.append(table)
    let row = document.createElement('tr')
    table.append(row)
    for (let col = 0; col < inputsQuantity; col++) {
        let column = document.createElement('td')
        column.innerHTML='<input class="score" type="text">'
        row.append(column)
    }
    let buttonSum = document.createElement('button')
    buttonSum.innerText = 'get sum'
    parentEl.append(buttonSum)    
    
    document.getElementsByTagName('button')[1].onclick = averageValue

    function averageValue() {
        let inputsQuantity = parseInt(document.getElementById('scoresQuantity').value)
        let scoresList = document.getElementsByClassName('score')
        console.log(scoresList);
        let scoresSum = 0
        for (let score = 0; score < inputsQuantity; score++) {
            let scoreValue = parseInt(scoresList[score].value)
            scoresSum += scoreValue
        }
        let averageValue = scoresSum / inputsQuantity 
        let parentEl = document.getElementsByClassName('taskWrap')[0]
        let answerField = document.createElement('p')
        answerField.innerText = `Середній бал: ${averageValue}`
        answerField.classList.add('answerFieldStyles')
        parentEl.append(answerField)
    }

}

document.getElementsByTagName('button')[0].onclick = printTable