USE employees_db;

INSERT INTO department (name)
VALUES ("Web Design"),
       ("Finance"),
       ("Advertising"),
       ("SEO"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Web Design Manager", "150000", "01"),
       ("Account Manager", "150000", "02"),
       ("Advertising Manager", "150000", "03"),
       ("SEO Manager", "150000", "04"),
       ("Sales Manager", "150000", "05"),
       ("Salesperson", "100000", "05"),
       ("Programmer", "120000", "01"),
       ("Web Designer", "65000", "01"),
       ("Accountant", "80000", "02"),
       ("Ad Split Tester", "70000", "03"),
       ("Ad Copy Writer", "55000", "03"),
       ("SEO Setup", "50000", "04");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eric", "Rothmuller", "01", "1"),
       ("Liou", "Chao", "02", "1"),
       ("Mathew", "Evans", "03", "1"),
       ("Sean", "Haub", "04", "1"),
       ("Sarah", "Rothmuller", "05", "1"),
       ("David", "Bell", "05", "5"),
       ("Nick", "Leon", "01", "1"),
       ("Justin", "Haub", "01", "1"),
       ("Robin", "Greyhorse", "02", "2"),
       ("Charlton", "DaSilva", "03", "3"),
       ("Rothtana", "Ouch", "03", "3"),
       ("Chris", "Duke", "04", "4");