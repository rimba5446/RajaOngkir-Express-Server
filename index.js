const express = require("express");
const cors = require("cors");
const app = express();


const apiRouter = require("./routes/api");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api", apiRouter);


app.get("/", function (req, res) {
  res.send({
    message: "Hello API nya Bisa",
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
