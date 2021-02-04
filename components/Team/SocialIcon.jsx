import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-brands-svg-icons";

const SocialIcon = ({ link }) => {
	return (
		<li>
			<a href={link.link}>
				<FontAwesomeIcon icon={`${All}/${link.iconText}`} />
			</a>
		</li>
	);
};

export default SocialIcon;
