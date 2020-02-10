if (process.env.NODE_ENV !== "production") require("../../secrets");

const config = {};

config.accountSid = process.env.TWILIO_ACCOUNT_SID;
config.authToken = process.env.TWILIO_AUTH_TOKEN;
config.sendingNumber = process.env.TWILIO_NUMBER;

var requiredConfig = [
  config.accountSid,
  config.authToken,
  config.sendingNumber
];
var isConfigured = requiredConfig.every(function(configValue) {
  return configValue || false;
});

if (!isConfigured) {
  var errorMessage =
    "TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_NUMBER must be set.";

  throw new Error(errorMessage);
}

module.exports = config;
