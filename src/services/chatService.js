// Chat Service for Food Bot API Integration
// Updated to use the comprehensive FoodBotAPI service

import foodBotAPI from './foodBotApi';

class ChatService {
  constructor() {
    this.api=foodBotAPI;
  }

  // Send a message to the AI chat
  async sendMessage(message,sessionId=null) {
    return await this.api.sendMessage(message,sessionId);
  }

  // Get user profile (for verification)
  async getUserProfile() {
    return await this.api.getUserProfile();
  }

  // Health check
  async healthCheck() {
    return await this.api.healthCheck();
  }

  // Get user preferences
  async getPreferences() {
    return await this.api.getPreferences();
  }

  // Update user preferences
  async updatePreferences(preferences) {
    return await this.api.updatePreferences(preferences);
  }

  // Session Management Methods
  async createSession(sessionName) {
    return await this.api.createSession(sessionName);
  }

  async getSessions() {
    return await this.api.getSessions();
  }

  async getSessionHistory(sessionId) {
    return await this.api.getSessionHistory(sessionId);
  }

  async deleteSession(sessionId) {
    return await this.api.deleteSession(sessionId);
  }

  async clearSessionHistory(sessionId) {
    return await this.api.clearSessionHistory(sessionId);
  }

  // Utility methods
  logout() {
    return this.api.logout();
  }

  isAuthenticated() {
    return this.api.isAuthenticated();
  }

  getCurrentUser() {
    return this.api.getCurrentUser();
  }

  // Logout callback management
  onLogout(callback) {
    return this.api.onLogout(callback);
  }

  offLogout(callback) {
    return this.api.offLogout(callback);
  }
}

// Create and export a singleton instance
const chatService=new ChatService();
export default chatService;
