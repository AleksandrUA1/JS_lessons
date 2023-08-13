function sum() {
    const firstNum = parseInt(document.getElementById('firstNumber').value)
    const secondNum = parseInt(document.getElementById('secondNumber').value)
    let result = firstNum + secondNum
    document.getElementById('result').value = result
}

function diff() {
    const firstNum = parseInt(document.getElementById('firstNumber').value)
    const secondNum = parseInt(document.getElementById('secondNumber').value)
    let result = firstNum - secondNum
    document.getElementById('result').value = result
}

function prod() {
    const firstNum = parseInt(document.getElementById('firstNumber').value)
    const secondNum = parseInt(document.getElementById('secondNumber').value)
    let result = firstNum * secondNum
    document.getElementById('result').value = result
}

function quotient() {
    const firstNum = parseInt(document.getElementById('firstNumber').value)
    const secondNum = parseInt(document.getElementById('secondNumber').value)
    let result = firstNum / secondNum
    document.getElementById('result').value = result
}

function clearInputs() {
    document.getElementById('firstNumber').value = null
    document.getElementById('secondNumber').value = null
    document.getElementById('result').value = null
}

document.getElementById('sum').onclick = sum
document.getElementById('diff').onclick = diff
document.getElementById('product').onclick = prod
document.getElementById('quotient').onclick = quotient
document.getElementById('clear').onclick = clearInputs