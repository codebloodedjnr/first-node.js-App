// Exporting Files Locally

const fs = require("fs");

// Function to read a file asynchronously
function readFileAsync(filePath, encoding = "utf8") {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

// Function to write to a file asynchronously
function writeFileAsync(filePath, data) {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been written");
  });
}

// Export the functions
module.exports = {
  readFileAsync,
  writeFileAsync,
};
