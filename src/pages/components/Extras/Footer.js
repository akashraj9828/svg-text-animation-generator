import React from "react";
import Git from "./Git";

function Footer() {
	// const d = new Date();
	return (
		<footer>
			<Git />
			<span className='footer-text'>
				With <span className='heart'>❤</span> by <a href='https://akashraj.tech'>Akash Raj</a>
			</span>
		</footer>
	);
}

export default Footer;
