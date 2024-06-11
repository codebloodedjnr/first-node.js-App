const fs = require("fs");
const yargs = require("yargs");

// Function to load existing notes
const readNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Function to save notes
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// Function to add a note
const addNote = (title, body) => {
  const notes = readNotes();
  const existingNote = notes.find((note) => note.title === title);

  if (!existingNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Title Already Exists!, Pick a different title");
  }
};

// Function to remove a note
const removeNote = (title) => {
  const notes = readNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log("Note removed!");
  } else {
    console.log("No note found!");
  }
};

// yargs command to add a note
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
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

// yargs command to remove a note
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

// lesson 10
// yargs to lists all notes
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    const notes = readNotes();
    console.log("Your notes:");
    notes.forEach((note) => {
      console.log(note.title);
    });
  },
});

yargs.parse();

// test for adding notes
// node challenge.js add  --title="" --body=""
// to see output go to notes.json

// test for removing notes
// node challenge.js remove  --title="Leave the house"
// expected output note is deleted from the file

// test for listing all notes
// node challenge.js list
