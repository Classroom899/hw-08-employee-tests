const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const main = async () => {
  let e;
  let id = 0;
  let employeeList = [];
  let keepGoing = 1;

  console.log(e);
  while (keepGoing == 1) {
    await inquirer
      .prompt([
        {
          name: "Name",
          message: "What is the name of the employee?",
        },
        {
          name: "Email",
          message: "What is the email of the employee?",
        },
        {
          name: "Role",
          Type: "list",
          choices: ["Intern", "Manager", "Manager"],
          message: "What is your role?",
        },
        {
          name: "Continue",
          Type: "list",
          choices: ["Yes", "No"],
          message: "Would you like to add another?",
        },
      ])
      .then((answers) => {
        if (answers.Role === "Intern") {
          e = new Intern(answers.Name, id, answers.Email, "school");
        } else if (answers.Role === "Manager") {
          e = new Manager(answers.Name, id, answers.Email, "office number");
        } else {
          e = new Engineer(answers.Name, id, answers.Email, "GitHub");
        }
        id++;
        console.info("Answer:", answers);
        employeeList.push(e);
        if (answers.Continue === "No") {
          keepGoing = 0;
        }
      });
  }
  page = render(employeeList); // Connection is here for page to be equal to the rendered answers
  // page = render([new Engineer("name", 0, "email", "GitHub")]);
  console.info("Page:", page);
  fs.writeFile("output/team.html", page, function (err) {
    if (err) return console.log(err);
  });
  console.log("Done!");
};

main();
// Insert and look at the games activity

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// TEST FUNCTIONALITY AND HAVE A RENDER FUNCTION
