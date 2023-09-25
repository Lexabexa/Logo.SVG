//set color value
class Shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}
//SVG circle
class Circle extends Shape{
    render(){
        return `<circle cy="50%" cx="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}
//SVG square
class Square extends Shape{
    render(){
        return `<rect x="50" width="200" height="200" fill="${this.color}">`
    }
}
//SVG triangle
class Triangle extends Shape{
    render(){
        //return `<polygon width="100%" height="100%" points="25,75 75,25 25,25" fill="${this.color}">'
        return `<polygon width="100%" height="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
};

Module.exports = {Circle, Square, Triangle}