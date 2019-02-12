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
            const cardId = document.querySelector("#inputId").value

            const contactComponent = {
                name: name,
                phone: phone,
                address: address
            }
            if (document.querySelector("#inputId").value === "") {
                // return contactComponent
                contactManager.postContact(contactComponent).then(() => {
                    displayContactList(contactElement)
                })
            } else {
                contactManager.editContact(cardId, contactComponent).then(() => {
                    document.querySelector("#submitButton").textContent = "Submit"
                    displayContactList(contactElement)
                })
            }
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
    },
    editContact: () => {
        contactElement.addEventListener("click", (event) => {
            if (event.target.id.startsWith("editButton--")) {
                const cardId = event.target.id.split("--")[1]
                document.querySelector("#inputId").value = cardId
                document.querySelector("#submitButton").textContent = "Save Changes"
                contactManager.grabContact(cardId).then((contact) => {
                    document.querySelector("#nameInput").value = contact.name
                    document.querySelector("#phoneInput").value = contact.phone
                    document.querySelector("#addressInput").value = contact.address
                })
            }
        });
    }
}
export default eventListeners
