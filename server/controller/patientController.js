const Jimp = require("jimp");
const Patient = require("../models/userModel");

const test = async (req, res) => {
  res.send("Its working");
};

const createUser = async (req, res) => {
  try {
    const name = req.body.name;
    const fatherName = req.body.fatherName;
    const motherName = req.body.motherName;
    const address = req.body.address;
    const eContact = req.body.emergencyContact;
    const eContact2 = req.body.emergencyContact2;
    const base64String = req.body.image;

    const patient = new Patient({
      name: name,
      fatherName: fatherName,
      motherName: motherName,
      address: address,
      emergencyContact: eContact,
      emergencyContact2: eContact2,
      image: base64String,
    });

    const newPatient = await patient.save();
    res.status(200).json(newPatient);
  } catch (err) {
    res.status(400).json({ message: `Creating user error: {err}` });
  }
};

module.exports = {
  test,
  createUser,
};

