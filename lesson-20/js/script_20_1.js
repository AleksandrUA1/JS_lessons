class star {
    constructor(imgPath, interval){
        this.imgPath = imgPath
        this.interval = interval
    }

    randomValuePosition(maxValue = 100, minValue = 0){
        return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
    }

    setNewStarWidth(stepValue = 1){
        let currentStarWidth = parseFloat(this.img.style.width)
        let newStarWidth = currentStarWidth + stepValue
        this.img.style.width = newStarWidth + 'px'
               
        if (newStarWidth > this.maxWidth) {
            this.img.style.left = this.randomValuePosition() + '%'
            this.img.style.top = this.randomValuePosition() + '%'
            this.img.style.width = this.minWidth + 'px'
        }


    }

    render(containerSelector,minWidth = 5, maxWidth = 35){
        let img = document.createElement('img')
        this.img = img
        this.minWidth = minWidth
        this.maxWidth = maxWidth
        
        this.img.setAttribute('src',this.imgPath)
        this.img.style.position = 'absolute'
        this.img.style.width = this.minWidth + 'px'
        this.img.style.left = this.randomValuePosition() + '%'
        this.img.style.top = this.randomValuePosition() + '%'

        let intervalID = setInterval(() => {
            this.setNewStarWidth()
        }, this.interval)

        if (containerSelector) {
            document.querySelector(containerSelector).prepend(img)
        }  
    }
}

window.onload = function(){    
    let starCount = 20
    
    for (let i = 1; i <= starCount; i++) {
        setTimeout(() => {
            new star('img/star.png',80).render('body')
        }, 200 * i)
    }
    
}
