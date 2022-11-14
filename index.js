const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const startup = () => {
    console.log('Please fill out the managers information');
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
        .then((answer) => {
            const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber);
            console.log(manager);
        })
};

startup();