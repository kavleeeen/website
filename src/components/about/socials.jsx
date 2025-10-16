import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faGithub,faLinkedin,faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";
import "./styles/socials.css";

const SOCIAL_LINKS=[
	{
		name: "GitHub",
		url: INFO.socials.github,
		icon: faGithub,
		label: "Follow on GitHub",
	},
	{
		name: "LinkedIn",
		url: INFO.socials.linkedin,
		icon: faLinkedin,
		label: "Follow on LinkedIn",
	},
	{
		name: "Email",
		url: `mailto:${INFO.main.email}`,
		icon: faEnvelope,
		label: INFO.main.email,
	},
	{
		name: "WhatsApp",
		url: INFO.socials.whatsapp,
		icon: faWhatsapp,
		label: "Message on WhatsApp",
	},
];

const Socials = () => {
	return (
		<div className="socials">
			{SOCIAL_LINKS.map((social,index) => (
				<div className="social" key={index}>
					<a href={social.url} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon icon={social.icon} />
						</div>
						<div className="social-text">{social.label}</div>
					</a>
				</div>
			))}
		</div>
	);
};

export default Socials;
