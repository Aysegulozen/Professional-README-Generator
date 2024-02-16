const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    {

        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information."
    },
    {
        type: "input",
        name: "license",
        message: "Please provide license information."
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide contribution guidelines."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions."
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide contact information for questions."
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address."
    
    }


];


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    })

}

// function call to initialize program
init();

