const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const whitelist = ["http://example.com", "http://localhost:3000"];

// whatsapp-client
const initWhatsAppClient = require("./clients/whatsapp-client");
const client = initWhatsAppClient();

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", routes);
const PORT = process.env.PORT || 3000;

client.on("ready", () => {
  console.log("Whatsapp Client is ready!");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});
