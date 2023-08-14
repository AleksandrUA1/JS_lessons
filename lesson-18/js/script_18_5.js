function printTable() {
    let userRowCount = parseInt(document.getElementById('rowCount').value)
    let userColCount = parseInt(document.getElementById('colCount').value)
    let numCounter = 0
    let createTable = document.createElement('table')
    createTable.classList.add('tableStyle')
    let parentEl = document.getElementsByClassName('taskWrap')[0]
    parentEl.append(createTable)

    for (let row = 0; row < userRowCount; row++) {
        let createRow = document.createElement('tr')
        createTable.append(createRow)
        
        for (let column = 0; column < userColCount; column++) {
            let craeteCol = document.createElement('td')
            craeteCol.classList.add('tdStyle')
            craeteCol.innerText = ++numCounter
            createRow.append(craeteCol)
        }   
    }
    let elTable = document.getElementsByTagName('table')[0]
    let elTd = document.getElementsByTagName('td')[0]
}
document.getElementsByTagName('button')[0].onclick = printTable