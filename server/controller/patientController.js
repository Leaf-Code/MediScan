const Jimp = require("jimp");
const Patient = require("../models/userModel");
const { Buffer } = require("buffer");

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
    const imageBuffer = req.file.buffer; 

    const patient = new Patient({
      name: name,
      fatherName: fatherName,
      motherName: motherName,
      address: address,
      emergencyContact: eContact,
      emergencyContact2: eContact2,
      image: imageBuffer,
    });

    const newPatient = await patient.save();
    res.status(200).json(newPatient);
  } catch (err) {
    res.status(400).json({ message: `Creating user error: {err}` });
  }
};

const findPatient = async (req,res) =>{

}


module.exports = {
  test,
  createUser,
  findPatient,
};

