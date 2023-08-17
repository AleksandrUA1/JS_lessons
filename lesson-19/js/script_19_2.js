const inputsParent = document.getElementsByClassName('taskWrap')
const inputsList = inputsParent[0].children

for (const input of inputsList) {
    input.oninput = function () {
        clickInput = this
        while (clickInput.previousElementSibling) {
            inputValue = parseInt(clickInput.value)
            clickInput = clickInput.previousElementSibling
            clickInput.value = inputValue - 1
        }
        while (clickInput.nextElementSibling) {
            inputValue = parseInt(clickInput.value)
            clickInput = clickInput.nextElementSibling
            clickInput.value = inputValue + 1
        }
    }
}