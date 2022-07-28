const inquirer = require("inquirer");
const db = require("./connection");
const mysql = require("mysql");

// Initial prompt


function whatToDo() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                name: "whatToDo",
                choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
            }
        ])
        .then((response) => {
            if (response.whatToDo === "View all departments") {
                viewDepartments();
            } else if (response.whatToDo === "View all roles") {
                viewRoles();
            } else if (response.whatToDo === "View all employees") {
                viewEmployees();
            } else if (response.whatToDo === "Add a department") {
                addDepartment();
            } else if (response.whatToDo === "Add a role") {
                addRole();
            } else if (response.whatToDo === "Add an employee") {
                addEmployee();
            } else if (response.whatToDo === "Update an employee role") {
                updateEmployee();
            }
        });
}

// View Departments

function viewDepartments() {
    console.log("This was ran");
}

// View Roles

function viewRoles() {
    console.log("This was ran");
}

// View Employees

function viewEmployees() {
    console.log("This was ran");
}

// Add Department

function addDepartment() {
    console.log("This was ran");
}

// Add Role

function addRole() {
    console.log("This was ran");
}

// Add Employee

function addEmployee() {
    console.log("This was ran");
}

// Update Employee

function updateEmployee() {
    console.log("This was ran");
}



