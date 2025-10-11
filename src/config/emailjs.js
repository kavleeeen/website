// EmailJS Configuration
// You'll need to get these values from your EmailJS account at https://www.emailjs.com/

export const EMAILJS_CONFIG={
  // Your EmailJS service ID (create a service in EmailJS dashboard)
  SERVICE_ID: 'service_your_service_id',

  // Your EmailJS template ID (create a template in EmailJS dashboard)
  TEMPLATE_ID: 'template_your_template_id',

  // Your EmailJS public key (found in EmailJS account settings)
  PUBLIC_KEY: 'your_public_key',

  // Your email address where messages will be sent
  TO_EMAIL: 'kavleen.sabharwal.connect@gmail.com'
};

// Instructions for setup:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create a new email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message
// 4. Get your Public Key from Account > API Keys
// 5. Replace the placeholder values above with your actual values
