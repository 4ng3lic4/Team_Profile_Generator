class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

getName(){
return this.name;
}

getId() {
    return this.id;
}

getEmail(){
    return this.email
}
 
getRole(){
    return "Employee"
}

}

//We export the class with the info
module.exports = Employee;