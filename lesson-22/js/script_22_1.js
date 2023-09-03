function greeting() {
    let currentDate = new Date()
    let currentHours = currentDate.getHours()
    
    if (currentHours >= 5 && currentHours < 11) {
        return alert('Доброго ранку!')
    }
    else if (currentHours >= 11 && currentHours < 17) {
        return alert('Доброго дня!')
    }
    else if (currentHours >= 17 && currentHours < 22) {
        return alert('Доброго вечора!')
    }
    else return alert('Доброї ночі!')
}

window.onload = function () {
    let myGreeting = greeting()
}