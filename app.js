const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const inquirer = require("inquirer");

let team = []


function managerInput() {
    inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "What is you manager name?"
        }, {
            type: "input",
            name: "id",
            message: "What is you manager ID?"
        }, {
            type: "input",
            name: "email",
            message: "What is you manager E-mail?"
        }, {
            type: "list",
            name: "office",
            message: "What is you manager office number?",
            choices: [
                '101',
                '102',
                '103'
            ]
        }

    ]).then(resp => {
        team.push(new Manager(resp.manager, resp.id, resp.email, resp.office))
        teamImput();
        // llamar a otra funcion para crear el team
    })


}

function engineerInput() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineer",
            message: "What is you engineer name?"
        }, {
            type: "input",
            name: "id",
            message: "What is you engineer ID?"
        }, {
            type: "input",
            name: "email",
            message: "What is you engineer E-mail?"
        }, {
            type: "input",
            name: "username",
            message: "What is you engineer GitHub username?",

        }

    ]).then(resp => {
        team.push(new Engineer(resp.engineer, resp.id, resp.email, resp.username))
        teamImput();
        // llamar a otra funcion para crear el team
    })
}

function internInput() {
    inquirer.prompt([
        {
            type: "input",
            name: "intern",
            message: "What is you intern name?"
        }, {
            type: "input",
            name: "id",
            message: "What is you intern ID?"
        }, {
            type: "input",
            name: "email",
            message: "What is you intern E-mail?"
        }, {
            type: "input",
            name: "uniName",
            message: "What is you university name?",

        }

    ]).then(resp => {
        team.push(new Intern(resp.intern, resp.id, resp.email, resp.uniName))
        teamImput();
        // llamar a otra funcion para crear el team
    })
}


function teamImput() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Add new member role?",
            choices: [
                'Engineer',
                'Intern',
                'Finish'
            ]
        }
    ]).then(resp => {
        console.log(resp);
        if (resp.role === 'Engineer') {
            engineerInput();
        } else if (resp.role === 'Intern') {
            internInput();
        } else {
            console.log(team);
            console.log("end of team creation");
            console.log("BYE");

        }
    })
    // crear inter or eng or finish 

    //  intern crear 
    // si es Eng crear
    // si es finish build the html
}


function buildHtml() {

    //loop array team llamando a los distinto templates    // role = [i].getRole() switch 
    //al final del loop escribir el html con fw.writefile
}

managerInput()