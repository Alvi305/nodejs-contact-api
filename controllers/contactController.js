const asyncHandler = require("express-async-handler");
const  Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("Req body:", req.body);

    const { name, phone, email } = req.body;

    if (!name || !phone || !email) {
        const err = new Error("Fields missing");
        err.statusCode = 400;
        throw err;
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
    });

    res.setHeader('Location', `${req.protocol}://${req.get('host')}/api/contacts/${contact._id}`);
    res.status(201).json({ contact });
});

//@desc Get contact by ID
//@route GET /api/contacts/:id
//@access public
const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Could not find contact");
    }
    res.status(200).json(contact);
});

//@desc Update contact by ID
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

//@desc Delete contact by ID
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = {
    getContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContact,
};