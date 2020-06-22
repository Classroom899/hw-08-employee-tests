// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

// Write the class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
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
