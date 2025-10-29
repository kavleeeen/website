import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCode,faEye} from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const {logo,title,description,links}=props;

	const ProjectContent=() => (
		<div className="project-container">
			<div className="project-logo">
				<img src={logo} alt={`${title} project logo`} />
			</div>
			<div className="project-title">{title}</div>
			<div className="project-description">{description}</div>
			<div className="project-links">
				{links?.map((linkItem,index) => {
									const isInternalRoute=linkItem.link.startsWith('/');
									const isTextLink=linkItem.type==='fe'||linkItem.type==='be';
									const icon=linkItem.type==='view'? faEye:faCode;

									// Render FE/BE as plain text hyperlinks
									if(isTextLink) {
										return (
											<div key={index} className="project-link project-text-item">
												<a
													href={linkItem.link}
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`${linkItem.text} ${title} project`}
													className="project-text-link"
													data-link-type={linkItem.type}
												>
													{linkItem.text}
												</a>
											</div>
										);
									}

									// Default: button-style link (e.g., View)
									return (
										<div key={index} className="project-link">
												{isInternalRoute? (
													<Link
														to={linkItem.link}
														className={`project-link-wrapper project-link-${linkItem.type}`}
														data-link-type={linkItem.type}
													>
														<div className="project-link-icon">
															<FontAwesomeIcon icon={icon} />
														</div>
														<div className="project-link-text">{linkItem.text}</div>
													</Link>
											):(
												<a
													href={linkItem.link}
													target="_blank"
													rel="noopener noreferrer"
													aria-label={`${linkItem.text} ${title} project`}
													className={`project-link-wrapper project-link-${linkItem.type}`}
													data-link-type={linkItem.type}
												>
													<div className="project-link-icon">
														<FontAwesomeIcon icon={icon} />
													</div>
													<div className="project-link-text">{linkItem.text}</div>
												</a>
											)}
										</div>
									);
								})}
			</div>
		</div>
	);

	// For backward compatibility, check if old format is used
	if(props.linkText&&props.link) {
		const isInternalRoute=props.link.startsWith('/');
		return (
			<React.Fragment>
				<div className="project">
					{isInternalRoute? (
						<Link to={props.link}>
							<ProjectContent />
						</Link>
					):(
						<a
								href={props.link}
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
	}

	// New format with multiple links
	return (
		<React.Fragment>
			<div className="project">
				<ProjectContent />
			</div>
		</React.Fragment>
	);
};

export default Project;
