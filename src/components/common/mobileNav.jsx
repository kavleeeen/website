import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faCogs,
  faFileAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import "./styles/mobileNav.css";

const MobileNav=(props) => {
  const {active}=props;

  const navItems=[
    {path: "/",label: "Home",icon: faHome,key: "home"},
    {path: "/about",label: "About",icon: faUser,key: "about"},
    {path: "/projects",label: "Projects",icon: faFolderOpen,key: "projects"},
    {path: "/skills",label: "Skills",icon: faCogs,key: "skills"},
    {path: "/resume",label: "Resume",icon: faFileAlt,key: "resume"},
    {path: "/contact",label: "Contact",icon: faEnvelope,key: "contact"}
  ];

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-container">
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className={`mobile-nav-item ${active===item.key? "active":""}`}
          >
            <FontAwesomeIcon icon={item.icon} className="mobile-nav-icon" />
            <span className="mobile-nav-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
