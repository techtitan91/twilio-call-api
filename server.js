const express = require('express');
const dotenv = require('dotenv');
const callRoutes = require('./routes/callRoutes');

require('dotenv').config();
const app = express();
app.use(express.json());

app.use('/api/call', callRoutes);
console.log("SID:", process.env.TWILIO_ACCOUNT_SID);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
