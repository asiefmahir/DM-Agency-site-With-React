import { useEffect, useState } from "react";

import SloganText from "../../components/Home/SloganText";
import Logo from "../../components/Home/Logo";
import Nav from "../../components/Home/Nav";
import MainText from "../../components/Home/MainText";

const Hero = ({ nav, hero }) => {
	const { navlink, socialLinks } = nav;
	const { title, subtitle, aboutLink } = hero;
	const [isSticky, setIsSticky] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 180) {
				setIsSticky(true);
				return;
			}
			setIsSticky(false);
		});
	}, [isSticky]);
	return (
		<header id='home'>
			<div className='pattern'></div>
			<div className='container'>
				<div className='row'>
					<div className='span12'>
						<nav
							id='topnav'
							className={`${isSticky ? "sticky" : "transparents"}`}>
							<div className='row'>
								<Logo />
								<Nav navlink={navlink} socialLinks={socialLinks} />
							</div>
						</nav>
						<div>
							<SloganText title={title} />
							<MainText subtitle={subtitle} />
						</div>

						<div className='scroll-links'>
							<a href='#about' className='nextslide'>
								<FontAwesomeIcon icon={`${All}/${aboutLink.url}`} />
								<span>{aboutLink.text}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Hero;
