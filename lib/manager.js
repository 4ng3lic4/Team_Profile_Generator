const Employee = require("./Employee");
//New class will inherit properties from Eployee
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        //By calling the super() method in the constructor 
        //method, we call the parent's constructor method and gets access to the parent's properties and methods
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
    return "Manager";    
    }
}

//Exporting the Function = Manager
module.exports = Manager;