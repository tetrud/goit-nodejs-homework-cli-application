const fs = require('fs').promises
const path = require('path')

const contactsPath = path.join(__dirname, '../db/contacts.json')

async function writeFile(data) {
  const dataString = JSON.stringify(data)
  await fs.writeFile(contactsPath, dataString)
}

module.exports = writeFile
