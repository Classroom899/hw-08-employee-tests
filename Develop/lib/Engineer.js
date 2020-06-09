// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("../lib/Engineer");
// Write the class

class Employee extends Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }
}

module.exports = Engineer;
