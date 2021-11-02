
const loadImages = (objectsImg) => {
    const images = Array.from({ length: 10}, (el, i) => {
        if(i < 4){
            return objectsImg.get(i * 16, 80, 16, 17)
        } else {
            return objectsImg.get(0 * 16, 80, 16, 17)
        }
        
    })  
    return images 
}



