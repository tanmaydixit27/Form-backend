const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    fields: [
      {
        type: { type: String, enum: ["email", "text", "password", "number", "date"], required: true },
        label: { type: String, required: true },
        placeholder: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", FormSchema);
