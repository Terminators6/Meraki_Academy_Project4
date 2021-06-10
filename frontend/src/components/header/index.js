import React from 'react';
import { Video } from "./../video/video";
import { Footer } from "./../footer/index";
import { Main } from "./../main/index";
import './header.css';

export const Header = () => {
	return (
	<div className="Header">
		
		<Video />
		<p className="sizaText">
		Hire the best <br/> freelancers for any job,<br/>  online.
		</p>
		<p className="paragraph">
		Millions of people use freelancer.com to turn their ideas into reality
		</p>
		<Main />
		<Footer />

	</div>
	)
};