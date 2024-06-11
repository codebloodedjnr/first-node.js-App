//Argument Parsing with Yargs

// const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  },
});

// yargs.parse();

// test with
// node process_args.js add  --title="complete book" --body="Finish reading the nodejs book"

// Storing data with JSON
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};
// Covert JavaScript object into JSON string
const bookJSON = JSON.stringify(book).writ;
console.log(bookJSON);
// Covert JSON string into object
const bookObject = JSON.parse(bookJSON);
console.log(bookObject.title); // Print: Ego is the Enemy
