//set color value
class Shape{
    constructor(){
        this.color= "",
    }
    setColor(colorAs){
        this.color=(colorAs);
    }
}
//SVG circle
class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
    }
}
//SVG square
class Square extends Shape{
    render(){
        return `<rect x="62" y="45" width="180" height="160" fill="${this.color}" />`;
    }
}
//SVG triangle
class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
};

module.exports = {Circle, Square, Triangle} ;
