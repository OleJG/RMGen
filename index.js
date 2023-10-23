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

const generateReadme = (answers) => `
# ${answers.title}

![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions, you can visit my [GitHub](https://github.com/${answers.github}) or contact me through my [email](mailto:${answers.email}).
`;

promptUser().then((answers) => {
    fs.writeFileSync('README.md', generateReadme(answers));
    console.log('README.md generated successfully!');
});