const Form = require("../models/Form");

// @desc    Get all forms
// @route   GET /api/forms
const getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single form by ID
// @route   GET /api/forms/:id
const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new form
// @route   POST /api/forms
const createForm = async (req, res) => {
  try {
    const { title, fields } = req.body;
    const newForm = new Form({ title, fields });
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update form
// @route   PUT /api/forms/:id
const updateForm = async (req, res) => {
  try {
    const { title, fields } = req.body;
    const updatedForm = await Form.findByIdAndUpdate(
      req.params.id,
      { title, fields },
      { new: true, runValidators: true } // Ensure updated document is returned
    );

    if (!updatedForm) {
      return res.status(404).json({ message: "Form not found" });
    }

    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// @desc    Delete a form
// @route   DELETE /api/forms/:id
const deleteForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.status(200).json({ message: "Form deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getForms, getFormById, createForm, updateForm, deleteForm };
