class tank{
    constructor(tankImgPath,bangImgPath,funnelImgPath,interval = 10){
        this.tankImgPath = tankImgPath
        this.bangImgPath = bangImgPath
        this.funnelImgPath = funnelImgPath
        this.interval = interval
    }

    randomValuePosition(maxValue = 100){    //  Цікаво, навіщо в цю функцію передавати шось в якості параметрів
                                            //  можна ж ці дані просто закинути в this
        return Math.floor((Math.random() * maxValue) + 1)
    }

    tankMove(){     //  Я подумав що в цю функцію немає сену передавати параматри, так як користувач не взаємодіє з нею.
                    //  всі необхідні параметри лежать в this
        let currentTankPosition = parseFloat(this.tankWrapper.style.top)
        let newTankPosition = currentTankPosition + this.tankStepValue
        this.tankWrapper.style.top = newTankPosition + '%'

        if (newTankPosition > this.tankEndPosition) {
            this.tankWrapper.style.top = this.tankStartPosition + '%'
            this.tankWrapper.style.left = this.randomValuePosition() + '%'
        }
    }

    explosion(){    //  Я подумав що в цю функцію немає сену передавати параматри, так як користувач не взаємодіє з нею.
                    //  всі необхідні параметри лежать в this
        clearInterval(this.tankMoveInterval)
        this.bang.style.display = 'block'
        
        let explosionInterval = setInterval(() => {
            
            let currentBangSize = parseInt(this.bang.style.width)
            let newBangSizeValue = currentBangSize + this.explosionStepValue
            this.bang.style.width = newBangSizeValue + 'px'
            
            if (currentBangSize > this.bangMaxImgSize) {
                this.tank.style.display = 'none'
                clearInterval(explosionInterval)
                setTimeout(() => {
                    this.bang.style.display = 'none'
                    this.funnel.style.display = 'block'
                }, 200)
            }
        }, 1)
    }

    render(containerSelector, tankImgSize = 50, bangImgSize = 25, bangMaxImgSize = 70, funnelImgSize = 90, tankStartPosition = -15, tankEndPosition = 115, explosionStepValue = 5, tankStepValue = 0.15){
        //  Канєшно якась колбаса получилась...

        let tankWrapper = document.createElement('div')      
        let tank = document.createElement('img')
        let bang = document.createElement('img')
        let funnel = document.createElement('img')
        
        tank.setAttribute('src',this.tankImgPath)
        bang.setAttribute('src',this.bangImgPath)
        funnel.setAttribute('src',this.funnelImgPath)
        
        tankWrapper.style.position = 'fixed'
        tankWrapper.style.display = 'flex'
        tankWrapper.style.justifyContent = 'center'
        tankWrapper.style.alignItems = 'center'
        
        tank.style.position = 'absolute'
        bang.style.position = 'absolute'
        funnel.style.position = 'absolute'
        
        tankWrapper.style.zIndex = 0
        tank.style.zIndex = 1
        bang.style.zIndex = 2
        
        tankWrapper.style.width = tankImgSize + 'px'
        tank.style.width = tankImgSize + 'px'
        bang.style.width = bangImgSize + 'px'
        funnel.style.width = funnelImgSize + 'px'
        
        bang.style.display = 'none'
        funnel.style.display = 'none'
        
        tankWrapper.style.left = this.randomValuePosition() + '%'
        tankWrapper.style.top = tankStartPosition + '%'
        
        this.tankWrapper = tankWrapper
        this.tank = tank
        this.bang = bang
        this.funnel = funnel
        this.bangMaxImgSize = bangMaxImgSize
        this.tankStartPosition = tankStartPosition
        this.tankEndPosition = tankEndPosition
        this.explosionStepValue = explosionStepValue
        this.tankStepValue = tankStepValue
        
        this.tankMoveInterval = setInterval(() => {
            this.tankMove()
        }, this.interval)
        
        this.tankWrapper.onclick = this.explosion.bind(this)
        
        if (containerSelector) {
            document.querySelector(containerSelector).prepend(this.tankWrapper)
            
            this.tankWrapper.append(tank)
            this.tankWrapper.append(bang)
            this.tankWrapper.append(funnel)
        }
    }
}

window.onload = function(){
    let tankCount = 5
    for (let i = 1; i <= tankCount; i++) {
        setTimeout(() => {
            new tank('img/tank.png','img/bang.png','img/funnel.png').render('body')
        }, 600 * i)
    }
}
