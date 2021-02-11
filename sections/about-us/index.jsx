import Span from "../../components/Common/Span";

const About = ({ about }) => {
	return (
		<section id='about' class='page'>
			<div class='container'>
				<div class='row'>
					<div class='span12'>
						<div class='title'>
							{about.title.map((text) => (
								<Span text={text} />
							))}
						</div>
						<div class='lead'>{about.excerpt}</div>
						<div class='row two-columns'>
							<div class='span6'>
								<p>{about.paragraphLeft}</p>
							</div>
							<div class='span6'>
								<p>{about.paragraphRight}</p>
							</div>
						</div>
						<div class='info-lead'>
							{about.finishingHeading.map((text) => (
								<Span text={text} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
