import React,{useEffect,useState,useRef} from "react";
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck,faXmark,faSpinner,faCheckCircle,faExclamationCircle,faPaperPlane,faUser,faRobot,faCommentDots,faChevronUp,faChevronDown} from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/resumeParser.css";

const API_BASE_URL=process.env.REACT_APP_RESUME_PARSER_API_URL||"https://resume-rag-be-gwvsmxazbq-el.a.run.app";

const ResumeParserResults=() => {
  const {id}=useParams();
  const [matchResults,setMatchResults]=useState(null);
  const [isLoading,setIsLoading]=useState(true);
  const [error,setError]=useState("");
  const pollingAttemptsRef=React.useRef(0);
  const MAX_POLLING_ATTEMPTS=120; // 10 minutes max with exponential backoff
  const [processingStage,setProcessingStage]=useState("initializing");

  // Chat state
  const [chatMessages,setChatMessages]=useState([]);
  const [chatInput,setChatInput]=useState("");
  const [isChatLoading,setIsChatLoading]=useState(false);
  const [chatError,setChatError]=useState("");
  const chatMessagesEndRef=useRef(null);
  const chatInputRef=useRef(null);

  useEffect(() => {
    window.scrollTo(0,0);
    if(id) {
      pollingAttemptsRef.current=0;
      setProcessingStage("initializing");
      fetchComparisonResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id]);

  const fetchComparisonResults=async () => {
    if(!id) {
      setError("No comparison ID provided");
      setIsLoading(false);
      return;
    }

    try {
      const response=await fetch(`${API_BASE_URL}/api/comparison/${id}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data=await response.json();

      if(!response.ok||!data.success) {
        throw new Error(data.error||data.message||`Failed to fetch results with status ${response.status}`);
      }

      // Check if comparison exists
      if(!data.comparison) {
        throw new Error("No comparison data found in response");
      }

      const comparison=data.comparison;

      // Check if results are ready
      if(comparison.status==="completed"&&comparison.matchResult) {
        setMatchResults(comparison.matchResult);
        setIsLoading(false);
        setProcessingStage("completed");
      } else if(comparison.status==="in_progress") {
        // Update processing stage if available
        if(comparison.processingStage) {
          setProcessingStage(comparison.processingStage);
        } else {
          // Estimate stage based on attempt number
          const attempt=pollingAttemptsRef.current;
          if(attempt<10) setProcessingStage("extracting_text");
          else if(attempt<30) setProcessingStage("creating_embeddings");
          else if(attempt<60) setProcessingStage("matching_documents");
          else setProcessingStage("finalizing");
        }

        // Exponential backoff: start fast, slow down gradually
        // Attempts 0-5: 2 seconds (first 10 seconds)
        // Attempts 6-15: 3 seconds (next 30 seconds)
        // Attempts 16-30: 5 seconds (next 75 seconds)
        // Attempts 31+: 10 seconds (remaining time)
        let pollInterval;
        if(pollingAttemptsRef.current<5) {
          pollInterval=2000; // 2 seconds for first 5 attempts
        } else if(pollingAttemptsRef.current<15) {
          pollInterval=3000; // 3 seconds for next 10 attempts
        } else if(pollingAttemptsRef.current<30) {
          pollInterval=5000; // 5 seconds for next 15 attempts
        } else {
          pollInterval=10000; // 10 seconds after that
        }

        if(pollingAttemptsRef.current<MAX_POLLING_ATTEMPTS) {
          pollingAttemptsRef.current+=1;
          setTimeout(() => {
            fetchComparisonResults();
          },pollInterval);
        } else {
          setError("Processing is taking longer than expected. Please try again later.");
          setIsLoading(false);
        }
      } else {
        setError(`Unexpected status: ${comparison.status||"unknown"}`);
        setIsLoading(false);
      }
    } catch(error) {
      console.error("Fetch error:",error);
      setError(error.message||"Failed to fetch comparison results. Please try again.");
      setIsLoading(false);
    }
  };

  // Format message text to handle bold formatting (**text**) and newlines
  const formatMessage=(text) => {
    if(!text) return "";
    // Convert \n to <br /> for line breaks
    let formatted=text.replace(/\n/g,"<br />");
    // Convert **text** to <strong>text</strong>
    formatted=formatted.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");
    return formatted;
  };

  const [isChatOpen,setIsChatOpen]=useState(false);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if(isChatOpen&&chatMessagesEndRef.current) {
      chatMessagesEndRef.current.scrollIntoView({behavior: "smooth"});
    }
  },[chatMessages,isChatOpen]);

  // Focus chat input when chat opens
  useEffect(() => {
    if(isChatOpen&&chatInputRef.current) {
      setTimeout(() => {
        chatInputRef.current?.focus();
      },100);
    }
  },[isChatOpen]);

  const handleChatSubmit=async (e) => {
    e.preventDefault();
    if(!chatInput.trim()||isChatLoading||!id) return;

    const userMessage={
      id: Date.now().toString(),
      question: chatInput.trim(),
      answer: "",
      timestamp: new Date().toISOString(),
    };

    setChatMessages(prev => [...prev,userMessage]);
    setChatInput("");
    setIsChatLoading(true);
    setChatError("");

    try {
      const response=await fetch(`${API_BASE_URL}/api/comparison/${id}/chat`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userMessage.question,
        }),
      });

      const data=await response.json();

      if(!response.ok||!data.success) {
        throw new Error(data.error||data.message||`Failed to get response with status ${response.status}`);
      }

      // Update the user message with the answer
      setChatMessages(prev =>
        prev.map(msg =>
          msg.id===userMessage.id
            ? {...msg,answer: data.answer||data.response||"No answer received"}
            :msg
        )
      );
    } catch(error) {
      console.error("Chat error:",error);
      setChatError(error.message||"Failed to send message. Please try again.");
      // Update message with error
      setChatMessages(prev =>
        prev.map(msg =>
          msg.id===userMessage.id
            ? {...msg,answer: `Error: ${error.message}`}
            :msg
        )
      );
    } finally {
      setIsChatLoading(false);
    }
  };

  const currentSEO=SEO.find((item) => item.page==="resume-parser")||{
    page: "resume-parser",
    description: "Resume Parser RAG - AI-powered resume parsing with Retrieval-Augmented Generation",
    keywords: ["resume parser","RAG","AI","document analysis","Kavleen Sabharwal"],
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Resume Parser Results | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content={currentSEO.keywords.join(", ")}
        />
      </Helmet>

      <div className="page-content">
        <div className="content-wrapper">
          <div className="resume-parser-container">
            <div className="resume-parser-dashboard">
              <h1 className="resume-parser-title">Resume Parser RAG</h1>
              <p className="resume-parser-subtitle">
                Match Analysis Results
              </p>

              {/* Loading State */}
              {isLoading&&(
                <div className="results-loading">
                  <FontAwesomeIcon icon={faSpinner} spin className="loading-spinner-large" />
                  <p className="loading-text">
                    {processingStage==="extracting_text"&&"Extracting text from documents..."}
                    {processingStage==="creating_embeddings"&&"Creating embeddings (this may take a minute)..."}
                    {processingStage==="matching_documents"&&"Matching resume with job description..."}
                    {processingStage==="finalizing"&&"Finalizing results..."}
                    {!processingStage||processingStage==="initializing"? "Processing your documents...":""}
                  </p>
                </div>
              )}

              {/* Error State */}
              {error&&!isLoading&&(
                <div className="results-error">
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  <p>{error}</p>
                </div>
              )}

              {/* Match Results Section */}
              {matchResults&&!isLoading&&(
                <div className="match-results">

                  {/* Match Percentage */}
                  <div className="match-percentage-card">
                    <div className="percentage-circle">
                      <span className="percentage-value">{matchResults.finalPercent}%</span>
                    </div>
                    <p className="percentage-label">Overall Match</p>
                  </div>

                  {/* Years of Experience */}
                  {(matchResults?.resumeYears!==undefined||matchResults?.jdRequiredYears!==undefined)&&(
                    <div className="years-section">
                      <div className={`years-card ${matchResults.yearsScore>0? 'matched':'not-matched'}`}>
                        <div className="years-icon">
                          <FontAwesomeIcon icon={matchResults.yearsScore>0? faCheck:faXmark} />
                        </div>
                        <div className="years-content">
                          <h3 className="years-title">
                            Years of Experience
                          </h3>
                          <div className="years-comparison">
                            <p className="years-detail">
                              <span className="years-label">Resume:</span> <strong>{matchResults.resumeYears??'N/A'} years</strong>
                            </p>
                            <p className="years-detail">
                              <span className="years-label">Required:</span> <strong>{matchResults.jdRequiredYears??'N/A'} years</strong>
                            </p>
                          </div>
                          <p className={`years-status ${matchResults.yearsScore>0? 'matched':'not-matched'}`}>
                            {matchResults.yearsScore>0
                              ? "✓ Requirement met"
                              :"✗ Requirement not met"}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Explanation */}
                  {matchResults?.explain&&(
                    <div className="explanation-section">
                      <h3 className="explanation-title">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        Analysis Summary
                      </h3>
                      <div className="explanation-content">
                        <p>{matchResults.explain}</p>
                      </div>
                    </div>
                  )}

                  {/* Matched Skills - Only show if there are matched skills */}
                  {matchResults.matchedSkills&&matchResults.matchedSkills.length>0&&(
                    <div className="skills-section">
                      <h3 className="skills-title matched">
                        <FontAwesomeIcon icon={faCheck} />
                        Matched Skills ({matchResults.matchedSkills.length})
                      </h3>
                      <div className="skills-list matched-skills">
                        {matchResults.matchedSkills.map((skill,index) => (
                          <div key={index} className="skill-item matched">
                            <FontAwesomeIcon icon={faCheck} />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Missing Skills */}
                  <div className="skills-section">
                    <h3 className="skills-title missing">
                      <FontAwesomeIcon icon={faXmark} />
                      Missing Skills ({matchResults.missingSkills?.length||0})
                    </h3>
                    {matchResults.missingSkills&&matchResults.missingSkills.length>0? (
                      <div className="skills-list missing-skills">
                        {matchResults.missingSkills.map((skill,index) => (
                          <div key={index} className="skill-item missing">
                            <FontAwesomeIcon icon={faXmark} />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    ):(
                      <p className="no-skills">No missing skills - all required skills are matched!</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>

      {/* Chat Panel - Only show when results are loaded */}
      {matchResults&&!isLoading&&(
        <div className={`resume-chat-panel chat-theme-green ${isChatOpen? 'open':'closed'}`}>
          {/* Chat Header */}
          <div className="chat-header" onClick={() => setIsChatOpen(!isChatOpen)}>
            <div className="chat-header-content">
              <FontAwesomeIcon icon={faCommentDots} />
              <span>Ask about your resume</span>
            </div>
            <FontAwesomeIcon
              icon={isChatOpen? faChevronDown:faChevronUp}
              className="chat-toggle-icon"
            />
          </div>

          {/* Chat Body */}
          {isChatOpen&&(
            <div className="chat-body">
              <div className="chat-messages">
                {chatMessages.length===0? (
                  <div className="chat-welcome">
                    <FontAwesomeIcon icon={faRobot} className="welcome-icon" />
                    <p>Hi! I can help answer questions about your resume and the job match analysis.</p>
                    <p className="welcome-hint">Try asking: "What skills am I missing?" or "How can I improve my match percentage?"</p>
                  </div>
                ):(
                  chatMessages.map((message) => (
                    <React.Fragment key={message.id}>
                      {/* User Question */}
                      <div className="chat-message user-message">
                        <div className="message-avatar">
                          <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="message-content">
                          <div className="message-text">{message.question}</div>
                          <div className="message-time">
                            {new Date(message.timestamp).toLocaleTimeString([],{
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </div>
                        </div>
                      </div>

                      {/* AI Answer */}
                      {message.answer&&(
                        <div className="chat-message ai-message">
                          <div className="message-avatar">
                            <FontAwesomeIcon icon={faRobot} />
                          </div>
                          <div className="message-content">
                            <div
                              className="message-text"
                              dangerouslySetInnerHTML={{
                                __html: formatMessage(message.answer)
                              }}
                            />
                            <div className="message-time">
                              {new Date(message.timestamp).toLocaleTimeString([],{
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))
                )}

                {/* Loading Indicator */}
                {isChatLoading&&(
                  <div className="chat-message ai-message loading">
                    <div className="message-avatar">
                      <FontAwesomeIcon icon={faRobot} />
                    </div>
                    <div className="message-content">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}

                {chatError&&(
                  <div className="chat-error">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    <span>{chatError}</span>
                  </div>
                )}

                <div ref={chatMessagesEndRef} />
              </div>

              {/* Chat Input */}
              <form className="chat-input-form" onSubmit={handleChatSubmit}>
                <input
                  ref={chatInputRef}
                  type="text"
                  className="chat-input"
                  placeholder="Ask a question about your resume..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  disabled={isChatLoading}
                />
                <button
                  type="submit"
                  className="chat-send-button"
                  disabled={!chatInput.trim()||isChatLoading}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default ResumeParserResults;

