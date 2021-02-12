import SocialIcon from "./SocialIcon";

const Member = ({ member }) => {
	const { name, designation, socialLink, excerpt, url } = member;
	return (
		<div className='span3 profile'>
			<div class="profile-img">
				<img src={`http://192.168.0.136:4500${member.image.url}`} alt={name} />
			</div>
			<div className='profile-name'>{name}</div>
			<div className='profile-job'>{designation}</div>
			<div className='profile-desc'>
				<p>{excerpt}</p>
			</div>
			<ul className='profile-social-icons'>
				{socialLink.map((link) => (
					<SocialIcon link={link} />
				))}
			</ul>
		</div>
	);
};

export default Member;
