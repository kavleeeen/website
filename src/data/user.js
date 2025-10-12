const INFO = {
	main: {
		title: "Kavleen Sabharwal portfolio",
		name: "Kavleen Sabharwal",
		email: "kavleen.sabharwal.connect@gmail.com",
		logo: "../logoKavs.png",
	},

	socials: {
		github: "https://github.com/kavleenSabharwal",
		linkedin: "https://www.linkedin.com/in/kavleen-s-954a60168",
	},

	homepage: {
		title: "Full-stack developer",
		description:
			"I am a developer with expertise in Javascript. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "Hi! I’m Kavleen. I live in Bangalore, India, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Some of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
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
				// {
				// 	type: "view",
				// 	text: "View",
				// 	link: "/chatbot"
				// },
				{
					type: "code",
					text: "Code",
					link: "https://github.com/kavleeeen/food-bot-backend"
				}
			]
		}
	],
};

export default INFO;
