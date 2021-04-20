const inquirer = require('inquirer');

function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name: ",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                }
                console.log("Please enter the employee's name!");
                return false;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID: ",
            validate: (idInput) => {
                if (idInput) {
                    return true;
                }
                console.log("Please enter the employee's ID!");
                return false;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address: ",
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                }
                console.log("Please enter the employee's email address!");
                return false;
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        }])
        .then(data => {

            // data from first inquirer prompt for basic information
            console.log(data);

            if (data.role === 'Manager') {
                return inquirer.prompt(
                    {
                        type: 'input',
                        name: 'managerOfficeNumber',
                        message: "Please enter the manager's office number: ",
                        validate: (officeNumberInput) => {
                            if (officeNumberInput) {
                                return true;
                            }
                            console.log("Please enter the manager's office number!");
                            return false;
                        },

                    });
            }
            else if (data.role === 'Engineer') {
                return inquirer.prompt(
                    {
                        type: 'input',
                        name: 'engineerGithub',
                        message: "Please enter the engineer's GitHub username: ",
                        validate: (engineerGithub) => {
                            if (engineerGithub) {
                                return true;
                            }
                            console.log("Please enter the engineer's GitHub username!");
                            return false;
                        },

                    });
            }
            else if (data.role === 'Intern') {
                return inquirer.prompt(
                    {
                        type: 'input',
                        name: 'internSchool',
                        message: "Please enter the intern's school name: ",
                        validate: (internSchool) => {
                            if (internSchool) {
                                return true;
                            }
                            console.log("Please enter the intern's school name!");
                            return false;
                        },

                    });
            }
        })
        .then(roleData => {

            // data from second inquirer prompt for role information
            console.log(roleData);
        })

}

// create a global array to hold employee names
// create a local object in init() to hold employee information
// add functionality to loop init() until done adding employees

init();