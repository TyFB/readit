// TODO: Include packages needed for this application
const inquirer = require('inquirer');
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
                    console.log('Need a title.');
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
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Code doesnt write iteself.')
                    return false;
                }
            }
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
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();
