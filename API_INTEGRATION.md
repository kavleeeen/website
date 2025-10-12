# 🚀 Food Bot API Integration

## Overview
Complete integration with the Food Bot API as specified in the API reference. All endpoints are implemented and tested.

## 📁 Files Structure

```
src/services/
├── foodBotApi.js          # Complete API service implementation
├── chatService.js         # Updated to use foodBotApi
└── apiTest.js            # Comprehensive test suite
```

## 🔧 API Service Implementation

### FoodBotAPI Class
Complete implementation of all API endpoints:

- ✅ **User Registration** (`POST /api/register`)
- ✅ **User Login** (`POST /api/login`) 
- ✅ **Get User Profile** (`GET /api/profile`)
- ✅ **AI Chat** (`POST /api/chat`)
- ✅ **Get Preferences** (`GET /api/preferences`)
- ✅ **Update Preferences** (`PUT /api/preferences`)
- ✅ **Health Check** (`GET /api/health`)

### Key Features

**1. Authentication Management**
```javascript
// Automatic token storage and retrieval
const result = await foodBotAPI.loginUser({ email, password });
// Token automatically stored in localStorage

// Check authentication status
const isAuth = foodBotAPI.isAuthenticated();

// Get current user
const user = foodBotAPI.getCurrentUser();
```

**2. Error Handling**
```javascript
// Consistent error response format
const result = await foodBotAPI.sendMessage("Hello");
if (!result.success) {
  console.error(result.error);
}
```

**3. Preferences Management**
```javascript
// Get preferences
const prefs = await foodBotAPI.getPreferences();

// Update preferences
const result = await foodBotAPI.updatePreferences({
  restrictions: ['vegetarian'],
  allergies: ['nuts'],
  cuisine_preferences: ['italian']
});
```

## 🧪 Testing

### Run API Tests
```javascript
// In browser console
import APITest from './services/apiTest';
const tester = new APITest();
await tester.runAllTests();
```

### Test Coverage
- ✅ Health Check
- ✅ User Registration
- ✅ User Login
- ✅ Get User Profile
- ✅ AI Chat
- ✅ Get/Update Preferences
- ✅ Logout

## 🔄 Integration Points

### 1. AuthForm Component
```javascript
// Updated to use foodBotAPI
import foodBotAPI from "../../services/foodBotApi";

// Registration
const result = await foodBotAPI.registerUser({
  username, email, password
});

// Login
const result = await foodBotAPI.loginUser({
  email, password
});
```

### 2. ChatInterface Component
```javascript
// Updated to use new API response format
const response = await chatService.sendMessage(inputMessage);
if (response.success) {
  // Use response.message instead of response.data.message
  // Use response.timestamp for proper timestamps
}
```

### 3. ChatService
```javascript
// Simplified to use foodBotAPI
import foodBotAPI from './foodBotApi';

class ChatService {
  constructor() {
    this.api = foodBotAPI;
  }
  
  async sendMessage(message) {
    return await this.api.sendMessage(message);
  }
}
```

## 📊 API Response Formats

### Success Response
```javascript
{
  success: true,
  message: "Response message",
  data: { /* response data */ }
}
```

### Error Response
```javascript
{
  success: false,
  error: "Error message"
}
```

### Chat Response
```javascript
{
  success: true,
  message: "AI response text",
  user_message: "User's original message",
  timestamp: "2025-10-11T15:53:45.506567"
}
```

### Preferences Response
```javascript
{
  success: true,
  preferences: {
    restrictions: ["vegetarian"],
    allergies: ["nuts"],
    cuisine_preferences: ["italian"],
    likes: ["pasta"],
    dislikes: ["mushrooms"],
    custom: ["prefer warm meals"]
  },
  timestamp: "2025-10-11T15:53:48.088217"
}
```

## 🚀 Usage Examples

### Complete User Flow
```javascript
import foodBotAPI from './services/foodBotApi';

// 1. Register user
const registerResult = await foodBotAPI.registerUser({
  username: 'testuser',
  email: 'test@example.com',
  password: 'password123'
});

// 2. Login
const loginResult = await foodBotAPI.loginUser({
  email: 'test@example.com',
  password: 'password123'
});

// 3. Start chat
const chatResult = await foodBotAPI.sendMessage("I'm hungry!");

// 4. Update preferences
const prefResult = await foodBotAPI.updatePreferences({
  restrictions: ['vegetarian'],
  allergies: ['nuts']
});

// 5. Get recommendations
const recResult = await foodBotAPI.sendMessage("What should I cook?");
```

## 🔧 Configuration

### Environment Variables
```bash
# .env
REACT_APP_API_BASE_URL=https://food-bot-backend-gwvsmxazbq-el.a.run.app
```

### Default Configuration
- **Base URL**: `https://food-bot-backend-gwvsmxazbq-el.a.run.app`
- **Token Storage**: `localStorage`
- **Auto-logout**: On 401 responses
- **Error Handling**: Comprehensive with user-friendly messages

## 📝 Notes

### Authentication
- JWT tokens are automatically stored in localStorage
- Tokens are included in all authenticated requests
- Auto-logout on token expiration (401 responses)

### Error Handling
- Network errors are caught and converted to user-friendly messages
- API errors are properly formatted and displayed
- Consistent error response structure across all endpoints

### Preferences
- All preference fields are arrays of strings
- Empty preferences return `null` instead of empty object
- Validation ensures proper data structure

### Chat Behavior
- AI automatically collects missing preferences
- Supports "no preferences" responses
- Maintains conversation context
- Provides food recommendations based on preferences

## ✅ Verification

All API endpoints are fully implemented and tested according to the provided API reference. The integration maintains backward compatibility while providing enhanced functionality and error handling.

### Test Results
Run the test suite to verify all endpoints:
```javascript
const tester = new APITest();
await tester.runAllTests();
```

Expected output: 100% test pass rate with all endpoints functioning correctly.
