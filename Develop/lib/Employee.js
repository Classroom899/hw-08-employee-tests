// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

class getName {
  constructor() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the employee's name?",
        },
      ])
      .then((answers) => {
        this.name = answers.name;
        this.e.getName();
      });
  }
}

class getId {
  constructor() {
    return inquirer
      .prompt([
        {
          type: "number",
          name: "id",
          message: "What is the employee's ID?",
        },
      ])
      .then((answers) => {
        this.id = answers.id;
        this.getId();
      });
  }
}

class getRole {
  constructor() {
    this.role = "employee";
    console.log(this);
  }
}

const e = new Employee();
module.exports = Employee;
