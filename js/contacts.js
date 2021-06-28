const shortid = require('shortid')

const readFile = require('./readFile')
const writeFile = require('./writeFile')

//////////////////////////////////////////////

async function listContacts() {
  try {
    const contacts = await readFile()
    console.table(contacts)
  } catch (error) {
    error.message = 'Cannot read contacts'
    throw error
  }
}

///////////////////////////////////////////////

async function getContactById(contactId) {
  try {
    const contacts = await readFile()
    const findContact = contacts.find((contact) => contact.id === contactId)

    if (!findContact) {
      throw new Error(`Contact with ID-${contactId} not found`)
    }
    console.table(findContact)
  } catch (error) {
    throw error
  }
}

//////////////////////////////////////////

async function removeContact(contactId) {
  try {
    const contacts = await readFile()
    const indexContact = contacts.findIndex((contacts) => contacts.id === contactId)
    if (indexContact === -1) {
      throw new Error('ID not found')
    }

    const filteredContacts = contacts.filter((contact) => contact.id !== contactId)
    if (!filteredContacts) {
      throw new Error('ID not found')
    }

    writeFile(filteredContacts)

    console.log(`Delete contact by ID-${contactId}`)
    console.table(filteredContacts)
  } catch (error) {
    throw error
  }
}

///////////////////////////////////////

async function addContact(name, email, phone) {
  const id = shortid.generate()
  const newContact = { id, name, email, phone }

  try {
    const contacts = await readFile()
    const newListContacts = [...contacts, newContact]

    writeFile(newListContacts)
    console.table(newListContacts)
  } catch (error) {
    throw error
  }
}

////////////////////////////////////

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
}
