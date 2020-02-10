const config = require("./config");
const twilio = require("twilio");

module.exports = async function(to, message) {
  const client = twilio(config.accountSid, config.authToken);

  try {
    let data = await client.api.messages.create({
      body: message,
      to: to,
      from: config.sendingNumber
    });
    console.log(`twilio: SMS sent to ${to}`);
  } catch (e) {
    console.log(`twilio: Error - ${e}`);
  }
};
