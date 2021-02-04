import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-brands-svg-icons";

const SocialIcons = ({ socialLinks }) => {
	return (
		<ul className='social-icons'>
			{socialLinks.map((link) => (
				<a href={link.link}>
					<FontAwesomeIcon icon={`${All}/${link.iconText}`} />
				</a>
			))}
		</ul>
	);
};

export default SocialIcons;
