import { useState } from "react";

const Navigation = ({ navlink }) => {
	const [current, setCurrent] = useState("");
	const handleClick = (id) => {
		setCurrent(id);
	};
	return (
		<ul id='fixed-nav' className='hidden-phone scroll-links'>
			{navlink.map((link) => (
				<li
					onClick={() => handleClick(link.id)}
					key={link.id}
					className={`${current === link.id ? "current" : ""}`}>
					<a href={link}>{link.text}</a>
				</li>
			))}
		</ul>
	);
};

export default Navigation;
