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
            addTeam();
        })
};

const addTeam = () => {
    inquirer    
        .prompt([
            {
                type: 'list',
                name: 'teamMember',
                message: 'Which team member would you like to add?',
                choices: ['Engineer', 'Intern', 'Done']
            }
        ])
        .then((choice) => {
            switch(choice.teamMember) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'Done':
                    console.log('all done!')
            }
        })
;}

const addEngineer = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is your engineers name?'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is your engineers id?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is youer engineers email?'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is your engineers Github username?'
            }
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            console.log(engineer);
            addTeam();
        })
};

const addIntern = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'internName',
                message: 'What is your interns name?'
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is your interns id?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is youer interns email?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What school does your intern attend?'
            }
        ])
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            console.log(intern);
            addTeam();
        })
};

startup();