//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: "FAAAAAAAAAAA" });
};

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res, next) => {
    console.log("Req body:", req.body);

    const {name, phone, email} = req.body;

    if (!name || !phone || !email) {
        const err = new Error("Fields missing");
        err.statusCode = 400;
        return next(err);
    }


    res.status(201).json({ message: "Created Contact" });
};

//@desc Get contact by ID
//@route GET /api/contacts/:id
//@access public
const getContactById = (req, res) => {
    res.status(200).json({ message: `Get Contact for ${req.params.id}` });
};

//@desc Update contact by ID
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};

//@desc Delete contact by ID
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
};

module.exports = {
    getContact,
    createContact,
    getContactById,
    updateContact,
    deleteContact,
};