const express = require("express");
const router = express.Router();
const axios = require("axios");


axios.defaults.baseURL = "https://api.rajaongkir.com/starter";
axios.defaults.headers.common["key"] = "2fc4d166894cd9db03ab428585509307";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";


router.get("/provinsi", (req, res) => {
  axios
    .get("/province")
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
});


router.get("/kota/:provId", (req, res) => {
  const id = req.params.provId;
  axios
    .get(`/city?province=${id}`)
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
});


router.get("/ongkos/:asal/:tujuan/:berat/:kurir", (req, res) => {
  const param = req.params;
  axios
    .post("/cost", {
      origin: param.asal,
      destination: param.tujuan,
      weight: param.berat,
      courier: param.kurir,
    })
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
});

module.exports = router;
