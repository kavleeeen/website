import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFolderOpen,
  faCogs,
  faFileAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import "./styles/mobileNav.css";

const MobileNav=(props) => {
  const {active}=props;

  // Order updated so Home is centered on mobile (3rd item)
  const navItems=[
    {path: "/projects",label: "Projects",icon: faFolderOpen,key: "projects"},
    {path: "/skills",label: "Skills",icon: faCogs,key: "skills"},
    {path: "/",label: "Home",icon: null,key: "home"},
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
            {item.key!=="home"? (
              <FontAwesomeIcon icon={item.icon} className="mobile-nav-icon" />
            ):(
              <img src="/logoKavs.png" alt="Home" className="mobile-nav-icon mobile-nav-icon--home" />
            )}
            <span className="mobile-nav-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
