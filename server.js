require('dotenv').config();

// Access environment variables
const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true',
};

if(process.env.IS_KALVIAN === 'true') {
    console.log("True")
}else{
    console.log("False")
}

// Export the config object
module.exports = config;

// Log the variables (Optional for testing)
console.log(config);