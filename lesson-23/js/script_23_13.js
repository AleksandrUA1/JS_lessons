window.onload = function () {
    let str = '2023 рік, 2017 рік, 2014 рік, 2027 рік, 2031 рік, 2071 рік'
    let reg = /\b\d{4}\b/g
    let yearsList = str.match(reg)
    console.log(yearsList)
    let currentYear = 2023
    let matchList = yearsList.filter(el => el > currentYear)
    console.log(matchList)
}