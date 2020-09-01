const actions = require("./contacts");

// index.js
const argv = require("yargs").argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      actions.listContacts();
      break;

    case "get":
      actions.getContactById(id);
      break;

    case "add":
      actions.addContact(name, email, phone);
      break;

    case "remove":
      actions.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
