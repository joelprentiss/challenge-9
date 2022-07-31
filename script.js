const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'projectTitle'
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running',
            name: 'projectDescription'
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            name: 'projectInstall',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
            name: 'projectInst',
        },
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
            name: 'projectCollab',
        },

    ])
    .then((answers)=>{
        console.log(answers);
        fs.writeToFile('README.MD' ,JSON.stringify(writeMarkDown, null, '\t'), (err) =>
  err ? console.error(err) : console.log('Success!'));
    }) 

// TODO: Create a function to write README file

function writeMarkDown(fileName, data) {
      const data = fs.writeToFile(answers);
    const fileName = fs.writeFileSync(`./README/${answers.projectTitle}.md`);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
