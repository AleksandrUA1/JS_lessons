window.onload = function () {
    let arr =['рядок з цифрами 12','123 4','1234','рядок без цифр','Рядок без цифр']
    let reg = /\d/
    for (const el of arr) {
        if (!reg.test(el)) {
           console.log(el)
        }
    }
}