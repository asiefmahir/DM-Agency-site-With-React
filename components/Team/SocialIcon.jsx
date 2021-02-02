const SocialIcon = ({ icon }) => {
	return (
		<li>
			<a href={icon.url}>{icon.image}</a>
		</li>
	);
};

export default SocialIcon;
