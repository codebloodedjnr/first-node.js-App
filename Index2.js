// // Section 3 Lesson 2: Importing Node.js Core Modules
const fs = require("fs");

// writing files
// Asynchronus writing of files

// fs.writeFile("notes.txt", "Hello, My name is segun", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File has been written");
// });

// synchronous writing of files

// try {
//   fs.writeFileSync("notes2.txt", "Hello, my name is Olaife");
//   console.log("file created successfully");
// } catch (error) {
//   console.log(error);
// }

// Reading files
// Asynchronus reading of files

// fs.readFile("notes.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("File does not exist");
//     return;
//   }
//   console.log(data);
// });

// synchronus reading of files

// try {
//   const data = fs.readFileSync("notes2.txt", "utf8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

// Append to file

// asynchronous Append to file

// fs.appendFile("notes.txt", "I'm a Computer Scientist", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Text has been appended");
// });

// synchronous Append to file

// try {
//   fs.appendFileSync("notes2.txt", "I'm  a boy");
//   console.log("Text has been appended");
// } catch (err) {
//   console.error(err);
// }

// Deleting File

// Asynchronous Deleting of file

// fs.unlink("notes.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File has been deleted");
// });

// synchronous Deleting of file

// try {
//   fs.unlinkSync("notes2.txt");
//   console.log("File has been deleted");
// } catch (err) {
//   console.log(err);
// }

// Renaming files
// Asynchronous

// fs.rename("notes.txt", "userinfo.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File Renamed Successfully");
// });

// synchronous

// try {
//   fs.rename("notes2.txt", "userinfo2.txt");
//   console.log("File Renamed Successfully");
// } catch (error) {
//   console.log(error);
// }

// Creating directory
// Asynchronous Creating

// fs.mkdir("Users", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Directory created");
// });

// Synchronous

// try {
//   fs.mkdirSync("Users2");
//   console.log("Directory created");
// } catch (err) {
//   console.error(err);
// }

// Deleting Directory
// Asynchronous
// fs.rmdir("Users", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Directory deleted");
// });

// synchronous
// try {
//   fs.rmdirSync("Users2");
//   console.log("Directory deleted");
// } catch (err) {
//   console.error(err);
// }
