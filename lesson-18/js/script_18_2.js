function converter() {
    const userValue = parseInt(document.getElementById('GrnSum').value)
    const dollarRate = 37
    const euroRate = 40
    let convertToDollar = userValue / dollarRate
    let convertToEuro = userValue / euroRate
    document.getElementById('Euro').value = convertToEuro.toFixed(2)
    document.getElementById('Dollar').value = convertToDollar.toFixed(2)
}
function clearInputs() {
    document.getElementById('GrnSum').value = null
    document.getElementById('Euro').value = null
    document.getElementById('Dollar').value = null
}


document.getElementById('Clear').onclick = clearInputs
document.getElementById('BtnConvert').onclick = converter