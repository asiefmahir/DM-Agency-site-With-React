import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import * as AllFree from "@fortawesome/free-brands-svg-icons";

const SocialIcons = ({ socialLinks }) => {
	console.log(All);
	return (
		<ul className='social-icons'>
			{socialLinks.map((link) => (
				<a href={link.link} key={link.text}>
					<FontAwesomeIcon icon={`${AllFree}.${link.iconText}`} />
				</a>
			))}
		</ul>
	);
};

export default SocialIcons;
