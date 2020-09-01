const fs = require("fs");
const uid = require("uid");

const { promises: fsPromises } = fs;
const path = require("path");
const contactsPath = path.join(__dirname, "./db/contacts.json");
const encoding = "utf8";

async function listContacts() {
  try {
    const data = await fsPromises.readFile(contactsPath, encoding);
    console.log(JSON.parse(data));
  } catch (err) {
    console.error(err);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fsPromises.readFile(contactsPath, encoding);
    console.log(JSON.parse(data).find((x) => x.id === contactId));
  } catch (err) {
    console.error(err);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fsPromises.readFile(contactsPath, encoding);
    const updatedData = JSON.parse(data).filter(
      (item) => item.id !== contactId
    );
    await fsPromises.writeFile(contactsPath, JSON.stringify(updatedData));
    console.log(updatedData);
  } catch (err) {
    console.error(err);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fsPromises.readFile(contactsPath, encoding);
    const parsedData = JSON.parse(data);
    const updatedData = parsedData.push({
      id: uid(),
      name: name,
      email: email,
      phone: phone,
    });
    await fsPromises.writeFile(contactsPath, JSON.stringify(parsedData));
    console.log(parsedData);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
