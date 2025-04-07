
### 1. Clone the repository

A simple Node.js-based REST API that integrates with Twilio to make outbound voice calls, play a message, and handle basic user input (DTMF tones). Built as part of an internship project assignment.


```bash
git clone https://github.com/yourusername/twilio-call-api.git
cd twilio-call-api
```

Then to install dependencies, run:
```
npm install
```

### 2. Set up environment variables

Create a .env file in the root and add:

TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_verified_twilio_number

### 3. Run the application

node server.js

Server runs at: http://localhost:3000

### 4. Trigger a call

Trigger a Call by sending a POST request to http://localhost:3000/api/call/trigger with a JSON body containing the phone number to call:

```json
{
  "phoneNumber": "+1234567890"
}
```

### 5. Handle DTMF input

The API will handle DTMF input from the user and return a response based on the input.

### 6. View Call SID

After triggering a call, you can view the Call SID in the console output.

### 7. View Call SID

After triggering a call, you can view the Call SID in the console output.

