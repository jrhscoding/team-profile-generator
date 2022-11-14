const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter team managers name'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the team managers ID'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team managers email'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is your team managers office number'
        }
    ])
    .then((response) => {
        
    })