function userAge() {
    let userBirthday = document.getElementById('birthdayInput').value
    if (userBirthday === '') alert('Введіть ваш рік народження')
    else {
        const currentYear = 2023
        let userAge = currentYear - parseInt(userBirthday)
        alert(`Вам ${userAge} років`)
    }
}

document.getElementsByTagName('button')[0].onclick = userAge