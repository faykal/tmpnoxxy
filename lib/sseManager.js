const clients = new Map();

function addClient(address, res) {
  if (!clients.has(address)) {
    clients.set(address, new Set());
  }
  clients.get(address).add(res);
}

function removeClient(address, res) {
  if (clients.has(address)) {
    clients.get(address).delete(res);
    if (clients.get(address).size === 0) {
      clients.delete(address);
    }
  }
}

function sendToInbox(address, event, data) {
  if (!clients.has(address)) return;
  const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  clients.get(address).forEach(res => {
    try {
      res.write(payload);
    } catch (_) {
      clients.get(address).delete(res);
    }
  });
}

function broadcastAll(event, data) {
  const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  clients.forEach(set => {
    set.forEach(res => {
      try { res.write(payload); } catch (_) {}
    });
  });
}

module.exports = { addClient, removeClient, sendToInbox, broadcastAll };
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