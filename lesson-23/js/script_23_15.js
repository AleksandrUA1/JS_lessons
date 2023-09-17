window.onload = function () {
    let userName = "Бабалик Олександр"
    let reg = /([a-z]|[а-я])\s([A-Z]|[А-Я])/
    let fixUserName = userName.replace(reg,'$1-$2')
    console.log(fixUserName)
}