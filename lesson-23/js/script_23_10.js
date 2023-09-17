window.onload = function () {
    let str = "Дано рядок тексту 22 194381, підрахувати кількість двоцифрових чисеол 849 29 1221 у рядку 31 24562 11"
    let reg = /\b\d{2}\b/g
    
    if (reg.test(str)) {
        let list = str.match(reg)
        console.log(list)
        console.log(`Кількість двоцифрових чисел - ${list.length}`);
    }
    else console.log('no')
}