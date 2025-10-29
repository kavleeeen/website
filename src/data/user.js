const INFO = {
	main: {
		title: "Kavleen Sabharwal portfolio",
		name: "Kavleen Sabharwal",
		email: "kavleen.sabharwal.connect@gmail.com",
		logo: "../logoKavs.png",
	},

	socials: {
		github: "https://github.com/kavleeeen",
		linkedin: "https://www.linkedin.com/in/kavleen-s-954a60168",
		// WhatsApp deep link: uses international format without '+'
		whatsapp: "https://wa.me/918582807713?text=Hi%20Kavleen%2C%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect!",
	},

	homepage: {
		title: "Full-stack & AI Engineer",
		description:
			"Tech Lead at Venwiz building AI-powered solutions. I architect scalable systems, mentor teams, and transform complex workflows into efficient automation. Passionate about cutting-edge AI technologies and creating impactful digital experiences. As a Tech Lead at Venwiz, I've built AI-powered chatbots, automated complex workflows, and led security initiatives achieving A+ certification.",
	},

	about: {
		title: "Hi! I'm Kavleen. I live in Bangalore, India, where I build the future with AI.",
		description:
			"As a Tech Lead at Venwiz, I've built AI-powered chatbots, automated complex workflows, and led security initiatives achieving A+ certification. I specialize in transforming manual processes into intelligent automation, reducing processing time from hours to minutes. Always excited to collaborate on innovative projects that push the boundaries of what's possible with technology.",
	},


	skills: {
		title: "Skills & Technologies",
		description: "Technologies and tools I work with to build amazing digital experiences.",
		technologies: [
			{
				category: "Frontend",
				skills: ["React","JavaScript","HTML5","CSS3","TypeScript","Redux",]
			},
			{
				category: "Backend",
				skills: ["Node.js","Express.js","Python","REST APIs","Microservices"]
			},
			{
				category: "Database",
				skills: ["MongoDB","PostgreSQL","MySQL","Redis","Firebase","Firestore"]
			},
			{
				category: "Cloud & DevOps",
				skills: ["AWS","Docker","Kubernetes","CI/CD","Git","Linux","Nginx"]
			},
			{
				category: "Tools & Others",
				skills: ["Git","VS Code","Postman","Figma","Jest","Webpack","Babel"]
			}
		]
	},

	projects: [
		{
			title: "Food Recommendation Bot",
			description:
				"An AI-powered chatbot that suggests personalized daily meals and recipes using Firebase, Firestore, and the Gemini API.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			links: [
				{
					type: "view",
					text: "View",
					link: "/chatbot"
				},
				{
					type: "be",
					text: "BE Code",
					link: "https://github.com/kavleeeen/food-bot-backend"
				}
			]
		},
		{
			title: "Collaborative Design Editor",
			description:
				"Real-time collaborative design editor for teams to co-create visually.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			links: [
				{
					type: "view",
					text: "View",
					link: "https://editor.kavleen.in"
				},
				{
					type: "fe",
					text: "FE Code",
					link: "https://github.com/kavleeeen/editor"
				},
				{
					type: "be",
					text: "BE Code",
					link: "https://github.com/kavleeeen/editor-backend"
				}
			]
		}
	],
};

export default INFO;
