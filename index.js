const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { createHTML } = require('./src/html-generator');
const rl = require('readline-sync');

const team = [];
console.log("Please enter the team manager's information:");

const name = rl.question("Name: ");
const id = rl.question("ID: ");
const email = rl.question("Email: ");
const officeNumber = rl.question("Office number: ");

const manager = new Manager(name, id, email, officeNumber);
manager.role = "Manager";
team.push(manager);
console.log("Manager has been added to the team!");

const addEmployee = (team, type) => {
    console.log(`Please enter the ${type}'s information:`);
    const name = rl.question("Name: ");
    const id = rl.question("ID: ");
    const email = rl.question("Email: ");

    if (type === "Engineer") {
        let github = rl.question("Github: ");
        if (!github) {
            github = "N/A"
        }
        const employee = new Engineer(name, id, email, github);
        employee.role = "Engineer";
        team.push(employee);
    } else if (type === "Intern") {
        const school = rl.question("School: ");
        const employee = new Intern(name, id, email, school);
        employee.role = "Intern";
        team.push(employee);
    }
    console.log(`${type} has been added to the team!`);
    return showMenu();
};
const showMenu = async () => {
    console.log("\nSelect an option:");
    console.log("1. Add an Engineer");
    console.log("2. Add an Intern");
    console.log("3. Finish building team");

    const choice = await rl.question("Enter your selection: ");
    switch (choice) {
        case '1':
            addEmployee(team, "Engineer");
            break;
        case '2':
            addEmployee(team, "Intern");
            break;
        case '3':
            createHTML(team);
            console.log("Team profile has been generated in the dist folder!");
            break;
        default:
            console.log("Invalid selection, please try again.");
            showMenu();
            break;
    }
};

showMenu();
