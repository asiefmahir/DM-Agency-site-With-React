import SocialIcons from "../SocialIcons/SocialIcons";
import Navigation from "./Navigation";

const Nav = ({ navlink, socialLinks }) => {
	return (
		<div className='span7'>
			<Navigation navlink={navlink} />
			<SocialIcons socialLinks={socialLinks} />
		</div>
	);
};

export default Nav;
