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
  getRole() {
    return "Employee";
  }
}
// Employee.prototype.getRole = function getRole() {
//   return Employee;
// };

// function getRole() {
//   constructor();
//   {
//     this.role = "employee";
//     console.log(this);
//   }
// }

const e = new Employee();
module.exports = Employee;
