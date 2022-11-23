const Intern = require("../lib/Intern");
test("test if Intern is an object", () => { 
 const newIntern = new Intern("name","email","id" , "school");
    expect (typeof(newIntern)).toBe("object")
})
