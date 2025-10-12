import React,{useEffect} from "react";
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/resume.css";

const Resume=() => {
  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  const currentSEO=SEO.find((item) => item.page==="resume")||{
    description: "Kavleen Sabharwal - Full-stack & AI Engineer Resume",
    keywords: ["resume","portfolio","full-stack","AI engineer","software developer"]
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Resume | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="resume" />
        <div className="content-wrapper">
          <div className="resume-logo-container">
            <div className="resume-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="resume-container">
            {/* Header */}
            <div className="resume-header">
              <h1 className="resume-name">Kavleen Sabharwal</h1>
              <div className="resume-contact">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                <div className="contact-item">
                  <span>8582807713</span>
                </div>
                <div className="contact-item">
                  <span>{INFO.main.email}</span>
                </div>
              </div>
              <div className="resume-links">
                <a href={INFO.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                {/* <a href="/" target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a> */}
              </div>
            </div>

            {/* Profile */}
            <div className="resume-section">
              <h2 className="section-title">PROFILE</h2>
              <p className="profile-text">
                Full-stack & AI engineer who thrives on undefined problems; from fixing broken workflows to architecting scalable AI tools that cut hours into minutes.
              </p>
            </div>

            {/* Employment History */}
            <div className="resume-section">
              <h2 className="section-title">EMPLOYMENT HISTORY</h2>

              <div className="employment-item">
                <div className="employment-header">
                  <div className="employment-title">Tech Lead</div>
                  <div className="employment-company">Venwiz</div>
                  <div className="employment-dates">March 2025 — Today</div>
                  <div className="employment-location">Bengaluru</div>
                </div>
                <ul className="employment-achievements">
                  <li>Led AI development, mentored junior engineers.</li>
                  <li>Built an Agentic AI (huggingface-smolagents) pocket expeditor chatbot for casual informational chatting.</li>
                  <li>Developed custom parsing logic + AI validation to convert messy Excel vendor quotes into structured data, reducing comparison time from 8 hours to 2 minutes.</li>
                  <li>Drove Venwiz's web platform to achieve Astra Security A+ Grade Certification by identifying vulnerabilities, implementing secure coding practices, and coordinating fixes across frontend, backend, and infra.</li>
                </ul>
              </div>

              <div className="employment-item">
                <div className="employment-header">
                  <div className="employment-title">Software Development Engineer</div>
                  <div className="employment-company">Venwiz</div>
                  <div className="employment-dates">Dec 2022 — March 2025</div>
                </div>
                <ul className="employment-achievements">
                  <li>Built an RFQ classification and scope-of-work prediction model, accelerating vendor selection by 30% and improving turnaround time for MSMEs.</li>
                  <li>Designed an agentic-AI task automation framework for app-wide data updates, reducing manual intervention.</li>
                  <li>Led real-time milestone tracking for 100+ consignments, enabling automated delay flagging.</li>
                  <li>Developed email-embedded forms and a dynamic scheduling tool, reducing manual vendor follow-ups by 60%.</li>
                </ul>
              </div>

              <div className="employment-item">
                <div className="employment-header">
                  <div className="employment-title">Software Development Engineer</div>
                  <div className="employment-company">Maverick Quantum (Sister company - MTX Group Inc.)</div>
                  <div className="employment-dates">Jun 2022 — Dec 2022</div>
                  <div className="employment-location">Hyderabad</div>
                </div>
                <ul className="employment-achievements">
                  <li>Spearheaded an enterprise grant portal (Angular), reducing manual approvals by 50%.</li>
                  <li>Developed a Google-Forms-style intake builder adopted across 10+ departments.</li>
                  <li>Created an Angular-Salesforce connector with integrated document scanning, cutting per-application review time by 40%.</li>
                </ul>
              </div>

              <div className="employment-item">
                <div className="employment-header">
                  <div className="employment-title">Full Stack Developer</div>
                  <div className="employment-company">MTX Group Inc.</div>
                  <div className="employment-dates">Aug 2020 — May 2022</div>
                  <div className="employment-location">Hyderabad</div>
                </div>
                <ul className="employment-achievements">
                  <li>Led a GCP-powered Angular/Node health data platform managing 4M+ records using Kubernetes, BigQuery, and Pub/Sub.</li>
                  <li>Documented best practices and trained 5+ engineers, reducing onboarding setup time from weeks to days.</li>
                </ul>
              </div>

              <div className="employment-item">
                <div className="employment-header">
                  <div className="employment-title">Consultant Trainee</div>
                  <div className="employment-company">MTX Group Inc.</div>
                  <div className="employment-dates">Jan 2020 — Aug 2020</div>
                </div>
                <ul className="employment-achievements">
                  <li>Salesforce & Full Stack Technologies</li>
                </ul>
              </div>

              <div className="employment-item">
                <div className="employment-header">
                  <div className="employment-title">Full Stack Intern</div>
                  <div className="employment-company">ITC Infotech</div>
                  <div className="employment-dates">Jun 2019 — Jul 2019</div>
                </div>
                <ul className="employment-achievements">
                  <li>Developed a Library Management System using .NET, implementing core features like book inventory, user management, and lending workflows.</li>
                </ul>
              </div>
            </div>

            {/* Freelance */}
            <div className="resume-section">
              <h2 className="section-title">FREELANCE</h2>

              <div className="freelance-item">
                <div className="freelance-header">
                  <div className="freelance-dates">Nov 2022 — Jan 2023</div>
                  <div className="freelance-company">Keto India (now Livofy)</div>
                </div>
                <p className="freelance-description">
                  Co-built a nutritionist platform (Angular/Node/Postgres on AWS) enabling real-time client diet tracking—automated Zoho CRM sync, freeing up 2+ hours weekly for health coaches.
                </p>
              </div>

              <div className="freelance-item">
                <div className="freelance-header">
                  <div className="freelance-dates">Mar 2022 — Apr 2022</div>
                  <div className="freelance-company">CheckIn</div>
                </div>
                <p className="freelance-description">
                  Led full-stack development of a web and Android app (Express, React, Firebase) with RBAC, session management, QR integration, and push notifications—streamlining event attendance for on-site users.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="resume-section">
              <h2 className="section-title">EDUCATION</h2>

              <div className="education-item">
                <div className="education-header">
                  <div className="education-dates">Dec 2020</div>
                  <div className="education-degree">Bachelors of Technology, Manipal University</div>
                  <div className="education-location">Jaipur</div>
                </div>
                <p className="education-thesis">
                  Created an ML model recommending football roles based on player strengths and historical/regional data—achieved ~85% match accuracy in test scenarios.
                </p>
              </div>

              <div className="education-item">
                <div className="education-header">
                  <div className="education-dates">Dec 2016</div>
                  <div className="education-degree">ISC, Our Lady Queen of the Missions School</div>
                  <div className="education-location">Kolkata</div>
                </div>
              </div>

              <div className="education-item">
                <div className="education-header">
                  <div className="education-dates">Dec 2014</div>
                  <div className="education-degree">ICSE, Our Lady Queen of the Missions School</div>
                  <div className="education-location">Kolkata</div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="resume-section">
              <h2 className="section-title">SKILLS</h2>

              <div className="skills-content">
                <div className="skills-category">
                  <h3 className="skills-category-title">Problem-Solving Toolkit:</h3>
                  <ul className="skills-list">
                    <li>Architecting scalable systems: Node.js, Python, GCP, AWS, Kubernetes</li>
                    <li>Making data usable: PostgreSQL, MongoDB, Redis, Firestore</li>
                    <li>Bringing ideas to life fast: React, Angular</li>
                    <li>AI / Automation: OpenAI APIs, LLMs, Agentic AI</li>
                  </ul>
                </div>

                <div className="skills-category">
                  <h3 className="skills-category-title">Core strengths:</h3>
                  <ul className="skills-list">
                    <li>Mentorship, cross-team communication, rapid prototyping, stakeholder engagement</li>
                    <li>Turning chaotic data into clean, user-focused tools</li>
                    <li>Coaching peers through tech transitions</li>
                    <li>Rapidly learning new stacks and adapting across domains</li>
                    <li>System design; from APIs to real-time pipelines</li>
                  </ul>
                </div>
              </div>
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

export default Resume;
