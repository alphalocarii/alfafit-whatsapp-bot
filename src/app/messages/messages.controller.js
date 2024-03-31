const express = require("express");
const initWhatsAppClient = require("../../clients/whatsapp-client");
const MessagesService = require("./messages.service");

const client = initWhatsAppClient();
const messagesService = new MessagesService({ whatsAppClient: client });

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome Home" });
});

router.post("/send/text", (req, res) => {
  const { number, message } = req.body;
  messagesService
    .sendTextMessage(number, message)
    .then((response) => res.status(200).json({ success: true, response }))
    .catch((error) =>
      res.status(500).json({ success: false, error: error.toString() })
    );
});

module.exports = router;
