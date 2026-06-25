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
module.exports = {
  app: {
    name: "NAGETHA",
    version: "1.0.0",
    secret: process.env.JWT_SECRET || "nagetha_secret_key_2024"
  },

  mongodb: {
    uri: process.env.MONGODB_URI || "mongodb+srv://Vercel-Admin-tempmail:IWaNwMRaVfvLNSk7@tempmail.7vin9l1.mongodb.net/?retryWrites=true&w=majority"
  },

  cloudflare: {
    workerEndpoint: "/api/inbound-email",
    workerSecret: process.env.WORKER_SECRET || ""
  },

  domains: [
    "nageetha.web.id"
  ],

  inbox: {
    expirationHours: 24,
    maxEmailsPerInbox: 1000,
    maxInboxPerIP: 50
  },

  rateLimit: {
    windowMs: 15 * 60 * 1000,
    max: 100
  },

  admin: {
    username: process.env.ADMIN_USER || "admin",
    password: process.env.ADMIN_PASS || "nagetha_admin_2026"
  }
};
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
