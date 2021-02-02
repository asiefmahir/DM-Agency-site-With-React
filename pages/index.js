// import { faCheckSquare, faFrog } from "@fortawesome/free-solid-svg-icons";

import About from '../sections/about-us'
import Contact from '../sections/contact-us'
import CopyRight from '../sections/copy-right'
import Feedback from '../sections/feedback'
import Hero from '../sections/hero'
import Portfolio from '../sections/portfolio'
import Services from '../sections/services'
import Team from '../sections/team'



const Home = () => {
	return (
		<>
			<Hero />
			<div className="wrapper">
				<About />
				<Team />
				<Services />
				<Portfolio />
				<Contact />
				<Feedback />
				<CopyRight />
			</div>
		</>
	);
};

export default Home;
