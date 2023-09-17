window.onload = function () {
    let userDate = "17.09.2023"
    let reg = /(\d{2})\.(\d{2})\.(\d{4})/
    let fixUserDate = userDate.replace(reg,'$1/$2/$3')
    console.log(fixUserDate)
}