
//modules
const fs = require("fs");
const inquirer = require("inquirer");
const { Square, Triangle, Circle } = require("./lib/shapes");
//Question arrays
const questions = [
    {
        type: "input",
        name: "Text",
        message: "Enter 1-3 Characters:",
        validate: function (text) {
            return text.length <= 3 && text.length > 0;
        },
    },
    {
        type: "input",
        name: "Text-color",
        message: "Enter Color of TEXT",
    },
    {
        type: "list",
        name: "Shape",
        message: "Choose Shape:",
        choices: ["Square", "Triangle", "Circle"],
    },
    {
        type: "input",
        name: "Shape-color",
        message: "Enter Color of SHAPE",
    },
];

async function init() {
    try {
        const answers = await inquirer.prompt(questions); //asks ?s

        const textColor = answers["Text-color"];
        const text = answers.Text;
        const shapeColor = answers["Shape-color"];
        const Shape = answers.Shape;

        let shape; ///create new shapes
        switch (Shape) {
            case "Square":
                shape = new Square();
                break;
            case "Circle":
                shape = new Circle();
                break;
            case "Triangle":
                shape = new Triangle();
                break;
            default:
                console.log("Not Valid Shape");
                return;
        }
        //set shape color
        shape.setColor(shapeColor);
        //use input to generate SVG
        const logoSVG = generatedSVG(shape, textColor, text);
        //save file as SVG
        fs.writeFileSync("logo.svg", logoSVG);
        console.log("Logo.SVG Saved");
    } catch (error) {
        console.error("Error", error);
    }
}

function generatedSVG(shape, textColor, text) {
    const shapeSVG = shape.render();
    const textSVG = `<text y="140" x="150" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>`;
    const SVG = `
        <SVG height="300" width="300" xmlns="http://www.w3.org/2000/svg">
                        ${shapeSVG}
                        ${textSVG}
        </SVG>
        `;
    return SVG;
}

init();