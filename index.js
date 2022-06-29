const express = require("express");
const cors = require("cors");
const app = express();

// Router
const apiRouter = require("./routes/api");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Definisikan Router pada path "/api"
app.use("/api", apiRouter);

// Home
app.get("/", function (req, res) {
  res.send({
    message: "Hello API nya Bisa",
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
