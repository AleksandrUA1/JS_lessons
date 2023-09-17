window.onload = function () {
    let str = "+380974848487"
    let reg = /^\+38\d{10}/
    if (reg.test(str)) {
        console.log(`Номер ${str} Український`)
    }
    else console.log('no')
}