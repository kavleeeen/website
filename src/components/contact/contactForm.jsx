import React,{useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane,faSpinner} from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';
import {EMAILJS_CONFIG} from "../../config/emailjs";
import "./styles/contactForm.css";

const ContactForm=() => {
  const [formData,setFormData]=useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting,setIsSubmitting]=useState(false);
  const [submitStatus,setSubmitStatus]=useState(null);

  const handleChange=(e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit=async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Check if EmailJS is properly configured
      if(EMAILJS_CONFIG.SERVICE_ID==='service_your_service_id'||
        EMAILJS_CONFIG.TEMPLATE_ID==='template_your_template_id'||
        EMAILJS_CONFIG.PUBLIC_KEY==='your_public_key') {
        throw new Error('EmailJS not configured. Please set up your EmailJS credentials.');
      }

      // Prepare template parameters
      const templateParams={
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({name: "",email: "",subject: "",message: ""});
    } catch(error) {
      console.error('EmailJS Error:',error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-title">
        Send me a message
      </div>
      <div className="contact-form-subtitle">
        I'd love to hear from you. Send me a message and I'll respond as soon as possible.
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="form-textarea"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting? (
            <>
              <FontAwesomeIcon icon={faSpinner} className="spinner" />
              Sending...
            </>
          ):(
            <>
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </>
          )}
        </button>

        {submitStatus==="success"&&(
          <div className="success-message">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {submitStatus==="error"&&(
          <div className="error-message">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;



