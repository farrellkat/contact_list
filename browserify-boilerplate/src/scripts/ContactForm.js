import contactManager from "./ContactCollection";
// create contact component and post it to the database

const createContactComponent = (name, phone, address) => {
    const contactComponent = {
        name: name,
        phone: phone,
        address: address
    }
    // return contactComponent
    contactManager.postContact(contactComponent)
}

export default createContactComponent