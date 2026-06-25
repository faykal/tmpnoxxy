const connectDB = require("../../lib/mongodb");
const Email = require("../../lib/models/Email");
const Inbox = require("../../lib/models/Inbox");
const { successResponse, errorResponse } = require("../../lib/utils");
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
module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") return res.status(200).end();
  await connectDB();

  const { id } = req.query;
  if (!id) return errorResponse(res, "Email ID required");

  if (req.method === "GET") {
    try {
      const email = await Email.findOne({ _id: id, deleted: false });
      if (!email) return errorResponse(res, "Email not found", 404);
      if (!email.read) {
        await Email.findByIdAndUpdate(id, { read: true });
        email.read = true;
      }
      return successResponse(res, { email });
    } catch (err) {
      return errorResponse(res, "Failed to fetch email", 500);
    }
  }

  if (req.method === "DELETE") {
    try {
      const email = await Email.findOneAndUpdate(
        { _id: id, deleted: false },
        { deleted: true },
        { new: true }
      );
      if (!email) return errorResponse(res, "Email not found", 404);
      if (email.inboxId) {
        await Inbox.findByIdAndUpdate(email.inboxId, { $inc: { emailCount: -1 } });
      }
      return successResponse(res, { deleted: true });
    } catch (err) {
      return errorResponse(res, "Failed to delete email", 500);
    }
  }

  return errorResponse(res, "Method not allowed", 405);
};
