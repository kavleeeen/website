import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">Venwiz </div>
							<div className="work-subtitle">
							Software Development Engineer
							</div>
							<div className="work-duration"> December 2022 - Present</div>
						</div>

						<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">Maverick Quantum (Sister company - MTX Group Inc.) </div>
							<div className="work-subtitle">
							Software Development Engineer
							</div>
							<div className="work-duration">June 2022 - Decemeber 2022</div>
						</div>
						
						<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">MTX Group Inc. </div>
							<div className="work-subtitle">
							Full Stack Developer
							</div>
							<div className="work-duration"> August 2020 - May 2022</div>
							<div className="work-subtitle" style={{paddingTop : "40px"}}>
								Full Stack Consultant Trainee
							</div>
							<div className="work-duration"  style={{paddingTop : "40px"}} >Jan 2020 - August 2020</div>
						</div>
					{/*	<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> 
							<div className="work-title">MTX Group Inc. </div>
							<div className="work-subtitle">
								Full Stack Consultant Trainee
							</div>
							<div className="work-duration">Jan 2020 - August 2020</div>
						</div>*/}
						<div className="work" style={{paddingTop : "20px"}}>
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title" >ITC Infotech</div>
							<div className="work-subtitle">
								Full Stack Intern
							</div>
							<div className="work-duration">June 2019 -July 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
