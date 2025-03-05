const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema(
  {
    formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form", required: true },
    responses: [
      {
        fieldId: { type: mongoose.Schema.Types.ObjectId, required: true },
        value: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Response", ResponseSchema);
