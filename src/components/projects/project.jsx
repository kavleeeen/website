import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	// Check if it's an internal route (starts with /)
	const isInternalRoute=link.startsWith('/');

	const ProjectContent=() => (
		<div className="project-container">
			<div className="project-logo">
				<img src={logo} alt={`${title} project logo`} />
			</div>
			<div className="project-title">{title}</div>
			<div className="project-description">{description}</div>
			<div className="project-link">
				<div className="project-link-icon">
					<FontAwesomeIcon icon={faLink} />
				</div>
				<div className="project-link-text">{linkText}</div>
			</div>
		</div>
	);

	return (
		<React.Fragment>
			<div className="project">
				{isInternalRoute? (
					<Link to={link}>
						<ProjectContent />
					</Link>
				):(
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`View ${title} project`}
						>
						<ProjectContent />
					</a>
				)}
			</div>
		</React.Fragment>
	);
};

export default Project;
