// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
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
