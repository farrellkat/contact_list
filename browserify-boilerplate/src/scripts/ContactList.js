import contactManager from "./ContactCollection"
import putContactOnDom from "./Contact"

const ContactList = (contactElement) => {
    contactManager.grabAllContacts().then((parsedContacts) => {
        parsedContacts.forEach(contact => {
            const name = contact.name
            const phone = contact.phone
            const address = contact.address
            contactElement.innerHTML += putContactOnDom(name, phone, address)
        });
    })
}

export default ContactList