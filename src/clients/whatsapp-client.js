const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

let clientInstance = null;

function initWhatsAppClient() {
  if (!clientInstance) {
    clientInstance = new Client({
      authStrategy: new LocalAuth(),
    });

    clientInstance.on("qr", (qr) => {
      qrcode.generate(qr, { small: true });
    });

    clientInstance.initialize().catch(console.error);
  }

  return clientInstance;
}

module.exports = initWhatsAppClient;
