class star{
    constructor(x,y,z){
        this.x = x
        this.y = y
        this.z = z
        this.fillC = [200,200,60]
        this.strokeC = [200,100,50]
        this.r = 50
    }
    render(){
        push()
            stroke(this.strokeC)
            translate(this.x, this.y, this.z)
            fill(this.fillC)
            sphere(this.r)
        pop()
    }

}