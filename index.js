// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/generateHtml");

// lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array for answers to questions
const teamDataQuestions = [];

// Array object questions asked in CLI to user
const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter your name",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter your ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter your email address",
        name: "email",
      },
      {
        type: "list",
        message: "Please enter your role from the list of choices",
        name: "role",
        choices: ["Manager", "Intern", "Engineer"],
      },
    ])


    
    //  console.log(answers);
      // if manager selected, answer these specific question

      if (answers.role === "Manager") {
        const managerAnsr = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your office number",
              name: "officeNumber",
            },
          ])
          const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAnsr.officeNumber
          );
           teamDataQuestions.push(newManager);
          
        // if engineer selected answer these set of questions
      } else if (answers.role === "Engineer") {
        const githubAnsr = await inquirer
          .prompt([
            {
              type: "input",
              message: "Please enter your GitHub user name",
              name: "github",
            }
          ])
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAnsr.github
            );
             teamDataQuestions.push(newEngineer);
          
        // if intern selected answer these set of questions
      } else if (answers.role === "Intern") {
        const internAnsr = await inquirer
          .prompt([
            {
              type: "input",
              message: "Please enter your school",
              name: "school",
            },
          ])
          
          const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAnsr.school
          );
          teamDataQuestions.push(newIntern);          
      } 

}; //end of questions function

async function init() {
  await questions()
    
  
  const addMemberAnsr = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Finish Creating team'],
        message: "What would you like to do next?"
      }
    ])

    if (addMemberAnsr.addMember === 'Add a new Team member') {
      return init()
    }
    return buildTeam();
}  

init();

function buildTeam() {
  console.log("new person", teamDataQuestions)
  fs.writeFileSync( "./output/index.html",
    generateTeam(teamDataQuestions),
    "utf-8"
  );
}

