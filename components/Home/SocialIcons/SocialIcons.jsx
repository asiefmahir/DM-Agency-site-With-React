import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBehanceSquare,
	faFacebookSquare,
	faLinkedin,
	faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
	return (
		<ul className='social-icons'>
			<FontAwesomeIcon icon={faFacebookSquare} />
			<FontAwesomeIcon icon={faTwitterSquare} />
			<FontAwesomeIcon icon={faLinkedin} />
			<FontAwesomeIcon icon={faBehanceSquare} />
		</ul>
	);
};

export default SocialIcons;
