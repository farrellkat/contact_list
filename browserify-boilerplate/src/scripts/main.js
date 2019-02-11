import displayContactList from "./ContactList"
import eventListeners from "./ContactForm"
// import putContactOnDom from "./Contact"

const contactElement = document.querySelector("#contactsContainer")

displayContactList(contactElement)
eventListeners.createContactComponent()
eventListeners.deleteContact()
