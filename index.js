const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require("console.table");
const db = require("./connection");

// Starts Connection

db.connect(function (err) {
    if (err) throw err;
    whatToDo();
});

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
    db.query("SELECT * from department;", (err, table) => {
        if (err) {
          console.log(err);
        } else {
          console.table("All Departments:", table);
          whatToDo();
        }
      });
}

// View Roles

function viewRoles() {
    db.query("SELECT * from role;", (err, table) => {
        if (err) {
          console.log(err);
        } else {
          console.table("All Roles:", table);
          whatToDo();
        }
      });
}

// View Employees

function viewEmployees() {
    db.query("SELECT * from employee;", (err, table) => {
        if (err) {
          console.log(err);
        } else {
          console.table("All Employees:", table);
          whatToDo();
        }
      });
}

// Add Department

function addDepartment() {
    inquirer
    .prompt([
    {
        type: "input",
        message: "What is the department name?",
        name: "departmentName",
    },
]).then((response) => {
    const departmentName = response.departmentName;
    db.query(`INSERT INTO department (name) VALUES(${departmentName})`);
    console.log("Department added");
    whatToDo();
});
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

