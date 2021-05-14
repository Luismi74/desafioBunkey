const mongoose = require("mongoose");

const Usuario = mongoose.model(
  "Usuario",
  new mongoose.Schema({
    username: String, 
    password: String,
    rol: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
      }
    ]
  })
);

module.exports = Usuario;
