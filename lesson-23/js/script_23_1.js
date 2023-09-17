window.onload = function () {
    let arr = ['рядок без цифр','рядок з цифрами123','1324456']
    let reg = /\d/
    for (let el of arr) {
        if (reg.test(el)) {
            console.log(el)
        }
    }
}