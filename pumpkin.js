class pumpkin{
    constructor(x,y){
        this.x = x
        this.y = y
        this.fillC = [150,50,10]
        this.strokeC = [200,100,40]
        this.topC = [60,130,60]
        this.r = 15
    }
    render(){
        push()
            stroke(this.strokeC)
            translate(this.x, this.y,this.r)
            fill(this.fillC)
            sphere(this.r)
            this.drawTop()
        pop()
    }

    drawTop(){
        push()
            stroke(this.topC)
            translate(0,0,this.r)
            fill(this.topC)
            box(5,5,10)
        pop()
    
    }
    update(){
        this.y+=0.5
        if (this.y>canvasHeight/2 -15){
            this.y = -canvasHeight/2 + 15

        }
    }

}