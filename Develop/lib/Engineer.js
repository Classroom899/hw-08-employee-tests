// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");
// Write the class

class Engineer extends Employee {
  constructor(GitHubAccount, id, email) {
    super(name, id, email);
    this.GitHubAccount = GitHubAccount;
    getRole();
    {
      console.log(this.e);
    }
  }
  // getName() {
  //   return this.name;
  // }
  // getId() {
  //   return this.id;
  // }
  // getEmail() {
  //   return this.email;
  // }
  // getRole() {
  //   return e;
  // }
}

module.exports = Engineer;
