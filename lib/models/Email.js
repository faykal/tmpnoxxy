const mongoose = require("mongoose");

const AttachmentSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  size: Number,
  content: Buffer
}, { _id: false });

const EmailSchema = new mongoose.Schema({
  inboxId: { type: mongoose.Schema.Types.ObjectId, ref: "Inbox", index: true },
  emailAddress: { type: String, required: true, index: true },
  from: {
    name: String,
    address: { type: String, required: true }
  },
  to: { type: String, required: true },
  subject: { type: String, default: "(No Subject)" },
  html: { type: String, default: "" },
  text: { type: String, default: "" },
  headers: { type: Map, of: String },
  attachments: [AttachmentSchema],
  messageId: { type: String },
  spamScore: { type: Number, default: 0 },
  read: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false },
  receivedAt: { type: Date, default: Date.now, index: true }
}, { timestamps: true });

EmailSchema.index({ emailAddress: 1, deleted: 1, receivedAt: -1 });
EmailSchema.index({ inboxId: 1, deleted: 1 });

module.exports = mongoose.models.Email || mongoose.model("Email", EmailSchema);
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