// Dependencies

const inquirer = require("inquirer");
const mysql = require("mysql2");
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
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Quit",
        ],
      },
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
      } else if (response.whatToDo === "Quit") {
        quit();
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
    ])
    .then((response) => {
      db.query(
        "INSERT INTO department (name) VALUES (?)",
        response.departmentName
      );
      console.log("Department added");
      whatToDo();
    });
}
// Add Role

function addRole() {
  var departmentAll = "SELECT * FROM department";

  var departmentNames = [];

  var allDepartments = [];

  db.query(departmentAll, (err, results) => {
    for (var i = 0; i < results.length; i++) {
      allDepartments.push(results[i]);
      departmentNames.push(allDepartments[i].name);
    }

    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the role name?",
          name: "roleName",
        },
        {
          type: "input",
          message: "What is the role's salary?",
          name: "roleSalary",
        },
        {
          type: "list",
          message: "What department does this role belong to?",
          choices: departmentNames,
          name: "roleDepartment",
        },
      ])
      .then((response) => {
        var departmentAll =
          "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
        var selectedID;

        for (var m = 0; m < allDepartments.length; m++) {
          if (allDepartments[m].name === response.roleDepartment) {
            selectedID = allDepartments[m].id;
          }
        }

        db.query(
          departmentAll,
          [response.roleName, response.roleSalary, selectedID],
          () => {
            console.log("Role added");
            whatToDo();
          }
        );
      });
  });
}

// Add Employee

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of the employee?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the last name of the employee?",
        name: "lastName",
      },
      {
        type: "input",
        message: "What is the Role ID of the employee?",
        name: "roleId",
      },
      {
        type: "input",
        message: "What is the manager ID of the employee?",
        name: "managerId",
      },
    ])
    .then((results) => {
      var insertEmployee =
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
      db.query(
        insertEmployee,
        [
          results.firstName,
          results.lastName,
          results.roleId,
          results.managerId,
        ],
        () => {
          console.log("Employee added");
          whatToDo();
        }
      );
    });
}

// Update Employee

function updateEmployee() {
  var employeesAll = "SELECT * FROM employee";

  var employeeIds = [];

  var allEmployees = [];

  db.query(employeesAll, (err, results) => {
    for (var i = 0; i < results.length; i++) {
      allEmployees.push(results[i]);
      employeeIds.push(allEmployees[i].id);
    }

    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the ID of the employee you'd like to edit?",
          name: "employeeId",
        },
        {
          type: "input",
          message: "What is the new Role ID of the employee?",
          name: "newRoleId",
        },
      ])
      .then((results) => {
        var updateEmployee = "UPDATE employee SET role_id = ? WHERE id = ?";

        db.query(
          updateEmployee,
          [results.newRoleId, results.employeeId],
          () => {
            console.log("Employee updated");
            whatToDo();
          }
        );
      });
  });
}

// Quits Prompt

function quit() {
  console.log("Thank you for using my application. Have a great day!");
  db.end();
}
