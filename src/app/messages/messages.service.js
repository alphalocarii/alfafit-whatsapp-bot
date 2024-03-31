class MessagesService {
  constructor({ whatsAppClient }) {
    this.whatsAppClient = whatsAppClient;
  }

  async sendTextMessage(number, message) {
    number = `57${number}@c.us`;
    return this.whatsAppClient.sendMessage(number, message);
  }
}

module.exports = MessagesService;
