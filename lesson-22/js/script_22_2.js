function customDate() {
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth()
    let currentYear = currentDate.getFullYear()
    let currentDay = currentDate.getDay()

    let daystatus
    if (currentDay > 0 && currentDay < 6) {
        daystatus = 'Робочий день'
    }
    else daystatus = 'Вихідний день'

    return alert(`${currentMonth} - ${currentYear} - ${currentDay} - ${daystatus}`)
}


window.onload = function (){
    let myDate = customDate()
}