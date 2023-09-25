# Logo.SVG
Uses a Node.js command-line to generate a SVG logo and saves it as "logo.svg" file.
# TableOfContents
* [Title](#Title)
* [Table of Contents](#TableofContents)
* [Description](#Description)
* [Screenshot](#Screenshot)
* [Link](#Link)
* [Video](#Video)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Contributing](#Contributing)
* [Questions](#Questions)
* [License](#License)

# Description
M.10 Generate a simple logo for my projects
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
# Screenshot
# Link
# Video
# Installation
Clone the repository code and run the application in your terminal by running code 'node index.js'. Answer prompt questions, then open the LOGO.SVG file in a browser.
# Usage
Dynamic JavaScript, Node.js, Jest, Inquirer.js, Visual Studio Code
# Tests
Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
The following example test should pass:
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
# Contributing 
https://www.npmjs.com/package/jest
https://www.youtube.com/@code
https://developer.mozilla.org/en-US/play
https://www.w3schools.com/
# Questions
Email: lexabexa3@gmail.com Github: https://github.com/Lexabexa
# License
MIT License

Copyright (c) 2023 Alexa Webb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
