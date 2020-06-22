// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
// Write the class

class Intern extends Employee {
  constructor(github, id, email) {
    super(name, id, email);
    this.github = github;
    this.school = school;
  }
  getRole() {
    return "Engineer";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
