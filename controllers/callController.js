const client = require('../utils/twilioClient');

const triggerCall = async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    const call = await client.calls.create({
      twiml: '<Response><Say>Hello, this is a reminder from your healthcare provider to confirm your medications for the day. Please confirm if you have taken your Aspirin, Cardivol, and Metformin today.</Say></Response>',
      to: phoneNumber,
      from: process.env.TWILIO_PHONE_NUMBER
    });
    console.log("Call SID:", call.sid, "Status:", call.status);
    res.json({ success: true, sid: call.sid });
  } catch (error) {
    console.error("Error triggering call:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { triggerCall };
