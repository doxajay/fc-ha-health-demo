const express = require("express");
const app = express();

app.get("/health", (req, res) => res.status(200).send("ok"));
app.get("/", (req, res) => res.send("Hello from region app"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
