//generate the team
const generateTeam = (team) => {

    //Generate the engineers html cards
    const generateEngineer = (engineer) => {
        return `
    <div class ="card employee-card"> 
        <div class = "card-header"> 
        <h2 class = "card-title"> ${engineer.getName()}</h2>
       <h3 class = "card-title"> <i class="fa-duotone fa-glasses"></i>${engineer.getRole()} </h3>
        </div>
        <div class = "card-body"> 
        <ul>
        <li class="list-group-item">ID:${engineer.getId()} </li>
        <li class="list-group-item">Email: <a href="mailto${engineer.getEmail()}" >${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub:<a href ="https://github.com/${engineer.getGitHubUser()}"target="blank" rel= "noopener noreferrer"> ${engineer.getGitHubUser()}</a></li>
        </ul>
        </div>
        </div>      
    `;
    }


    //Generate the manager html cards
    const generateManager = (manager) => {
        return `
        <div class ="card employee-card"> 
        <div class = "card-header"> 
        <h2 class = "card-title"> ${manager.getName()}</h2>
       <h3 class = "card-title"> <i class="fa-duotone fa-mug-hot"></i>${manager.getRole()} </h3>
        </div>
        <div class = "card-body"> 
        <ul>
        <li class="list-group-item">ID:${manager.getId()} </li>
        <li class="list-group-item">Email: <a href="mailto${manager.getEmail()}" >${manager.getEmail()}</a></li>
        <li class="list-group-item">Office number:${manager.getOfficeNumber()} </li>
        </ul>
        </div>
        </div>        
        `;
    };


//Generate the interns html cards
const generateIntern = (intern) => {
    return `
    <div class ="card employee-card"> 
        <div class = "card-header"> 
        <h2 class = "card-title"> ${intern.getName()}</h2>
       <h3 class = "card-title">  <i class="fa-duotone fa-user-graduate"></i>${intern.getRole()} </h3>
      
       </div>
        <div class = "card-body"> 
        <ul>
        <li class="list-group-item">ID:${intern.getId()} </li>
        <li class="list-group-item">Email: <a href="mailto${intern.getEmail()}" >${intern.getEmail()}</a></li>
        <li class="list-group-item">Office number:${intern.getSchool()} </li>
        </ul>
        </div>
        </div>     
    `;
};

//This array will havethe values of the team members
let teamArray = [];

teamArray.push(
    team.filter((employee)=> employee.getRole() === "Engineer")
    .map((engineer) => generateEngineer(engineer))
    .join("")
);

teamArray.push(
    team.filter((employee)=> employee.getRole() === "Manager")
    .map((manager) => generateManager(manager))
);



teamArray.push(
    team.filter((employee)=> employee.getRole() === "Intern")
    .map((intern) => generateIntern(intern))
    .join("")
);

return teamArray.join/("");
};

//Export team function to generate general HTML 
module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Team Profile Generator">
    <meta name="author" content="Angelica Ibarra Ochoa">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel ="stylesheet" href="style.css">
    <script src ="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h2 class="text-center">MY TEAM</h2>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    
    `;
}