const mongoose = require("mongoose");

// Krijimi i Modelit
const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pages: {type:Number, required: true},
});

const User = mongoose.model("User", UserSchema);

module.exports = User;