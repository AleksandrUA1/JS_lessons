class createTable{
    constructor(rowCount = 3,colCount = 3,maxTdValue = 100){
        this.rowCount = rowCount
        this.colCount = colCount
        this.maxTdValue = maxTdValue
    }

    render(tableTitle){
        let parentElement = document.getElementsByClassName('taskWrap')
        
        let title = document.createElement('h2')

        let table = document.createElement('table')
        table.classList.add('tableStyles')
        table.setAttribute('counter', '0')
        table.setAttribute('tableName', `${tableTitle}`)
        
        title.innerText = `${table.getAttribute('tableName')}` 
        parentElement[0].append(title)

        for (let row = 0; row < this.rowCount; row++) {
            let tr = document.createElement('tr')
            for (let col = 0; col < this.colCount; col++) {
                let td = document.createElement('td')
                let randomNum = Math.floor((Math.random() * this.maxTdValue) + 1)
                td.innerText = randomNum
                tr.append(td)
            }
            table.append(tr)
        }
        parentElement[0].append(table)      
    }
}

window.onload = function(){
    
    let firstTable = new createTable()
    firstTable.render('firstTable')

    let secondTable = new createTable()
    secondTable.render('secondTable')
    
    let thirdTable = new createTable()
    thirdTable.render('thirdTable')
    
    let tdList = document.getElementsByTagName('td')
    for (const td of tdList) {
        td.onclick = function () {
            let table = td.closest('.tableStyles')
            let tableAttribyte = table.getAttribute('counter')
            let newAttribyte = ++tableAttribyte
            table.setAttribute('counter',`${newAttribyte}`)
            table.style.borderColor = 'red'
            table.previousElementSibling.innerText = `${table.getAttribute('tableName')} ${table.getAttribute('counter')}`
        }
    }
}