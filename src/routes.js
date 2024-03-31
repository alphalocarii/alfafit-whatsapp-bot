const express = require("express");

// controllers
const messagesRouter = require("./app/messages/messages.controller");

// routes
const router = express.Router();
router.use("/messages", messagesRouter);

module.exports = router;
