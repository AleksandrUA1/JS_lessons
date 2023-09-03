function dayName() {
    let currentDate = new Date()
    let currentDay = currentDate.getDay()

    let dayName
    switch (currentDay) {
        case 0:
            dayName = 'Неділя'
            break;
        case 1:
            dayName = 'Понеділок'
            break;
        case 2:
            dayName = 'Вівторок'
            break;
        case 3:
            dayName = 'Середа'
            break;
        case 4:
            dayName = 'Четвер'
            break;
        case 5:
            dayName = "П'ятниця"
            break;
        case 6:
            dayName = 'Субота'
            break;
    }
    return alert(`Сьогодні - ${dayName}`)
}

window.onload = function () {
    let myDayName = dayName()
}