window.onload = function(){
    let cardList = document.getElementsByClassName('card')
    for (const card of cardList) {
        card.onclick = function () {
            if (card.style.border === '3px solid transparent') {
                card.style.border = '3px solid #09c943'
            }
            else card.style.border = '3px solid transparent'
        }
        
    }
        

 
}