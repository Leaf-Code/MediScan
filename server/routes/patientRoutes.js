const express = require("express");
const router = express.Router();
const cors = require("cors");
const { model } = require("mongoose");

const {
    test,
    createUser
} = require("../controller/patientController");

// middleware
router.use(
  cors({
    Credential: true,
    origin: "http://localhost:5173",
  })
);

router.get("/test", test);
router.post("/createUser", createUser);

module.exports = router;
