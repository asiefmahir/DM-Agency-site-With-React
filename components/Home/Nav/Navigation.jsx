const Navigation = ({ navlink }) => {
	return (
		<ul id='fixed-nav' className='hidden-phone scroll-links'>
			{navlink.map((link) => (
				<li key={link.id}>
					<a href={link}>{link.text}</a>
				</li>
			))}
		</ul>
	);
};

export default Navigation;
