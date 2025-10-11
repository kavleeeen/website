import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./styles/loading.css";

const Loading = ({ message = "Loading..." }) => {
	return (
		<div className="loading-container">
			<div className="loading-spinner">
				<FontAwesomeIcon icon={faSpinner} className="spinner" />
			</div>
			<div className="loading-message">{message}</div>
		</div>
	);
};

export default Loading;



