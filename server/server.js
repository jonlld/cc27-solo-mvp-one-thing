const express = require("express");
const cors = require("cors");
const usersModel = require("./users/users.model");
const thingsModel = require("./things/things.model");

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
app.post("/users/login", async (req, res) => {
  const { name, pswd } = req.body;

  const userData = await usersModel.login(name, pswd);

  if (userData.length === 0) {
    res.send(JSON.stringify("Invalid credentials"));
  } else {
    res.send(userData[0]);
  }
});

// THINGS

// add entry to db
app.post("/things/save", async (req, res) => {
  const { thing, id } = req.body;
  // console.log("thing in server: ", thing); // string - ok
  // console.log("id in server: ", id); // string - ok

  const payload = {
    description: thing,
    user_id: id,
  };

  const newEntry = await thingsModel.create(payload);
  console.log("added to db: ", newEntry);
});

// ***** LISTEN ********

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
