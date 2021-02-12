import Span from "../../components/Common/Span";

const About = ({ about }) => {
	return (
		<section id='about' className='page'>
			<div className='container'>
				<div className='row'>
					<div className='span12'>
						<div className='title'>
							{about.title.map((text) => (
								<Span key={text} text={text} />
							))}
						</div>
						<div className='lead'>{about.excerpt}</div>
						<div className='row two-columns'>
							<div className='span6'>
								<p>{about.paragraphLeft}</p>
							</div>
							<div className='span6'>
								<p>{about.paragraphRight}</p>
							</div>
						</div>
						<div className='info-lead'>
							{about.finishingHeading.map((text) => (
								<Span key={text} text={text} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
