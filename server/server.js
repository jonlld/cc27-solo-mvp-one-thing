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

// USERS
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
app.post("/things/save", async (req, res) => {
  const { thing, id } = req.body;

  const payload = {
    description: thing,
    user_id: id,
  };

  const newEntry = await thingsModel.create(payload);
  res.status(200).send(JSON.stringify(newEntry));
});

app.get("/things/view/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const entries = await thingsModel.getByID(id);

  const formattedEntries = entries.map((entry) => {
    const date = new Date(entry.date);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dateString = `${day}/${month}/${year}`;

    return { ...entry, date: dateString };
  });

  res.status(200).send(JSON.stringify(formattedEntries));
});

// ***** LISTEN ********

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
