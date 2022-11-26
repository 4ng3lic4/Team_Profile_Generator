//Import node modules
const generateTeam = require("./src/generateHtml");
const inquirer = require("inquirer");
const fs = require("fs");

//Import lib modules 
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");


//Array where Team members will be pushed into this array
//after that, get inquire working by creating the questions list or array and
//have all of them there

const teamDataQuestions = [];


//Questions

const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter your name",

            },


            //Copy and paste the other questions here  including the {}
            {
                type: "input",
                name: "id",
                message: "Please enter your ID number",

            },
            {
                type: "input",
                name: "email",
                message: "Please enter your email address",

            },

            {
                type: "list",
                name: "role",
                message: "Please enter your role from the list of choices",
                choices: ["Manager", "Engineer", "Intern"],

            },

        ])


    //console.log(answers);
    
    //Generate questions depending on user's choices
    if (answers.role === "Manager") {
        const managerAnsr = await inquirer
            .prompt([
                {
                    type: "input",
                    name: "office number",
                    message: "Please enter your office number",
                },
            ])
        //Create a new instance of Manager
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAnsr.officeNumber
        );

        //It gets pushed into the array
        teamDataQuestions.push(newManager);

        //Questions if user chooses engineer
    } else if (answers.role === "Engineer") {
        const gitHubAnsr = await inquirer
            .prompt([
                {
                    type: "input",
                    name: "github",
                    message: "Please enter your GitHub user name",
                },
            ])
        //Create an instance of Engineer
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            gitHubAnsr.github
        );
        //It gets pushed into the array
        teamDataQuestions.push(newEngineer);
        ///
        //Questions if user chooses Intern
    } else if (answers.role === " Intern") {
        const internAnsr = await inquirer
            .prompt([
                {
                    type: "input",
                    name: "school",
                    message: "Please enter your school",
                },
            ])
        //Create an instance of  Intern
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAnsr.school
        );
        //It gets pushed into the array
        teamDataQuestions.push(newIntern);

    }
};
////should have the init function running again asking the next question

async function init(){
    await questions()

    const createNewMember = await inquirer
    .prompt([
        {
type:'list',
name:'addTeamMember',
message:"Please select the option you would like to continue next",
choices:['Finish building my team', 'Create a new member']
        }
    ])
    if(createNewMember.addTeamMember === 'Add new a Member'){
        return init()
}

return buildTeam();
}

init();
//When user is done. Then start working on the generate HTML function
function buildTeam(){
    console.log("new member",teamDataQuestions)
fs.writeFileSync("./output/index.html",
generateTeam(teamDataQuestions),
"utf-8");
}

