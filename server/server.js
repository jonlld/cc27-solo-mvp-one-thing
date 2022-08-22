const express = require("express");
const cors = require("cors");
// require("dotenv").config();

// for production or dev ports
const PORT = process.env.PORT || 3030;

const app = express();

// ***** MIDDLEWARE *****

app.use(cors()); // for front and back on localhost
app.use(express.json()); // JSON
app.use(express.urlencoded({ extended: true })); // form-encoded

// ***** ROUTES *********

// probably don't need controller / model here as small - keep logic here for now!

// USERS

// login
app.post("/users/login", (req, res) => {
  const { name, pswd } = req.body;
});

// THINGS

// thing
app.get("/things", () => {}); // get data on active thing

// ***** LISTEN ********

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  // console.log(process.env);
});
