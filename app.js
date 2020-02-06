const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const inquirer = require("inquirer");

let team = []


function main() {
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
            type: "input",
            name: "office",
            message: "What is you manager office number?"
        }

    ]).then(resp => {
        console.log(resp)
        team.push(new Manager(resp.manager, resp.id, resp.email, resp.office))
        console.log(team)
        // llamar a otra funcion para crear el team

    })


}


function menuTeam() {
    // crear inter or eng or finish 

    //  intern crear 
    // si es Eng crear
    // si es finish build the html
}


function buildHtml() {

    //loop array team llamando a los distinto templates    // role = [i].getRole() switch 
    //al final del loop escribir el html con fw.writefile
}

main();