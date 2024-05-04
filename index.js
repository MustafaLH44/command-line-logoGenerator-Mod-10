/**GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square */
const fs = require('fs');
const inquirer = require('inquirer');
const generateSVGLogo = require('');

const questions =inquirer
.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'Please enter up to three characters',
    choices:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z']
  }
  ,{
    type: 'input',
    name: 'description',
    message: 'Please choose a color keyword?',
    choices:[]
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'Please choose a shape',
    choices:['cirlce','triagle','square']
  },
])
.then((questions) => {
  const svgLogo = generateSVGLogo(questions);
  console.log(svgLogo);
  writeToFile('?',svgLogo); // calling writeToFile function from below to actually handle generating the new file or throw an error message in case something isnt working
});
function writeToFile(fileName, data) {
    fs.writeFile(`?/${fileName}`, data, (err) =>
    err ? console.log(err) : console.log('Successfully created SVG Logo!')
  );
  };