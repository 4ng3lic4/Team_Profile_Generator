const Engineer = require("../lib/engineer");
test("test if Engineer is an object", () => { 
 const newEngineer = new Engineer("name","email","id" , "gitHub");
    expect (typeof(newEngineer)).toBe("object")
})