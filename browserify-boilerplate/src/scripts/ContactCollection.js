//grab all contacts

const contactManager = {
grabAllContacts: function () {
   return fetch("http://localhost:8088/contacts")
    .then(contacts => contacts.json())
},

//post contact to database

postContact: function (contactObject) {
    fetch("http://localhost:8088/contacts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(contactObject)
    })
}
}

export default contactManager