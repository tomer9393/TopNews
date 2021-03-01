import axios from 'axios'
const baseUrl = 'http://localhost:8081';

export const getContactByID = async (contactId) => {
    try {
        const contact = await axios.get(`${baseUrl}/contacts/${contactId}`);
        return contact;
    } catch (error) { throw new Error(error); }
}

export const createContact = async ( fullName ,email ,message) => {
    try {
        const newContact ={

            fullName : fullName,
            email : email,
            message : message
        };

        const contact = await axios.post(`${baseUrl}/contacts/`,newContact);
        return contact;
    } catch (error) { throw new Error(error); }
}
