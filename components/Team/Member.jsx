import SocialIcon from "./SocialIcon";

const Member = ({ member }) => {
	const { name, desgnation, socialIcons, image } = member;
	return (
		<div class='span3 profile'>
			<img src={image} alt={name} />
			<div class='profile-name'>{name}</div>
			<div class='profile-job'>{desgnation}</div>
			<div class='profile-desc'>
				<p>{about}</p>
			</div>
			<ul class='profile-social-icons'>
				{socialIcons.map((icon) => (
					<SocialIcon icon={icon} />
				))}
			</ul>
		</div>
	);
};

export default Member;
