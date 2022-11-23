const Manager = require("../lib/Manager");
test("test if Manager is an object", () => { 
 const newManager = new Manager("name","email","id" , "number");
    expect (typeof(newManager)).toBe("object")
})
