//  Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = require('./utils/renderLicenseBadge');
const renderLicenseSection = require('./utils/licenseSection');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter your project title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please provide your email:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please provide a short project description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter the installation instructions:',
        name: 'install'
    },
    {
        type:'input',
        message: 'Please enter the usage instructions:',
        name: 'usage'

    },
    {
        type: 'input',
        message: 'Please enter the contribution guidelines:',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please enter any test instructions:',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Please select the project license:',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'None'],
        name: 'license'
    },
];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log("Your README was generated!")
    })
}

// A function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        response.licenseSection = renderLicenseSection(response.license);
        response.licenseBadge = renderLicenseBadge(response.license);
        const content = generateMarkdown(response);
        writeToFile('./README.md', content);        
    })
}

init();
