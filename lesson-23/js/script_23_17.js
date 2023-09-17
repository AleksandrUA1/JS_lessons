// Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи є це день вихідним
window.onload = function () {
    let userDate = "6"
    let dayReg = /0|1|2|3|4|5|6|sun|mon|tue|wed|thu|fri|sat/i

    if (dayReg.test(userDate)) {
        if (userDate.match(/0|6|sat|sun/i)) {
            console.log("Це вихідний день.")
        } else {
            console.log("Це не вихідний день.")
        }
    } else {
        console.log("Введено невірний формат дня.")
    }
}