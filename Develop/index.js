// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Need a title.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('What is it for?')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'How do you install this?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this meant to be used?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('This is important!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who helped with this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can you test this project?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license will you use?',
            choices: ['AL2.0', 'GNU', 'MIT', 'MPL2.0', 'BSL1.0']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Why you no want to share?')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ])
        .then(data => {
            return data;
        }) // I have tried multiple ways to get this to save the responses but it just wont.
};

// TODO: Create a function to write README file
function writeToFile(README, data) {
    fs.writeToFile('./README.md', generateMarkdown(data), err => {
        if (err) {throw err;}
    });
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(writeToFile)
};

// Function call to initialize app
init();
