const Employee = require("../lib/employee");
test("test if Employee is an object", () => { 
 const newEmployee = new Employee("name","email","id");
    expect (typeof(newEmployee)).toBe("object")
})