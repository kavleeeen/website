# EmailJS Setup Guide

## 📧 How to Configure EmailJS for Your Contact Form

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your email provider
5. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:** New Contact Form Message: {{subject}}

**Content:**
```
Hello Kavleen,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (you'll need this)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** in the API Keys section
3. **Copy the Public Key**

### Step 5: Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id_here',
  TEMPLATE_ID: 'your_actual_template_id_here', 
  PUBLIC_KEY: 'your_actual_public_key_here',
  TO_EMAIL: 'kavleen.sabharwal.connect@gmail.com'
};
```

### Step 6: Test Your Form
1. Start your development server: `npm start`
2. Go to your contact page
3. Fill out and submit the form
4. Check your email (kavleen.sabharwal.connect@gmail.com) for the message

## 🎯 What Happens Now

- When someone fills out your contact form, you'll receive an email at `kavleen.sabharwal.connect@gmail.com`
- The email will include the sender's name, email, subject, and message
- The form will show a success message after sending
- If there's an error, it will show an error message

## 🔒 Security Notes

- EmailJS handles the email sending securely
- Your email credentials are not exposed in the frontend code
- The free tier allows 200 emails per month
- All emails are sent through EmailJS's secure servers

## 🚨 Important

**The contact form will show an error until you complete the EmailJS setup above.** This is intentional to prevent sending emails with placeholder credentials.
