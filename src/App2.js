const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/views/partials");

// Setup Handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Routes
app.get("", (req, res) => {
  res.render("index", {
    title: "Home Page",
    name: "Segun",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Segun",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "Segun",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }

  const address = req.query.address;
  // Mock weather data for simplicity
  const forecastData = {
    location: address,
    forecast: `It's sunny in ${address}`,
  };

  res.send(forecastData);
});

// 404 page
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "404 error",
    errorMessage: "Page not found.",
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
