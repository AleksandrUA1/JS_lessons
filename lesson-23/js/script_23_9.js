window.onload = function () {
    let str = "Дано рядок тексту 2.2.1981, перевірити чи 54.5555.57 містить він 1991.09.11 дау у форматі 11.11.1111"
    let reg = /\b\d{1,2}\.\d{1,2}\.\d{4}\b/g
    
    if (reg.test(str)) {
        let list = str.match(reg)
        console.log(list)
    }
    else console.log('no')
}