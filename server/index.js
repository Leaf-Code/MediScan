const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = 8000;

// mongoose
const mongoose = require("mongoose");
mongoose
  .connect(process.env.Mongo_URL)
  .then(() => console.log(`MongoDB connected 🧠`))
  .catch((err) => console.log(`Database not connected`, err));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", require("./routes/patientRoutes"));

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});

