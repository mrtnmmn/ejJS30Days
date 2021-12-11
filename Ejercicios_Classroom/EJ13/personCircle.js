class personCircle {
    
    constructor(x) {
        this.d = this.calculateRandomMN(100,10)
        this.x = x
        this.y = -100
        this.v = this.d / 10 
        this.r = this.calculateRandomMN(255, 0)
        this.g = this.calculateRandomMN(255, 0)
        this.b = this.calculateRandomMN(255, 0)
    }

    dibujar() {
        push()
        fill(this.r, this.g, this.b)
        this.actualizarPosicion()
        circle(this.x, this.y, this.d)
        pop()
    }

    actualizarPosicion() {
        this.y = this.y + this.v
    }

    randomDiameter () {
        return Math.round(Math.random()*(100 - 10) + 10)
    }
    calculateRandomMN(m, n) {
        return Math.round(Math.random()*(m-n)+n)
    }

}