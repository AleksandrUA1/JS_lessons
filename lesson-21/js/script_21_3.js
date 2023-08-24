class Parrent{
    constructor({coordinateX,coordinateY,objImgPath,objImgWidth,bannerImgPath = "img/landscape.jpg"}){
        this.coordinateX = coordinateX
        this.coordinateY = coordinateY
        this.objImgPath = objImgPath
        this.objImgWidth = objImgWidth
        this.bannerImgPath = bannerImgPath
    }

    render(containerSelector){
        let landscapeWrap = document.querySelector(containerSelector)
        landscapeWrap.classList.add('landscapeWrap')
        landscapeWrap.style.backgroundImage = `url("${this.bannerImgPath}")`
        landscapeWrap.style.backgroundSize = 'cover'
        landscapeWrap.style.backgroundPosition = 'center center'
        landscapeWrap.style.height = '400px'
        landscapeWrap.style.width = '600px'
        landscapeWrap.style.margin = '20px auto'
        landscapeWrap.style.position = 'relative'

        let objImg = document.createElement('img')
        objImg.setAttribute("src",this.objImgPath)
        objImg.style.position = 'absolute'
        objImg.style.left = this.coordinateX + '%'
        objImg.style.top = this.coordinateY + '%'
        objImg.style.width = this.objImgWidth

        landscapeWrap.append(objImg)
        this.objImg = objImg
    }
}

class House extends Parrent{
    constructor({coordinateX,coordinateY,objImgPath,objImgWidth,moveInterval}){
        super({coordinateX,coordinateY,objImgPath,objImgWidth})
        this.moveInterval = moveInterval
    }
   
    render(containerSelector){
        super.render(containerSelector)
        setInterval(() => {
            let randomValue = Math.floor(Math.random() * 21) - 10
            this.objImg.style.width = (parseInt(this.objImg.style.width) + randomValue) + 'px'
        }, this.moveInterval) 
    }
}

class Dog extends Parrent{
    constructor({coordinateX,coordinateY,objImgPath,objImgWidth,moveInterval}){
        super({coordinateX,coordinateY,objImgPath,objImgWidth})
        this.moveInterval = moveInterval
    }
   
    render(containerSelector){
        super.render(containerSelector)
        setInterval(() => {
            let randomValue = Math.floor(Math.random() * 21) - 10
            this.objImg.style.left = (parseInt(this.objImg.style.left) + randomValue) + '%'
        }, this.moveInterval) 
    }
}

class Bird extends Parrent{
    constructor({coordinateX,coordinateY,objImgPath,objImgWidth,moveInterval}){
        super({coordinateX,coordinateY,objImgPath,objImgWidth})
        this.moveInterval = moveInterval
    }
   
    render(containerSelector){
        super.render(containerSelector)
        setInterval(() => {
            let randomValue = Math.floor(Math.random() * 7) - 3
            this.objImg.style.left = (parseInt(this.objImg.style.left) + randomValue) + '%'
            this.objImg.style.top = (parseInt(this.objImg.style.left) + randomValue) + '%'
        }, this.moveInterval) 
    }
}

window.onload = function(){
    let myHouse = new House({
        coordinateX: 66,
        coordinateY: 30,
        objImgPath: "img/home.png",
        objImgWidth: "170px", 
        moveInterval: 2000
    })
    myHouse.render('.landscapeWrap')

    let myDog = new Dog({
        coordinateX: 50,
        coordinateY: 75,
        objImgPath: "img/dog.png",
        objImgWidth: "60px", 
        moveInterval: 300
    })
    myDog.render('.landscapeWrap')

    let myBird = new Bird({
        coordinateX: 20,
        coordinateY: 17,
        objImgPath: "img/bird.png",
        objImgWidth: "40px", 
        moveInterval: 100
    })
    myBird.render('.landscapeWrap')
}



