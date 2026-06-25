const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  type: { type: String, enum: ["email", "inbox", "error", "abuse", "admin"], required: true },
  action: { type: String, required: true },
  ip: String,
  target: String,
  meta: { type: mongoose.Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now, expires: 604800 }
});

LogSchema.index({ type: 1, createdAt: -1 });

module.exports = mongoose.models.Log || mongoose.model("Log", LogSchema);
/*
    ••JANGAN HAPUS INI••
SCRIPT BY © VYNAA VALERIE 
•• recode kasih credits 
•• contacts: (6282389924037)
•• instagram: @vynaa_valerie 
•• (github.com/VynaaValerie) 


Aturan:
1. Dilarang memperjualbelikan script ini.
2. Hak cipta milik Vynaa Valerie.

“Dan janganlah kamu makan harta di antara kamu dengan jalan yang batil, dan janganlah kamu membunuh dirimu sendiri. Sesungguhnya Allah adalah Maha Penyayang kepadamu.” (QS. Al-Baqarah: 188)
*/