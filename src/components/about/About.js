import React from "react";
import "./About.css";
import IM from '../../assets/me-about.jpg'
import Aboutlets from "./Aboutlets";
const About = () => {
	return (
		<section id="about">
			<h5>Get to know</h5>
			<h2>About Me</h2>
			<div className="container about-container">
				<div className="about-me">
					<img src={IM} alt="my image" className="about-me-image"></img>
				</div>
				<div className="about-me-content">
					<div className="about-carts">
						<div className="about-cart">
							<h5>Exprience</h5>
							<small>3 month of exprience in react js</small>
						</div>
						<div className="about-cart">
							<h5>Client</h5>
							<small>1 clients</small>
						</div>
						<div className="about-cart">
							<h5>Project</h5>
							<small>2 live projec</small>
						</div>
					</div>
					<p className="about-p"> 
						has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popul
					</p>
					<div className="letsgobtn">
					<Aboutlets></Aboutlets>
					</div>
					
				</div>
			</div>
		</section>
	);
};

export default About;

