window.onload = function () {
    let str = '21й рядок в якою є від 3 до 5 цифр'
    let reg = /\d/g
    let result = str.match(reg)
    console.log(result);
}