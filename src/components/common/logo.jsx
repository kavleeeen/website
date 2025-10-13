import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width = 60, link, showWrapper = true } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={INFO.main.logo} alt="Kavleen Sabharwal - Home" className="logo" width={width} title="Go to Homepage" />
	);

	const logoContent = link ? <Link to="/" title="Go to Homepage">{imageElement}</Link> : imageElement;

	return (
		<React.Fragment>
			{showWrapper ? (
				<div className="logo-wrapper">
					{logoContent}
				</div>
			) : (
				logoContent
			)}
		</React.Fragment>
	);
};

export default Logo;
