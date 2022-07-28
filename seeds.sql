USE employees_db;

INSERT INTO department (id, department)
VALUES (001, "Web Design"),
       (002, "Finance"),
       (003, "Advertising"),
       (004, "SEO"),
       (005, "Sales");

INSERT INTO roles (id, title, department, salary)
VALUES (001, "Web Design Manager", "Web Design", "150000"),
       (002, "Account Manager", "Finance", "150000"),
       (003, "Advertising Manager", "Advertising", "150000"),
       (004, "SEO Manager", "SEO", "150000"),
       (005, "Sales Manager", "Sales", "150000"),
       (006, "Programmer", "Web Design", "120000"),
       (007, "Web Designer", "Web Design", "65000"),
       (008, "Accountant", "Finance", "80000"),
       (009, "Ad Split Tester", "Advertising", "70000"),
       (010, "Ad Copy Writer", "Advertising", "55000"),
       (011, "SEO Setup", "SEO", "50000");

INSERT INTO employees (id, first_name, last_name, title, department, salary, manager)
VALUES (001, "Eric", "Rothmuller", "Web Design Manager", "Web Design", "150000", "null"),
       (002, "Liou", "Chao", "Account Manager", "Finance", "150000", "null"),
       (003, "Mathew", "Evans", "Advertising Manager", "Advertising", "150000", "null"),
       (004, "Sean", "Haub", "SEO Manager", "SEO", "150000", "null"),
       (005, "Justin", "Haub", "Web Designer", "Web Design", "65000", "Eric Rothmuller"),
       (006, "Charlton", "DaSilva", "Ad Split Tester", "Advertising", "70000", "Mathew Evans"),
       (007, "Rothtana", "Ouch", "Ad Copy Writer", "Advertising", "55000", "Mathew Evans"),
       (008, "Chris", "Duke", "SEO Setup", "SEO", "50000", "Sean Haub"),
       (009, "Robin", "Greyhorse", "Accountant", "Finance", "80000", "Liou Chao"),
       (010, "Nick", "Leon", "Programmer", "Web Design", "120000", "Eric Rothmuller"),
       (011, "Sarah", "Rothmuller", "Sales Manager", "Sales", "150000", "null"),
       (012, "David", "Benn", "Salesperson", "Sales", "100000", "Sarah Rothmuller");