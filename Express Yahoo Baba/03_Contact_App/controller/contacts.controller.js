import Contact from "../models/contacts.models.js";

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.render("home.ejs", { contacts });
};

export const getContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("show-contact.ejs", { contact });
};

export const addContactPage = async (req, res) => {
  res.render("add-contact.ejs");
};
export const addContact = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.redirect("/");
};

export const updateContactPage = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("update-contact.ejs", { contact });
};

export const updateContact = async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

export const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
