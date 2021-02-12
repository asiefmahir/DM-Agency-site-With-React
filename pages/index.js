// import { faCheckSquare, faFrog } from "@fortawesome/free-solid-svg-icons";

import About from "../sections/about-us";
import Contact from '../sections/contact-us'
import CopyRight from '../sections/copy-right'
import Feedback from '../sections/feedback'
import Hero from "../sections/hero";
import Portfolio from '../sections/portfolio'
import Services from "../sections/services";
import Team from "../sections/team";
import { useState, useEffect } from "react";
import Axiox from "axios";

import getData from "../api";

const Home = () => {

	const [loading, setIsLoading] = useState(true);
	let [hero, setHero] = useState({});
	let [nav, setNav] = useState({});
	let [about, setAbout] = useState({});
	let [team, setTeam] = useState({});
	let [service, setService] = useState({});
	let [portfolio, setPortfolio] = useState({});
	let [contact, setContact] = useState({});
	let [feedBack, setFeedBack] = useState({});



	useEffect(async () => {
		try {
			// getData()
			let hero = await Axiox.get(`http://192.168.0.136:4500/hero`);
			let nav = await Axiox.get(`http://192.168.0.136:4500/nav`);
			let about = await Axiox.get(`http://192.168.0.136:4500/about`);
			let team = await Axiox.get(`http://192.168.0.136:4500/team`);
			let service = await Axiox.get(`http://192.168.0.136:4500/service`);
			let portfolio = await Axiox.get(`http://192.168.0.136:4500/portfolio`);
			let contact = await Axiox.get(`http://192.168.0.136:4500/contact`);
			let feedback = await Axiox.get(`http://192.168.0.136:4500/feedback`);
			setHero(hero.data);
			setNav(nav.data);
			setAbout(about.data);
			setTeam(team.data);
			setService(service.data);
			setPortfolio(portfolio.data)
			setContact(contact.data)
			setFeedBack(feedback.data)
			setIsLoading(false);
		} catch (e) {
			console.log(e.message);
			setIsLoading(false);
		}
	}, []);
	return (
		<div id='root'>
			{!loading && Object.keys(hero).length !== 0 && (
				<>
					<Hero hero={hero} nav={nav} />
					<div className='wrapper'>
						<About about={about} />
						<Team
							title={team.title}
							excerpt={team.excerpt}
							teamMember={team.teamMember}
						/>
						<Services
							title={service.title}
							excerpt={service.excerpt}
							features={service.features}
						/>
						<Portfolio portfolio={portfolio} />
						<Contact contact={contact} />
						<Feedback feedback={feedBack} />
						<CopyRight />
						{/* <Team />
				<Services />
				<Portfolio />
				<Contact />
				<Feedback />
				<CopyRight /> */}
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
{
	/* <div className='wrapper'> */
}
{
	/* <About about={about} /> */
}
{
	/* <Team />
				<Services />
				<Portfolio />
				<Contact />
				<Feedback />
				<CopyRight /> */
}
{
	/* </div> */
}
