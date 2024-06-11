//  Importing npm Modules
// Example using validator

const validator = require("validator");

// User Registration and Login

// Sample user data
const email = "Segun@gmail.com";
const password = "Segun12345";
const confirmPassword = "Segun12345";
const username = "Segun12345";

// Validate email
if (!validator.isEmail(email)) {
  console.error("Invalid email format");
} else {
  console.log("Email is correct");
}

// Validate password length
if (!validator.isLength(password, { min: 8 })) {
  console.error("Password must be at least 8 characters long");
} else {
  console.log("Password is Accepted");
}

// Validate username
if (!validator.isAlphanumeric(username)) {
  console.error("Username must contain only letters and numbers");
} else {
  console.log("Username is Accepted");
}

// Confirm passwords match
if (!validator.equals(password, confirmPassword)) {
  console.error("Passwords do not match");
} else {
  console.log("Password matches");
}
