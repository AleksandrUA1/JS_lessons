window.onload = function(){
    

    
    let parentOfSportsmenlist = document.getElementsByClassName('sportsmenList')
    let parentOfPlayerList = document.getElementsByClassName('playersList')
    
    for (const sportsmen of parentOfSportsmenlist[0].children) {
        sportsmen.onclick = function () {
            let sportsmenValue = sportsmen.innerText
            let player = document.createElement('li')
            player.innerText = sportsmenValue
            parentOfPlayerList[0].append(player)
            sportsmen.remove()
        }
    }

    for (const player of parentOfPlayerList[0].children) {
        player.onclick = function () {
            let playerValue = player.innerText
            let sportsmen = document.createElement('li')
            sportsmen.innerText = playerValue
            parentOfSportsmenlist[0].append(sportsmen)
            player.remove()
        }
    }

}









