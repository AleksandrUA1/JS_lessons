window.onload = function(){
    let parentOfSportsmenslist = document.getElementById('sportsmensList')
    let parentOfPlayersList = document.getElementById('playersList')
    
    parentOfSportsmenslist.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            let sportsmenValue = event.target.parentElement.innerText
            let player = document.createElement('li')
            let icon = document.createElement('img')
            
            icon.setAttribute('src','img/left.png')
            icon.setAttribute('style','width: 15px; margin-top: 4px;')
            icon.setAttribute('alt','left arrow;')
            icon.classList.add('hoverIcon')

            player.innerText = sportsmenValue
            player.append(icon)
            parentOfPlayersList.append(player)
            event.target.parentElement.remove()
        }
    })
    
    parentOfPlayersList.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            let playerValue = event.target.parentElement.innerText
            let sportsmen = document.createElement('li')
            let icon = document.createElement('img')
            
            icon.setAttribute('src','img/right.png')
            icon.setAttribute('style','width: 15px; margin-top: 4px;')
            icon.setAttribute('alt','right arrow;')
            icon.classList.add('hoverIcon')
            
            sportsmen.innerText = playerValue
            sportsmen.append(icon)
            parentOfSportsmenslist.append(sportsmen)
            event.target.parentElement.remove()
        }
    })

}









