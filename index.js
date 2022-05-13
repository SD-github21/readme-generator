// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/'+ fileName , generateMarkdown(data), err => {
        if (err) throw err;

        console.log('README generation complete! Check out README.md to see the ouput!');
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(data => {

    })
}

// Function call to initialize app
init();

