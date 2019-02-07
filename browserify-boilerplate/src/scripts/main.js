import ContactList from "./ContactList"
import createContactComponent from "./ContactForm"
import putContactOnDom from "./Contact"

const contactElement = document.querySelector("#contactsContainer")
const button = document.querySelector("#submitButton")

ContactList(contactElement)

button.addEventListener("click", () => {
    const name = document.querySelector("#nameInput").value
    const phone = document.querySelector("#phoneInput").value
    const address = document.querySelector("#addressInput").value

    createContactComponent(name, phone, address)
    const contactCard = putContactOnDom(name, phone, address)
    console.log(contactCard)
    contactElement.innerHTML += contactCard
})

