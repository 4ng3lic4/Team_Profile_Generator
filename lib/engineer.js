const Employee = require('./Employee');

//Engineer will inherit properties from the Employee class
class Engineer extends Employee {
    constructor(name, id, email, gitHubUser){
        super (name, id, email);
        this.gitHubUser = gitHubUser;
    }

    getGitHubUser(){
        return this.gitHubUser;
    }
   
    getRole(){
        return "Engineer";
    }
}

//Exporting the Engineer class
module.exports = Engineer;
