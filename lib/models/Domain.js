const mongoose = require("mongoose");

const DomainSchema = new mongoose.Schema({
  domain: { type: String, required: true, unique: true },
  active: { type: Boolean, default: true },
  priority: { type: Number, default: 0 },
  inboxCount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.models.Domain || mongoose.model("Domain", DomainSchema);
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