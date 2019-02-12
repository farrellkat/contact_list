//grab all contacts
// import ContactList from "./ContactList"


const contactManager = {
    grabAllContacts: function () {
        return fetch("http://localhost:8088/contacts")
            .then(contacts => contacts.json())
    },
    grabContact: function (cardId) {
        return fetch(`http://localhost:8088/contacts/${cardId}`)
            .then(contacts => contacts.json())
    },
    postContact: function (contactObject) {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactObject)
        })
    },
    editContact: function (cardId, contactObject) {
        return fetch(`http://localhost:8088/contacts/${cardId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactObject)
        })
    },
    deleteContact: (cardId) => {
        return fetch(`http://localhost:8088/contacts/${cardId}`, {
            method: "DELETE"
        })
    }
}

export default contactManager