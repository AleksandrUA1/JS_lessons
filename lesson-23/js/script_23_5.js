window.onload = function () {
    let arr = ['рядок з цифрами 456','радок з цифрами 999','радок з цифрами 222','111','радок з цифрами 717','1324456']
    let reg = /(?:1|3)/
    for (let el of arr) {
        if (reg.test(el)) {
            console.log(el)
        }
    }
}