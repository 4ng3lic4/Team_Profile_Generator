class Employee {
    constructor (name, id, email){
//Validate the input for name
if (typeof name !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }
//id
if (typeof id !== "string" || !id.trim().length) {
    throw new Error("Expected parameter 'id' to be a non-empty string");
  }

//email
if (typeof email !== "string" || !email.trim().length) {
    throw new Error("Expected parameter 'email' to be a non-empty string");
  }
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