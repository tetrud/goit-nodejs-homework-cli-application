const { program } = require('commander')
const { listContacts, getContactById, addContact, removeContact } = require('./contacts')

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone')

program.parse(process.argv)
const argv = program.opts()

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      await listContacts()
      break

    case 'get':
      await getContactById(Number(id))
      break

    case 'add':
      await addContact(name, email, phone)
      break

    case 'remove':
      await removeContact(Number(id))
      break

    default:
      console.warn('\x1B[31m Unknown action type!')
  }
}

invokeAction(argv)
