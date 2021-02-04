import SocialIcon from "./SocialIcon";

const Member = ({ member }) => {
	const { name, designation, socialLink, excerpt, url } = member;
	return (
		<div class='span3 profile'>
			<img src={url} alt={name} />
			<div class='profile-name'>{name}</div>
			<div class='profile-job'>{designation}</div>
			<div class='profile-desc'>
				<p>{excerpt}</p>
			</div>
			<ul class='profile-social-icons'>
				{socialLink.map((link) => (
					<SocialIcon link={link} />
				))}
			</ul>
		</div>
	);
};

export default Member;
