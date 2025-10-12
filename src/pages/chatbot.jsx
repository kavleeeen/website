import React,{useState,useEffect} from "react";
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/common/footer";
import AuthForm from "../components/chatbot/authForm";
import ChatbotDashboard from "../components/chatbot/chatbotDashboard";
import DashboardHeader from "../components/chatbot/dashboardHeader";
import chatService from "../services/chatService";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/chatbot-1.css";

const Chatbot=() => {
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    window.scrollTo(0,0);
    checkAuthStatus();

    // Register for auto-logout callbacks
    const handleAutoLogout=() => {
      setIsAuthenticated(false);
      setUser(null);
    };

    chatService.onLogout(handleAutoLogout);

    // Cleanup on unmount
    return () => {
      chatService.offLogout(handleAutoLogout);
    };
  },[]);

  const checkAuthStatus=() => {
    const token=localStorage.getItem('authToken');
    const userData=localStorage.getItem('user');

    if(token&&userData) {
      setUser(JSON.parse(userData));
      setIsAuthenticated(true);
    }
    setLoading(false);
  };

  const handleLogin=(userData,token) => {
    localStorage.setItem('authToken',token);
    localStorage.setItem('user',JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout=() => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const currentSEO=SEO.find((item) => item.page==="chatbot")||{
    page: "chatbot",
    description: "AI-powered meal recommendation chatbot to help you discover personalized recipes and meal plans.",
    keywords: ["Kavleen Sabharwal","Chatbot","AI","Meal Recommendation","Food Bot","Recipe Assistant"]
  };

  if(loading) {
    return (
      <div className="chatbot-page">
        <DashboardHeader onLogout={handleLogout} isAuthenticated={isAuthenticated} />
        <div className="page-container">
          <div className="loading-container">
            <FontAwesomeIcon icon={faSpinner} spin className="loading-spinner" />
            <p className="loading-text">Loading authentication status...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Food Recommendation Bot | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content={currentSEO.keywords.join(", ")}
        />
      </Helmet>

      <div className="chatbot-page">
        <DashboardHeader onLogout={handleLogout} isAuthenticated={isAuthenticated} />

        <div className="page-container">
          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-content">
              <div className="hero-icon">
                <span className="icon-emoji">🍽️</span>
              </div>
              <h1 className="hero-title">
                Food Recommendation Bot
              </h1>
              <p className="hero-subtitle">
                Get personalized meal recommendations powered by AI
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content">
            {!isAuthenticated? (
              <AuthForm onLogin={handleLogin} />
            ):(
              <ChatbotDashboard user={user} onLogout={handleLogout} />
            )}
          </div>

          {/* Footer */}
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chatbot;
