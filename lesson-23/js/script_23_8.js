window.onload = function () {
    let str = "Дано 'рядок тексту' - вивести усі складові, 'які розділені розділовими знаками'."
    let reg = /(["'.,])(.*?)\1/g
    let result = str.match(reg)
    console.log(result)
}