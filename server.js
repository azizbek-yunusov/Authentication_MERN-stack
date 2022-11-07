const express = require("express");
const connectDB = require("./config/db");
const bcrypt = require("bcrypt");
require("dotenv").config();
// const authRoutes = require("./routes/authRoutes")
const cors = require("cors");
const UserModel = require("./models/UserModel");

connectDB();

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Pleace fill all the feild",
    });
  }
  // controll
  UserModel.findOne({ email }).then((savedUser) => {
    if (savedUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    bcrypt.hash(password, 10).then((hashp) => {
      // new User
      const user = new UserModel({
        name,
        email,
        password: hashp,
      });
      user
        .save()
        .then((user) => {
          res.json({
            message: "User created successfully",
            user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      message: "Pleace fill all the feild",
    });
  }
  UserModel.findOne({ email })
  .then((user) => {
    if (!user) {
      return res.status(400).json({ error: "user does not exist" });
    }
    bcrypt.compare(password, user.password)
      .then((isMatch) => {
        if (!isMatch) {
          return res.status(400).json({ error: "Invalid credentials" });
        } else {
          res.json({
            message: "Login succes",
            user,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`Server listening on port: ${PORT} http://localhost:${PORT}`)
);
