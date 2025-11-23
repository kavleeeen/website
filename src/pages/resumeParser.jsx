import React,{useEffect,useState} from "react";
import {Helmet} from "react-helmet";
import {useNavigate,Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf,faFileText,faUpload,faTimes,faSpinner,faCheckCircle,faExclamationCircle,faHome} from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/resumeParser.css";

const API_BASE_URL=process.env.REACT_APP_RESUME_PARSER_API_URL||"http://localhost:5003";

const ResumeParser=() => {
  const navigate=useNavigate();
  const [resumeFile,setResumeFile]=useState(null);
  const [jobDescriptionFile,setJobDescriptionFile]=useState(null);
  const [resumeError,setResumeError]=useState("");
  const [jobDescriptionError,setJobDescriptionError]=useState("");
  const [isLoading,setIsLoading]=useState(false);
  const [submitError,setSubmitError]=useState("");
  const [submitSuccess,setSubmitSuccess]=useState("");

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  const currentSEO=SEO.find((item) => item.page==="resume-parser")||{
    page: "resume-parser",
    description: "Resume Parser RAG - AI-powered resume parsing with Retrieval-Augmented Generation",
    keywords: ["resume parser","RAG","AI","document analysis","Kavleen Sabharwal"],
  };

  const validateFile=(file) => {
    if(!file) return false;
    const validTypes=["application/pdf","text/plain"];
    const validExtensions=[".pdf",".txt"];
    const fileExtension=file.name.toLowerCase().substring(file.name.lastIndexOf("."));

    return validTypes.includes(file.type)||validExtensions.includes(fileExtension);
  };

  const handleResumeChange=(e) => {
    const file=e.target.files[0];
    if(!file) {
      setResumeFile(null);
      setResumeError("");
      return;
    }

    if(!validateFile(file)) {
      setResumeError("Please upload a PDF or TXT file only.");
      setResumeFile(null);
      e.target.value="";
      return;
    }

    setResumeFile(file);
    setResumeError("");
  };

  const handleJobDescriptionChange=(e) => {
    const file=e.target.files[0];
    if(!file) {
      setJobDescriptionFile(null);
      setJobDescriptionError("");
      return;
    }

    if(!validateFile(file)) {
      setJobDescriptionError("Please upload a PDF or TXT file only.");
      setJobDescriptionFile(null);
      e.target.value="";
      return;
    }

    setJobDescriptionFile(file);
    setJobDescriptionError("");
  };

  const handleRemoveResume=() => {
    setResumeFile(null);
    setResumeError("");
    const input=document.getElementById("resume-upload");
    if(input) input.value="";
  };

  const handleRemoveJobDescription=() => {
    setJobDescriptionFile(null);
    setJobDescriptionError("");
    const input=document.getElementById("job-description-upload");
    if(input) input.value="";
  };

  const handleSubmit=async (e) => {
    e.preventDefault();

    // Clear previous messages
    setSubmitError("");
    setSubmitSuccess("");

    if(!resumeFile) {
      setResumeError("Resume upload is required.");
      return;
    }

    if(!jobDescriptionFile) {
      setJobDescriptionError("Job description upload is required.");
      return;
    }

    // Create FormData to send files
    const formData=new FormData();
    formData.append("resume",resumeFile);
    formData.append("jobDescription",jobDescriptionFile);

    setIsLoading(true);
    setSubmitError("");

    try {
      const response=await fetch(`${API_BASE_URL}/api/upload`,{
        method: "POST",
        body: formData,
      });

      const data=await response.json();

      if(!response.ok) {
        throw new Error(data.error||data.message||`Upload failed with status ${response.status}`);
      }

      // Success - navigate to results page with comparisonId
      if(data.comparisonId) {
        setSubmitSuccess("Files uploaded successfully! Redirecting to results...");
        // Navigate to results page after a brief delay
        setTimeout(() => {
          navigate(`/resume-parser/results/${data.comparisonId}`);
        },1000);
      } else {
        throw new Error("No comparison ID received from server");
      }

      // Reset form inputs
      setResumeFile(null);
      setJobDescriptionFile(null);
      const resumeInput=document.getElementById("resume-upload");
      const jobDescInput=document.getElementById("job-description-upload");
      if(resumeInput) resumeInput.value="";
      if(jobDescInput) jobDescInput.value="";

    } catch(error) {
      console.error("Upload error:",error);
      setSubmitError(error.message||"Failed to upload files. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Resume Parser RAG | ${INFO.main.title}`}</title>
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
              <div className="resume-parser-header">
                <Link to="/" className="home-button" title="Go to Home">
                  <FontAwesomeIcon icon={faHome} />
                </Link>
                <div className="resume-parser-title-wrapper">
                  <h1 className="resume-parser-title">Resume Parser RAG</h1>
                  <p className="resume-parser-subtitle">
                    Upload your resume and job description to get AI-powered analysis
                  </p>
                </div>
              </div>

              <form className="resume-parser-form" onSubmit={handleSubmit}>
                {/* Resume Upload */}
                <div className="upload-field">
                  <label htmlFor="resume-upload" className="upload-label">
                    Upload Resume <span className="required">*</span>
                  </label>
                  <div className="upload-input-wrapper">
                    <input
                      type="file"
                      id="resume-upload"
                      accept=".pdf,.txt"
                      onChange={handleResumeChange}
                      className="upload-input"
                      required
                    />
                    <label htmlFor="resume-upload" className="upload-button">
                      <FontAwesomeIcon icon={faUpload} />
                      <span>Choose File</span>
                    </label>
                  </div>
                  {resumeFile&&(
                    <div className="file-preview">
                      <div className="file-info">
                        <FontAwesomeIcon
                          icon={resumeFile.name.toLowerCase().endsWith('.pdf')? faFilePdf:faFileText}
                          className="file-icon"
                        />
                        <span className="file-name">{resumeFile.name}</span>
                        <button
                          type="button"
                          onClick={handleRemoveResume}
                          className="remove-file-btn"
                          aria-label="Remove file"
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                    </div>
                  )}
                  {resumeError&&(
                    <div className="error-message">{resumeError}</div>
                  )}
                  <p className="file-hint">Accepted formats: PDF, TXT (1 file only)</p>
                </div>

                {/* Job Description Upload */}
                <div className="upload-field">
                  <label htmlFor="job-description-upload" className="upload-label">
                    Upload Job Description <span className="required">*</span>
                  </label>
                  <div className="upload-input-wrapper">
                    <input
                      type="file"
                      id="job-description-upload"
                      accept=".pdf,.txt"
                      onChange={handleJobDescriptionChange}
                      className="upload-input"
                      required
                    />
                    <label htmlFor="job-description-upload" className="upload-button">
                      <FontAwesomeIcon icon={faUpload} />
                      <span>Choose File</span>
                    </label>
                  </div>
                  {jobDescriptionFile&&(
                    <div className="file-preview">
                      <div className="file-info">
                        <FontAwesomeIcon
                          icon={jobDescriptionFile.name.toLowerCase().endsWith('.pdf')? faFilePdf:faFileText}
                          className="file-icon"
                        />
                        <span className="file-name">{jobDescriptionFile.name}</span>
                        <button
                          type="button"
                          onClick={handleRemoveJobDescription}
                          className="remove-file-btn"
                          aria-label="Remove file"
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                    </div>
                  )}
                  {jobDescriptionError&&(
                    <div className="error-message">{jobDescriptionError}</div>
                  )}
                  <p className="file-hint">Accepted formats: PDF, TXT (1 file only)</p>
                </div>

                {submitError&&(
                  <div className="submit-message error">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    <span>{submitError}</span>
                  </div>
                )}

                {submitSuccess&&(
                  <div className="submit-message success">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>{submitSuccess}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin />
                      <span>Processing...</span>
                    </>
                  ):(
                    "Process Documents"
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResumeParser;

