import Contact from "../models/contacts.models.js";
import mongoose from "mongoose";

export const getContacts = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
    };
    const result = await Contact.paginate({}, options);

    res.render("home.ejs", {
      totalDocs: result.totalDocs,
      limit: result.limit,
      totalPages: result.totalPages,
      currentPage: result.page,
      counter: result.pagingCounter,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
      prevPage: result.prevPage,
      nextPage: result.nextPage,
      contacts: result.docs,
    });
  } catch (error) {
    res.render("500.ejs", { message: error });
  }
};

export const getContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.render("404.ejs", { message: "Invalid Id" });
  }

  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact)
      return res.render("404.ejs", { message: "Contact Not Found." });
    res.render("show-contact.ejs", { contact });
  } catch (error) {
    res.render("500.ejs", { message: error });
  }
};

export const addContactPage = async (req, res) => {
  res.render("add-contact.ejs");
};
export const addContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    if (!contact)
      return res.render("404.ejs", { message: "Contact Not Found." });
    res.redirect("/");
  } catch (error) {
    res.render("500.ejs", { message: error });
  }
};

export const updateContactPage = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.render("404.ejs", { message: "Invalid Id" });
  }
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact)
      return res.render("404.ejs", { message: "Contact Not Found." });
    res.render("update-contact.ejs", { contact });
  } catch (error) {
    res.render("500.ejs", { message: error });
  }
};

export const updateContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.render("404.ejs", { message: "Invalid Id" });
  }
  try {
    const contact = await await Contact.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!contact)
      return res.render("404.ejs", { message: "Contact Not Found." });
    res.redirect("/");
  } catch (error) {
    res.render("500.ejs", { message: error });
  }
};

export const deleteContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.render("404.ejs", { message: "Invalid Id" });
  }
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact)
      return res.render("404.ejs", { message: "Contact Not Found." });
    res.redirect("/");
  } catch (error) {
    res.render("500.ejs", { message: error });
  }
};
