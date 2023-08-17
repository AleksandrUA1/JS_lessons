function divClick() {
    clickedDiv = this
    while (clickedDiv.nextElementSibling) {
        clickedDiv = clickedDiv.nextElementSibling
        clickedDiv.style.backgroundColor = 'red'
    }
}

const parentOfDivList = document.getElementsByClassName('taskWrap')
const divList = parentOfDivList[0].children
for (const div of divList) {
    div.onclick = divClick
    }
