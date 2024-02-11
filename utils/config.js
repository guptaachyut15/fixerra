require("dotenv").config();

exports.MONGOCONNECTIONSTRING = process.env.MONGOCONNECTIONSTRING;
exports.PORT = process.env.PORT || 8080;
