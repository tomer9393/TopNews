const Contact = require('../models/contact');

const createContact = async (fullName,email,message) => {
    const contact = new Contact({ 
        fullName: fullName,
        email:email,
        message:message

     });

    let contactDocument = await contact.save();
    console.log('contact:');
    console.log(contactDocument);

    return contactDocument;
}

const getContactByID= async (id)=> {
    return await Contact.findById(id);
}

const UpdateContact = async(id,fullName,email,message)=> {
    const contact = await getContactByID(id);
    if(!contact)
        return null;
    contact.fullName=fullName;
    contact.email=email;
    contact.message=message;
    contact.published=Date.now();
    await contact.save();
    return contact;

}

const DeleteContact = async(id)=> {
    const contact = await getContactByID(id);
    if(!contact)
        return null;
   
    await contact.remove();
    return contact;

}

const getAllContacts = async () => {
    return await Contact.find();
}

module.exports = {
    createContact,
    getContactByID,
    UpdateContact,
    DeleteContact,
    getAllContacts
}