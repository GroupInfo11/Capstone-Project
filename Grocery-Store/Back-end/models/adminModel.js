const mongoose = require("mongoose");

var adminSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  confirmPassword: String,
  profilePhoto: {
    data: Buffer,
    contentType: String,
  },
  address: String,
  card: String,
  created_at: { type: Date, default: Date.now },
  token: { type: String },
});

module.exports = mongoose.model("Admin", adminSchema);
