import React,{useEffect} from "react";
import {Helmet} from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Skills from "../components/skills/skills";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/skills.css";

const SkillsPage=() => {
  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  const currentSEO=SEO.find((item) => item.page==="skills");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Skills | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description||"Skills and technologies I work with"} />
        <meta
          name="keywords"
          content="Kavleen Sabharwal, Skills, Technologies, Programming, Web Development"
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="skills" />
        <div className="content-wrapper">
          <div className="skills-logo-container">
            <div className="skills-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="skills-page-container">
            <div className="title skills-page-title fade-slide-in" style={{animationDelay: "0.2s"}}>
              <span className="typewriter">My Skills & Technologies</span>
            </div>

            <div className="subtitle skills-page-subtitle">
              Technologies and tools I work with to build amazing digital experiences.
            </div>

            <Skills />
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SkillsPage;



