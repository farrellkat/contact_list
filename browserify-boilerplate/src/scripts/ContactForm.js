import contactManager from "./ContactCollection";
import displayContactList from "./ContactList"
// create contact component and post it to the database
const button = document.querySelector("#submitButton")
const contactElement = document.querySelector("#contactsContainer")

const eventListeners = {
    createContactComponent: () => {
        button.addEventListener("click", () => {
            const name = document.querySelector("#nameInput").value
            const phone = document.querySelector("#phoneInput").value
            const address = document.querySelector("#addressInput").value

            const contactComponent = {
                name: name,
                phone: phone,
                address: address
            }
            // return contactComponent
            contactManager.postContact(contactComponent).then(() => {
                displayContactList(contactElement)
            })
        })
    },
    deleteContact: () => {
        contactElement.addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteButton--")) {
                const cardId = event.target.id.split("--")[1]
                contactManager.deleteContact(cardId).then(() => {
                    displayContactList(contactElement)
                })
            }
        });
    }
}
export default eventListeners
