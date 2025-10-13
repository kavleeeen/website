import { useEffect } from "react";
import {Routes,Route, useLocation} from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import SkillsPage from "./pages/skills";
import Resume from "./pages/resume";
import Chatbot from "./pages/chatbot";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import MobileNav from "./components/common/mobileNav";

import {TRACKING_ID} from "./data/tracking";
import "./app.css";

function App() {
	const location = useLocation();
	
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	// Get active page for mobile navigation
	const getActivePage = () => {
		const path = location.pathname;
		if (path === "/") return "home";
		if (path === "/about") return "about";
		if (path === "/projects") return "projects";
		if (path === "/skills") return "skills";
		if (path === "/resume") return "resume";
		if (path === "/contact") return "contact";
		return "home";
	};

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/skills" element={<SkillsPage />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/chatbot" element={<Chatbot />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
			<MobileNav active={getActivePage()} />
		</div>
	);
}

export default App;
