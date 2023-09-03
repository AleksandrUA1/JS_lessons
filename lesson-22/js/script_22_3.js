function season() {
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth()

    let season
    if (currentMonth >= 11 && currentMonth <= 1) {
        season = 'Зима'
    }
    else if (currentMonth >= 2 && currentMonth <= 4) {
        season = 'Весна'
    }
    else if (currentMonth >= 5 && currentMonth <= 7) {
        season = 'Літо'
    }
    else season = 'Осінь'
      
    return alert(`Поточна пора року - ${season}`)
}

window.onload = function () {
    let mySeason = season()
}