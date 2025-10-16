import React,{useState,useRef,useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faPaperPlane, 
  faUser, 
  faRobot,
  faExclamationTriangle,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

import chatService from "../../services/chatService";
import "./styles/chatInterface.css";

const ChatInterface=({user,onLogout,onClose,sessionId}) => {
  const [messages,setMessages]=useState([]);
  const [inputMessage,setInputMessage]=useState("");
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState("");
  const [isConnected,setIsConnected]=useState(true);
  const [currentSessionId,setCurrentSessionId]=useState(sessionId);

  const messagesEndRef=useRef(null);
  const inputRef=useRef(null);

  // Format message text to handle newlines and bold text
  // Note: This function processes AI responses to convert \n to <br /> and **text** to <strong>text</strong>
  const formatMessage=(text) => {
    if(!text) return "";

    // Convert \n to <br /> for line breaks
    let formattedText=text.replace(/\n/g,"<br />");

    // Convert **text** to <strong>text</strong> for bold text
    formattedText=formattedText.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");

    return formattedText;
  };

  // Validate UUID format
  const isValidUUID=(uuid) => {
    const uuidRegex=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  };

  // Format session ID for display
  const formatSessionId=(sessionId) => {
    if(!sessionId) return "Creating session...";

    // Validate UUID format
    if(isValidUUID(sessionId)) {
      return `Session: ${sessionId.substring(0,8)}...`;
    } else {
      // Fallback for non-UUID session IDs
      return `Session: ${sessionId.substring(0,8)}...`;
    }
  };

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom=() => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  },[messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  },[]);

  // Check API health on mount
  useEffect(() => {
    checkAPIHealth();
  },[]);

  // Update current session ID when prop changes
  useEffect(() => {
    if(sessionId) {
      setCurrentSessionId(sessionId);
    }
  },[sessionId]);

  const checkAPIHealth=async () => {
    const result=await chatService.healthCheck();
    setIsConnected(result.success);
  };


  const handleSendMessage=async (e) => {
    e.preventDefault();
    if(!inputMessage.trim()||isLoading) return;

    // Check if we have a valid session ID
    if(!currentSessionId) {
      setError("Session not ready. Please wait a moment and try again.");
      return;
    }

    const userMessage={
      id: Date.now().toString(),
      user_message: inputMessage,
      ai_response: "",
      timestamp: new Date().toISOString(),
      message_type: 'general'
    };

    setMessages(prev => [...prev,userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setError("");

    try {
      console.log("Sending message with session ID:",currentSessionId);
      const response=await chatService.sendMessage(inputMessage,currentSessionId);

      if(response.success) {
        const aiMessage={
          id: (Date.now()+1).toString(),
          user_message: "",
          ai_response: response.message,
          timestamp: response.timestamp||new Date().toISOString(),
          message_type: 'general'
        };
        setMessages(prev => [...prev,aiMessage]);
      } else {
        throw new Error(response.error);
      }
    } catch(error) {
      console.error("Chat error:",error);

      // Check if it's a 401 error (session expired)
      if(error.message.includes('Session expired')) {
        setError("Session expired. Please log in again.");

        const errorMessage={
          id: (Date.now()+1).toString(),
          user_message: "",
          ai_response: "Your session has expired. Please refresh the page and log in again.",
          timestamp: new Date().toISOString(),
          message_type: 'error'
        };
        setMessages(prev => [...prev,errorMessage]);
      } else {
        setError("Failed to send message. Please try again.");

        const errorMessage={
          id: (Date.now()+1).toString(),
          user_message: "",
          ai_response: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
          timestamp: new Date().toISOString(),
          message_type: 'error'
        };
        setMessages(prev => [...prev,errorMessage]);
      }
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="chat-interface">
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-title">
          <FontAwesomeIcon icon={faRobot} />
          <span>Food Recommendation Assistant</span>
        </div>
        <div className="chat-actions">
          <div className="session-info">
            <span className="session-id" title={currentSessionId? `Full Session ID: ${currentSessionId}`:"Creating session..."}>
              {formatSessionId(currentSessionId)}
            </span>
          </div>
          <div className={`connection-status ${isConnected? 'connected':'disconnected'}`}>
            <div className="status-dot"></div>
            {isConnected? 'Connected':'Disconnected'}
          </div>
          <button
            className="close-chat-button"
            onClick={onClose}
            title="Close chat"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages">
        {messages.length===0? (
          <div className="welcome-message">
            <div className="welcome-icon">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h3>Welcome to your Food Assistant!</h3>
            {!currentSessionId? (
              <div className="session-loading">
                <div className="loading-spinner"></div>
                <p>Initializing your session...</p>
              </div>
            ):(
              <>
                <p>I'm here to help you with meal recommendations, recipe suggestions, and dietary advice. Ask me anything about food!</p>

                <div className="suggested-prompts">
                  <button 
                      className="prompt-button"
                      onClick={() => setInputMessage("What should I cook for dinner?")}
                    >
                      What should I cook for dinner?
                    </button>
                    <button 
                      className="prompt-button"
                      onClick={() => setInputMessage("Give me a healthy breakfast recipe")}
                    >
                      Give me a healthy breakfast recipe
                    </button>
                    <button 
                      className="prompt-button"
                      onClick={() => setInputMessage("I'm vegetarian, suggest some meals")}
                    >
                      I'm vegetarian, suggest some meals
                    </button>
                  </div>
              </>
            )}
          </div>
        ):(
            messages.map((message) => (
              <div key={message.id} className={`message ${message.user_message? 'user-message':'ai-message'}`}>
                <div className="message-avatar">
                  <FontAwesomeIcon icon={message.user_message? faUser:faRobot} />
                </div>
                <div className="message-content">
                  <div className="message-text">
                    {message.user_message? (
                      // User messages - plain text
                      message.user_message
                    ):(
                      // AI messages - formatted with HTML
                      // Note: Using dangerouslySetInnerHTML is safe here as we control the formatMessage function
                      // and only process newlines and bold text formatting from trusted AI responses
                      <div
                        dangerouslySetInnerHTML={{
                          __html: formatMessage(message.ai_response)
                        }}
                      />
                    )}
                  </div>
                  <div className="message-time">
                    {new Date(message.timestamp).toLocaleTimeString([],{
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            ))
        )}

        {/* Loading Indicator */}
        {isLoading&&(
          <div className="loading-message">
            <div className="loading-avatar">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <div className="loading-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="loading-text">Crafting your perfect meal recommendation...</div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error&&(
          <div className="error-message">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <span>{error}</span>
            <button onClick={() => setError("")}>×</button>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>


      {/* Chat Input */}
      <div className="chat-input-container">
        <form onSubmit={handleSendMessage} className="chat-input-form">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={currentSessionId? "Ask me about food, recipes, or meal recommendations...":"Initializing session..."}
            className="chat-input"
            disabled={isLoading||!currentSessionId}
          />
          <button
            type="submit"
            className="send-button"
            disabled={!inputMessage.trim()||isLoading||!currentSessionId}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
        <div className="input-hint">
          Press Enter to send
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
