const generateHTML = require("./generateHtml");
const inquirer = require("inquirer");
const fs = require("fs");
let teamArray = []; //Team members will be pushed into this array
//finish test for each class
//after that, get inquire working by creating the questions list or array and
//have all of them there
//start working on what to do with the answers
//if they cerate engineer , add it and it shoul the init function running again
//They the user clicks done. then startworking on the generate HTML function
//it is going to be given this team array 

// The we can do the return back ticks and do the HTML on the template lieral and have it return one card with the team member info the way ots supposed to be
//where we will console log it 
//There willbe a loop that will generate the cards. That function will e inside the HTML page 
//Take the array and give it to the HTML 
//Finally, take the HTML thats been generatet and give it to the writeFile()


// TODO: Create a function to write the HTML
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        //console.log(fileName)
        //console.log(data)
        if (err) throw err;
        console.log('All done, Thank you!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            //console.log(answers.title) ;
            //console.log(answers.description); 
            let htmlData = generateHTML(answers)
            console.log(readmeData);

            writeToFile("index.html", htmlData); //This is the result

        })
}

init();

