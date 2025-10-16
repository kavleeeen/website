import React,{useEffect} from "react";
import {Helmet} from "react-helmet";

// import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedinIn,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import LazyImage from "../components/common/lazyImage";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage=() => {
	useEffect(() => {
		window.scrollTo(0,0);
	},[]);

	const currentSEO=SEO.find((item) => item.page==="home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="homepage-name">
									Hi, I'm <span className="highlight">Kavleen Sabharwal</span>
								</div>

								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<LazyImage
											src="homepage.jpg"
											alt="Kavleen Sabharwal - Full-stack Developer"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							{/* <a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a> */}
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedinIn}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.whatsapp}
								target="_blank"
								rel="noreferrer"
								aria-label="Message on WhatsApp"
							>
								<FontAwesomeIcon
									icon={faWhatsapp}
									className="homepage-social-icon"
								/>
							</a>
							{/* 	<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a> */}
							{/* <a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
					*/}
						</div>

						<div className="homepage-cta-section">
							<a href="/projects" className="cta-button">
								View My Projects →
							</a>
						</div>



						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
