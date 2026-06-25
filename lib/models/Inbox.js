const mongoose = require("mongoose");

const InboxSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: true, index: true },
  username: { type: String, required: true },
  domain: { type: String, required: true },
  sessionId: { type: String, required: true },
  ip: { type: String },
  emailCount: { type: Number, default: 0 },
  lastActivity: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true, index: { expires: 0 } },
  active: { type: Boolean, default: true }
}, { timestamps: true });

InboxSchema.index({ address: 1, active: 1 });
InboxSchema.index({ sessionId: 1 });

module.exports = mongoose.models.Inbox || mongoose.model("Inbox", InboxSchema);
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