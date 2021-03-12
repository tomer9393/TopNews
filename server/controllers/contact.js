const contact = require('../models/contact');
const contactService = require('../services/contact');

const createContact = async (req, res) => {
  const newContact = await contactService.createContact(req.body.fullName, req.body.email, req.body.message);
  if (!newContact) {
    return res.status(501).json("No contact created");
  }
  res.json(newContact);

};

const getContactByID = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json("id is required");
  }
  const contact = await contactService.getContactByID(req.params.id);
  if (!contact) {
    return res.status(404).json('Contact not found');
  }
  res.json(contact);
};

const UpdateContact = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json("id is required");
  }

  const contact = await contactService.UpdateContact(req.params.id, req.body.fullName, req.body.email, req.body.message);
  if (!contact) {
    return res.status(404).json('contact not found');
  }

  res.json(contact);
};


const DeleteContact = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json("id is required");
  }
  const contact = await contactService.DeleteContact(req.params.id);
  //params mean from the URL
  if (!contact) {
    return res.status(404).json('contact not found');
  }
  res.send();
};

const getAllContacts = async (req, res) => {
  const contacts = await contactService.getAllContacts();
  if (!contacts) {
    return res.status(500).json("Contacts not found");
  }
  res.json(contacts);
};

module.exports = {
  createContact,
  getContactByID,
  UpdateContact,
  DeleteContact,
  getAllContacts
};