# Google Analytics Setup Guide

## Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create a new property for your website
5. Get your Measurement ID (format: G-XXXXXXXXXX)

## Step 2: Update Tracking Configuration
1. Open `src/data/tracking.js`
2. Replace the empty string with your Measurement ID:
   ```javascript
   export const TRACKING_ID = "G-XXXXXXXXXX";
   ```

## Step 3: Verify Setup
1. Start your development server: `npm start`
2. Open your website in a browser
3. Check the Network tab in Developer Tools for analytics requests
4. Visit your Google Analytics dashboard to see real-time data

## Additional Analytics Features
- Page views are automatically tracked
- Custom events can be added using ReactGA.event()
- User interactions can be tracked with custom event handlers

## Privacy Considerations
- Ensure your privacy policy mentions analytics usage
- Consider implementing cookie consent if required by your jurisdiction
- You can disable analytics in development by leaving TRACKING_ID empty



