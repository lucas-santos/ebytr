const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("okay");
});

app.listen(3000, () => {
  console.log("Escutando na porta 3000");
});
