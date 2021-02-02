const Navigation = () => {
	return (
		<ul id='fixed-nav' className='hidden-phone scroll-links'>
			<li className='current'>
				<a href='#home'>Home</a>
			</li>
			<li>
				<a href='#about'>About Us</a>
			</li>
			<li>
				<a href='#team'>Team</a>
			</li>
			<li>
				<a href='#services'>Services</a>
			</li>
			<li>
				<a href='#portfolio'>Portfolio</a>
			</li>
			<li>
				<a href='#contact'>Contact Us</a>
			</li>
		</ul>
	);
};

export default Navigation;
