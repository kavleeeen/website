// Complete Food Bot API Service
// Implements all endpoints from the API reference

const API_BASE_URL=process.env.REACT_APP_API_BASE_URL||'https://food-bot-backend-wiyrvumxlq-el.a.run.app';

class FoodBotAPI {
  constructor() {
    this.baseURL=API_BASE_URL;
    this.logoutCallbacks=[];
  }

  // Helper method to get auth token
  getAuthToken() {
    return localStorage.getItem('authToken');
  }

  // Helper method for API calls with authentication
  async apiCall(endpoint,options={}) {
    const token=this.getAuthToken();

    if(!token&&endpoint!=='/api/register'&&endpoint!=='/api/login'&&endpoint!=='/api/health') {
      throw new Error('No authentication token found. Please log in.');
    }

    const url=`${this.baseURL}${endpoint}`;
    const config={
      headers: {
        'Content-Type': 'application/json',
        ...(token&&{'Authorization': `Bearer ${token}`}),
        ...options.headers
      },
      ...options
    };

    try {
      const response=await fetch(url,config);
      const data=await response.json();

      if(!response.ok) {
        // Handle specific error cases
        if(response.status===401) {
          // Token expired or invalid - trigger autologout
          this.handleAutoLogout();
          throw new Error('Session expired. Please log in again.');
        }
        throw new Error(data.error||`API request failed with status ${response.status}`);
      }

      return data;
    } catch(error) {
      if(error.name==='TypeError'&&error.message.includes('fetch')) {
        throw new Error('Network error. Please check your connection.');
      }
      throw error;
    }
  }

  // 1. User Registration
  async registerUser(userData) {
    const {username,email,password}=userData;

    if(!username||!email||!password) {
      throw new Error('Missing required fields: username, email, password');
    }

    try {
      const response=await this.apiCall('/api/register',{
        method: 'POST',
        body: JSON.stringify({username,email,password})
      });

      return {
        success: true,
        message: response.message,
        user: response.user
      };
    } catch(error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // 2. User Login
  async loginUser(credentials) {
    const {email,password}=credentials;

    if(!email||!password) {
      throw new Error('Missing email or password');
    }

    try {
      const response=await this.apiCall('/api/login',{
        method: 'POST',
        body: JSON.stringify({email,password})
      });

      // Store token and user data
      localStorage.setItem('authToken',response.token);
      localStorage.setItem('user',JSON.stringify(response.user));

      return {
        success: true,
        message: response.message,
        user: response.user,
        token: response.token,
        expires_in: response.expires_in
      };
    } catch(error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // 3. Get User Profile
  async getUserProfile() {
    try {
      const response=await this.apiCall('/api/profile',{
        method: 'GET'
      });

      return {
        success: true,
        user: response.user
      };
    } catch(error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // 4. AI Chat
  async sendMessage(message,sessionId=null) {
    if(!message||message.trim()==='') {
      throw new Error('Message cannot be empty');
    }

    try {
      const requestBody={message: message.trim()};
      if(sessionId) {
        requestBody.session_id=sessionId;
        console.log("Sending message with session ID:",sessionId);
      } else {
        console.log("Sending message without session ID (will use default)");
      }

      const response=await this.apiCall('/api/chat',{
        method: 'POST',
        body: JSON.stringify(requestBody)
      });

      return {
        success: true,
        message: response.message,
        user_message: response.user_message,
        session_id: response.session_id,
        timestamp: response.timestamp
      };
    } catch(error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // 5. Get User Preferences
  async getPreferences() {
    try {
      const response=await this.apiCall('/api/preferences',{
        method: 'GET'
      });

      return {
        success: true,
        preferences: response.preferences,
        timestamp: response.timestamp
      };
    } catch(error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // 6. Update User Preferences
  async updatePreferences(preferences) {
    if(!preferences) {
      throw new Error('Preferences object is required');
    }

    try {
      const response=await this.apiCall('/api/preferences',{
        method: 'PUT',
        body: JSON.stringify({preferences})
      });

      return {
        success: true,
        message: response.message,
        preferences: response.preferences,
        timestamp: response.timestamp
      };
    } catch(error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // 7. Session Management

  // Create New Session
  async createSession(sessionName=null) {
    try {
      const requestBody={};
      if(sessionName) {
        requestBody.session_name=sessionName;
      }

      const response=await this.apiCall('/api/sessions',{
        method: 'POST',
        body: JSON.stringify(requestBody)
      });

      console.log("API Response - Session created:",{
        session_id: response.session_id,
        session_name: response.session_name,
        created_at: response.created_at
      });

      return {
        success: true,
        session_id: response.session_id,
        session_name: response.session_name,
        created_at: response.created_at
      };
    } catch(error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get User Sessions
  async getSessions() {
    try {
      const response=await this.apiCall('/api/sessions',{
        method: 'GET'
      });

      return {
        success: true,
        sessions: response.sessions
      };
    } catch(error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get Session History
  async getSessionHistory(sessionId) {
    if(!sessionId) {
      throw new Error('Session ID is required');
    }

    try {
      const response=await this.apiCall(`/api/sessions/${sessionId}/history`,{
        method: 'GET'
      });

      return {
        success: true,
        history: response.history
      };
    } catch(error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Delete Session
  async deleteSession(sessionId) {
    if(!sessionId) {
      throw new Error('Session ID is required');
    }

    try {
      const response=await this.apiCall(`/api/sessions/${sessionId}`,{
        method: 'DELETE'
      });

      return {
        success: true,
        message: response.message
      };
    } catch(error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Clear Session History
  async clearSessionHistory(sessionId) {
    if(!sessionId) {
      throw new Error('Session ID is required');
    }

    try {
      const response=await this.apiCall(`/api/sessions/${sessionId}/history`,{
        method: 'DELETE'
      });

      return {
        success: true,
        message: response.message
      };
    } catch(error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // 8. Health Check
  async healthCheck() {
    try {
      const response=await fetch(`${this.baseURL}/api/health`);
      const data=await response.json();

      if(!response.ok) {
        // Handle 401 for health check too
        if(response.status===401) {
          this.handleAutoLogout();
          throw new Error('Session expired. Please log in again.');
        }
        throw new Error(data.error||'Health check failed');
      }

      return {
        success: true,
        status: data.status,
        message: data.message,
        timestamp: data.timestamp,
        database: data.database,
        users_count: data.users_count
      };
    } catch(error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Utility Methods
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.notifyLogoutCallbacks();
  }

  // Handle automatic logout on 401
  handleAutoLogout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.notifyLogoutCallbacks();

    // Show notification to user
    this.showLogoutNotification();
  }

  // Register logout callback
  onLogout(callback) {
    this.logoutCallbacks.push(callback);
  }

  // Remove logout callback
  offLogout(callback) {
    this.logoutCallbacks=this.logoutCallbacks.filter(cb => cb!==callback);
  }

  // Notify all logout callbacks
  notifyLogoutCallbacks() {
    this.logoutCallbacks.forEach(callback => {
      try {
        callback();
      } catch(error) {
        console.error('Error in logout callback:',error);
      }
    });
  }

  // Show logout notification
  showLogoutNotification() {
    // Create a notification element
    const notification=document.createElement('div');
    notification.style.cssText=`
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ef4444;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      max-width: 300px;
      animation: slideInRight 0.3s ease-out;
    `;

    notification.innerHTML=`
      <div style="display: flex; align-items: center; gap: 8px;">
        <span>⚠️</span>
        <span>Session expired. Please log in again.</span>
      </div>
    `;

    // Add animation styles
    const style=document.createElement('style');
    style.textContent=`
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if(notification.parentNode) {
        notification.style.animation='slideInRight 0.3s ease-out reverse';
        setTimeout(() => {
          if(notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        },300);
      }
    },5000);
  }

  isAuthenticated() {
    const token=this.getAuthToken();
    return !!token;
  }

  getCurrentUser() {
    const user=localStorage.getItem('user');
    return user? JSON.parse(user):null;
  }

  // Validate preferences object structure
  validatePreferences(preferences) {
    const validFields=[
      'restrictions',
      'allergies',
      'cuisine_preferences',
      'likes',
      'dislikes',
      'custom'
    ];

    if(typeof preferences!=='object'||preferences===null) {
      return false;
    }

    // Check if all fields are arrays
    return validFields.every(field =>
      !preferences.hasOwnProperty(field)||Array.isArray(preferences[field])
    );
  }

  // Create empty preferences object
  createEmptyPreferences() {
    return {
      restrictions: [],
      allergies: [],
      cuisine_preferences: [],
      likes: [],
      dislikes: [],
      custom: []
    };
  }
}

// Create and export a singleton instance
const foodBotAPI=new FoodBotAPI();
export default foodBotAPI;
