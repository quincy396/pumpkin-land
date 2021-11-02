
let canvasWidth = window.innerWidth
let canvasHeight = window.innerHeight
let angle=0
let planets
let nightColor = [10,10,30]
let pumpkins = []
let stars = []


function preload(){
    
}

function setup(){
    createCanvas(canvasWidth, canvasHeight, WEBGL)
    //translate(0,0,-500)
    angleMode(DEGREES)
    //createPlanets()
    createPumpkins(15)
    createStars(15)
    

}

function draw(){
    background(nightColor)
    //translate(0,0,-500)
    drawMoon()
    drawStars()
    drawGround()
    updatePumpkins()

    

    //drawSolarSystem()

}
function updatePumpkins(){
    pumpkins.forEach(p => {
        p.update()
    })
}




function drawRoad(){
    push()
        stroke(0)
        translate(-200,0,1)
        fill(0)
        box(70,canvasHeight,10)


    pop()
}

function drawGround(){
    push()
        angleMode(DEGREES)
        //stroke(200,200,110)
        stroke(0)
        translate(0,100,0)
        rotateX(75)
        fill(48,50,0)
        box(canvasWidth*2,canvasHeight,10)

        drawRoad()
        drawPumpkins()


    pop()
}


function drawMoon(){
    push()
        stroke(200,200,110)
        translate(-200,-canvasHeight/2,-500)
        fill(150,150,60)
        sphere(50)


    pop()
}

function createPumpkins(n){
    for (let i =0; i<n; i++){
        x = random(-canvasWidth/2+15,canvasWidth/2-15)
        y = random(-canvasHeight/2 + 15, canvasHeight/2 -15)

        pumpkins.push(new pumpkin(x,y))
    }
}
function drawPumpkins(){
    pumpkins.forEach(p => {
        p.render()
    })
}
function createStars(n){
    for (let i =0; i<n; i++){
        x = random(0,9)
        y = random(0,4)
        stars.push(new star(canvasWidth*4.5-canvasWidth*x,-canvasHeight*4.5 + canvasHeight*y,-canvasHeight*7.5))
    }
}
function drawStars(){
    stars.forEach(s => {
        s.render()
    })
}









function drawSolarSystem(){
    push()
        rotateY(angle)
        fill(200,200,20)
        sphere(100)
    pop()
    planets.forEach(planet => {
        drawPlanet(planet)
    })

    angle+=0.01
}
function createPlanets(){
    planets = [ {
        dis: 150,
        color: [220,100,10],
        size: 20
    },
    {
        dis: 250,
        color: [100,100,10],
        size: 30
    },
    {
        dis: 375,
        color: [10,200,100],
        size: 40
    },
    {
        dis: 450,
        color: [220,10,10],
        size: 36
    }]
}

function drawPlanet({dis, color,size}){
    x=dis *sin(angle)
    y=dis *cos(angle)

    push()
        translate(x,0,y)
        fill(color)
        sphere(size)
    pop()

}


