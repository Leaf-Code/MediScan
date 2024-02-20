const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: String,
    fatherName: String,
    motherName: String,
    address: String,
    emergencyContact: Number,
    emergencyContact2: Number,
    image: Buffer,
  },
  {
    timestamps: true,
  }
);

const patientModel = mongoose.model("patients", patientSchema);

module.exports = {
  patientModel,
};


// later work:
// handle duplicate contact