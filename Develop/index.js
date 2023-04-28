// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project?",
  },
  {
    type: "checkbox",
    name: "licenses",
    message: "What kind of licenses should your project have ?",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU General Public License (GPL)",
      "BSD License",
      "Creative Commons License",
      "Mozilla Public License",
    ],
  },
  {
    type: "list",
    name: "installation",
    message: "What commands should be run to install dependencies? ",
    choices: [
      "npm install",
      "pip install",
      "gem install",
      "mvn install",
      "composer install",
      "cargo install",
      "nuget install",
      "go get",
    ],
  },
  {
    type: "list",
    name: "testInstall",
    message: "What commands should be run ot install tests? ",
    choices: [
      "npm install --save-dev mocha",
      "pip install pytest",
      "gem install rspec",
      "mvn test",
      "composer require --dev phpunit/phpunit",
      " cargo add --dev assert",
      "dotnet add package Microsoft.VisualStudio.TestTools.UnitTesting",
    ],
  },
  {
    type: "list",
    name: "testRun",
    message: "What commands should be run to run tests? ",
    choices: [
      "npm test",
      "pytest",
      "rspec",
      "mvn test",
      "phpunit",
      "cargo test",
      "dotnet test",
    ],
  },
  {
    type: "input",
    name: "usingRepo",
    message: "What should the user know about using the repo? ",
  },
  {
    type: "input",
    name: "contribution",
    message: "What should the user know before contributing to the repo? ",
  },
];

function askQuestions() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      const newMarkDown = markDown(answers);
      fs.writeFile("./utils/README.md", newMarkDown, () => console.log("hi"));
      return answers;
    })
    .catch((error) => console.log(error));
}

askQuestions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
