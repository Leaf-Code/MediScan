const express = require("express");
const router = express.Router();
const cors = require("cors");
const { model } = require("mongoose");
const multer = require("multer");
const upload = multer();

const {
  test,
  createUser,
  findPatient,
} = require("../controller/patientController");

// middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/test", test);
router.post("/createUser", upload.single('image'), createUser);
router.post("/findPatient", upload.single("image"), findPatient);

module.exports = router;

