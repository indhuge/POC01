const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const { addContactToList } = require("./utils/mailChimp");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.post("/api/addContact", async (req, res) => {
    const { email } = req.body;

    try {
      const response = await addContactToList(email);
      res.status(201).json({ id: response.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
