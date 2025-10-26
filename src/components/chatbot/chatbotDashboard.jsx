import React,{useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt,faUser,faRobot,faUtensils} from "@fortawesome/free-solid-svg-icons";

import ChatInterface from "./chatInterface";
import chatService from "../../services/chatService";
import "./styles/chatbotDashboard-1.css";

const ChatbotDashboard=({user,onLogout}) => {
  const [isChatbotOpen,setIsChatbotOpen]=useState(false);
  const [chatbotSessionId,setChatbotSessionId]=useState(null);

  const handleLogout=() => {
    onLogout();
  };

  const handleOpenChatbot=async () => {
    setIsChatbotOpen(true);

    // Create a new session EVERY TIME the chatbot modal is opened
    try {
      console.log("Creating new session for chatbot...");
      const result=await chatService.createSession("Chat Session");
      if(result.success) {
        console.log("✅ Created new session with ID:",result.session_id);
        setChatbotSessionId(result.session_id);
      } else {
        console.error("❌ Failed to create session:",result.error);
        setChatbotSessionId(null);
      }
    } catch(error) {
      console.error("❌ Failed to create session:",error);
      setChatbotSessionId(null);
    }
  };

  const handleCloseChatbot=() => {
    setIsChatbotOpen(false);
    // Clear session ID when modal is closed
    // This ensures a fresh session is created on next open
    console.log("Closing chatbot modal, clearing session ID");
    setChatbotSessionId(null);
  };

  return (
    <div className="chatbot-dashboard">
      <div className="dashboard-header-section">
        <div className="user-info">
          <div className="user-avatar">
            <FontAwesomeIcon icon={faUser} className="avatar-icon" />
          </div>
          <div className="user-details">
            <h3 className="welcome-title">Welcome, {user.username}!</h3>
            <p className="user-email">{user.email}</p>
          </div>
        </div>
        <button onClick={handleLogout} className="logout-button">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </button>
      </div>

      <div className="dashboard-content">
        <div className="welcome-section">
          <div className="welcome-icon">
            <FontAwesomeIcon icon={faUtensils} className="icon-large" />
          </div>
          <h2 className="welcome-title">Your Personal Meal Assistant</h2>
          <p className="welcome-description">
            Get personalized meal recommendations based on your preferences,
            dietary restrictions, and nutritional goals. Our AI-powered chatbot
            will help you discover new recipes and plan your meals.
          </p>
          <button
            className="open-chatbot-button"
            onClick={handleOpenChatbot}
          >
            {/* button text should be centered */}
            <FontAwesomeIcon icon={faRobot} />
            <span style={{paddingLeft: "2px"}}>Open Meal Chatbot</span>
          </button>
        </div>

        {!isChatbotOpen&&(
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faRobot} className="icon-medium" />
              </div>
              <h3 className="feature-title">AI-Powered Recommendations</h3>
              <p className="feature-description">Get smart meal suggestions based on your preferences and dietary needs.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faUtensils} className="icon-medium" />
              </div>
              <h3 className="feature-title">Recipe Discovery</h3>
              <p className="feature-description">Explore thousands of recipes tailored to your taste and requirements.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faUser} className="icon-medium" />
              </div>
              <h3 className="feature-title">Personalized Experience</h3>
              <p className="feature-description">Your recommendations improve over time as we learn your preferences.</p>
            </div>
          </div>
        )}


      </div>

      {/* Chat Interface Modal */}
      {
        isChatbotOpen&&(
          <div className="chatbot-modal">
            <div className="chatbot-modal-content">
              <div className="chatbot-interface-container">
                <ChatInterface
                  user={user}
                  onLogout={onLogout}
                  onClose={handleCloseChatbot}
                  sessionId={chatbotSessionId}
                />
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ChatbotDashboard;
