window.onload = function () {
    let str = "https://regex101.gov"
    let reg = /\b(https:).+?\.(gov)\b/
    
    if (reg.test(str)) {
        console.log('Сайт є урядовим, він містить домен \“gov\”')
    }
    else console.log('no')
}