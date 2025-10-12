import { useEffect } from "react";
import {HashRouter,Routes,Route} from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import SkillsPage from "./pages/skills";
import Resume from "./pages/resume";
import Chatbot from "./pages/chatbot";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import {TRACKING_ID} from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<HashRouter>
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
			</HashRouter>
		</div>
	);
}

export default App;
