const fs = require('fs').promises
const path = require('path')

const contactsPath = path.join(__dirname, '../db/contacts.json')

async function readFile() {
  const data = await fs.readFile(contactsPath)
  const contacts = JSON.parse(data)

  return contacts
}

module.exports = readFile
