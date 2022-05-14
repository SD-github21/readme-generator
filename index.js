// TODO: Include packages needed for this application
const fs = require('fs');
const { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require("./utils/generateMarkdown.js")
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project's title?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a short description about the project you created including its purpose:"
        },
        {
            type: "input",
            name: "installation",
            message: "Provide the required steps needed to install and run your project:"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for how the user should expect the project to run:"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Choose a license for your project",
            choices: ["Apache License 2.0", "GNU GPLv2", "GNU GPLv3", "MIT", "ISC", "No license for this project"]
        },
        {
            type: "input",
            name: "contributing",
            message: "Provide guidelines for how other developers can contribute to your project:"
        },
        {
            type: "input",
            name: "tests",
            message: "Provide examples on how to run any tests that you have written:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address that you want to use for communications about this project:"
        }    
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/'+ fileName , generateMarkdown(data), err => {
        if (err) throw err;
        console.log('README generation complete! Check out README.md to see the ouput!');
    });
};


// TODO: Create a function to initialize app
function init() {
    questions()
    .then(data => {
        writeToFile('README.md', data);
        generateMarkdown(data);
        renderLicenseBadge(data);
        renderLicenseLink(data);
        renderLicenseSection(data);
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();

