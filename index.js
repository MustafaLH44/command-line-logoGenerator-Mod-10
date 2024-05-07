
const fs = require('fs');
const inquirer = require('inquirer');
const {Circle,Square,Triangle} = require('./utils/generateSVGLogo.js');

const answers =inquirer
.prompt([
  {
    type: 'input',
    name: 'content',
    message: 'Please enter up to three characters',
  }
  ,{
    type: 'input',
    name: 'backgroundColor',
    message: 'Please choose a background color?',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Please choose a text color?',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape',
    choices:['circle','triangle','square']
  },
])
.then((answers) => {
    let shapeDetails;
    if(answers.shape==='circle'){
        shapeDetails= new Circle(answers)
    }else if(answers.shape==='triangle'){
        shapeDetails= new Triangle(answers)
    }else if(answers.shape==='sqaure'){
        shapeDetails= new Square(answers)
    }else{
        'The shape you chose is not available'
    }
//   const svgLogo = generateSVGLogo(questions);

  console.log(shapeDetails);
  writeToFile('./output/logo.svg',shapeDetails); 
});
function writeToFile(fileName, data) {
    fs.writeFile(`?/${fileName}`, data, (err) =>
    err ? console.log(err) : console.log('Successfully created SVG Logo!')
  );
  };