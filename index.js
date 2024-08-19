// index.js

const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the text:',
    validate: input => input.length <= 3 ? true : 'Text must be up to three characters long.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (name or hex code):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (name or hex code):',
  }
];

inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;

  let shapeObj;
  switch (shape) {
    case 'circle':
      shapeObj = new Circle();
      break;
    case 'triangle':
      shapeObj = new Triangle();
      break;
    case 'square':
      shapeObj = new Square();
      break;
  }
  shapeObj.setColor(shapeColor);

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeObj.render()}
      <text x="50%" y="50%" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent.trim());
  console.log('Generated logo.svg');
});
