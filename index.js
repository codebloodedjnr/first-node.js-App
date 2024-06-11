// Section 2 Lesson 5: Your First Node.js Script

console.log("hello node.js!");

// Section 3 Lesson 3:  Importing Your Own Files

const { readFileAsync, writeFileAsync } = require("./App");

// Using the imported functions
const filePath = "notes.txt";
const data = "Hello, segun is here again!!";

// Writing to the file
writeFileAsync(filePath, data);

// Reading from the file
readFileAsync(filePath);
