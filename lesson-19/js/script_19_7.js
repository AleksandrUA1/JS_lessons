class snow {
    constructor(imgPath, interval){
        this.imgPath = imgPath
        this.interval = interval
    }

    getRandomImgSize(min = 5, max = 25){
        return min + Math.floor(Math.random() * (max - min + 1))
    }

    getRandomImgPosition(min = 0, max = 100){
        return min + Math.floor(Math.random() * (max - min + 1))
    }

    setNextStepPosition(minTopValue = -3, maxTopValue = 100){
        let currentTopValue = parseFloat(this.img.style.top)  
        let newTopValue = currentTopValue + this.topStepValue
       
        if (newTopValue > maxTopValue) {
            newTopValue = minTopValue
            this.imgSize = this.getRandomImgSize()
            this.img.style.width = this.imgSize + 'px'
            this.img.style.left = this.getRandomImgPosition() + '%'
            this.topStepValue = (this.imgSize / 100) + 0.15
        }
        this.img.style.top = newTopValue + '%'
    }

    render(containerSelector, minTopValue = -3){
        let img = document.createElement('img')
        let imgSize = this.getRandomImgSize()

        this.img = img
        this.imgSize = imgSize
        
        this.img.setAttribute('src',this.imgPath)

        this.img.style.width = this.imgSize + 'px'
        this.img.style.top = minTopValue + '%'
        this.img.style.left = this.getRandomImgPosition() + '%'
        this.topStepValue = (this.imgSize / 100) + 0.15
        
        let intervalID = setInterval(() => {
            this.setNextStepPosition()
        }, this.interval);
        
        if (containerSelector)
        document.querySelector(containerSelector).prepend(img)
    }
}

window.onload = function(){    
    for (let i = 1; i < 20; i++) {
        setTimeout(() => {
            new snow ('img/Snow.png',50).render('body')
        }, 800 * i)
    }
    
}