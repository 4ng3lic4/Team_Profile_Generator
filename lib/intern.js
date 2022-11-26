const Employee = require ('./Employee');
//The class intern will inherit properties from the Employe class
class Intern extends Employee{
    constructor(name, id, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

//Export the class Intern
module.exports = Intern