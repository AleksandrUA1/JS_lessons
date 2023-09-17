window.onload = function () {
    let str = "Дано рядок тексту з номерами 2-19-1998, 5454 4040 5498 5144, 11-1-1996, та 4849-2922-1221-1234, визначити чи э тут банківські карти?"
    let reg = /\b\d{4}(?:\-|\s)\d{4}(?:\-|\s)\d{4}(?:\-|\s)\d{4}\b/g
    
    if (reg.test(str)) {
        let list = str.match(reg)
        console.log(list)
    }
    else console.log('no')
}