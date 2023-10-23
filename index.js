const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage information:',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Contribution guidelines:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Test instructions:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application:',
            choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ]);
};

const generateReadme = (answers) => 