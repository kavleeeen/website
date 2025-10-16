import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

import "./styles/dashboardHeader.css";

const DashboardHeader=({onLogout,isAuthenticated}) => {
  return (
    <div className="dashboard-header">
      <Link to="/" className="header-button header-button-secondary">
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </Link>

      {/* {isAuthenticated&&(
        <button onClick={onLogout} className="header-button header-button-primary">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </button>
      )} */}
    </div>
  );
};

export default DashboardHeader;
