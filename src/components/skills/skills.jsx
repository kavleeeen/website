import React from "react";
import "./styles/skills.css";

const Skills=() => {
  const INFO=require("../../data/user").default;

  // Handle case where skills data might not be available
  if(!INFO.skills) {
    return (
      <div className="skills-container">
        <div className="loading-message">Loading skills data...</div>
      </div>
    );
  }

  return (
    <div className="skills-container fade-in-up">
      <div className="skills-grid">
        {INFO.skills.technologies&&INFO.skills.technologies.map((category,index) => (
          <div
            key={index}
            className="skill-category fade-in-up"
            style={{animationDelay: `${index*0.1}s`}}
          >
            <div className="skill-category-title">{category.category}</div>
            <div className="skill-tags">
              {category.skills.map((skill,skillIndex) => (
                <span
                  key={skillIndex}
                  className="skill-tag"
                  style={{animationDelay: `${(index*0.1)+(skillIndex*0.05)}s`}}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;