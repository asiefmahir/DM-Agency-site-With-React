// import PortfolioNav from "../../components/Portfolio/PortfolioNav";

// const Portfolio = ({ title, description, cardsTitle, navInfos }) => {
// 	return (
// 		<section id='portfolio' class='page'>
// 			<div class='container'>
// 				<div class='row'>
// 					<div class='span12'>
// 						<div class='title'>{title}</div>
// 						<div class='flexslider'>
// 							<ul class='slides'>
// 								<li>
// 									<div class='slider-text'>
// 										<a href='#' class='slider-title'>
// 											Reservator’s Mobile App
// 										</a>
// 										<div class='slider-desc'>
// 											Duis tincidunt erat quam. Etiam placerat sapien elit.
// 											Pellentesque egestas ornare sagittis. Sed augue lorem,
// 											dignissim eget bibendum vitae, scelerisque eget justo.
// 											Class aptent taciti sociosqu ad litora.
// 										</div>
// 									</div>
// 									<img src='img/slider/1.jpg' alt='' />
// 								</li>
// 								<li>
// 									<div class='slider-text'>
// 										<a href='#' class='slider-title'>
// 											Lorem ipsum dolor sit amet, consectetur adipiscing elit
// 										</a>
// 										<div class='slider-desc'>
// 											Pellentesque egestas ornare sagittis. Sed augue lorem,
// 											dignissim eget bibendum vitae, scelerisque eget justo.
// 											Class aptent taciti sociosqu ad litora.
// 										</div>
// 									</div>
// 									<img src='img/slider/2.jpg' alt='' />
// 								</li>
// 								<li>
// 									<div class='slider-text'>
// 										<a href='#' class='slider-title'>
// 											Class aptent taciti
// 										</a>
// 										<div class='slider-desc'>
// 											Lorem ipsum dolor sit amet, adipiscing el. Maecenas neque
// 											diam, luctus at laoreet in, auctor ut tellus. Etiam enim
// 											lacus, ornare et tempor et.
// 										</div>
// 									</div>
// 									<img src='img/slider/3.jpg' alt='' />
// 								</li>
// 							</ul>
// 						</div>
// 						<div class='lead'>{description}</div>
// 						<hr />
// 						<div class='sub-title visible-desktop'>{cardsTitle}</div>
// 						<ul class='option-set' data-option-key='filter'>
// 							<li class='filter-icon hidden-phone'>{navInfos.icon}</li>
// 							{navInfos.map((nav) => (
// 								<PortfolioNav nav={nav} />
// 							))}
// 						</ul>

// 						<div id='posts' class='row isotope '>
// 							<div class='post item span4 isotope-item strategy'>
// 								<a
// 									href='img/header1.jpg'
// 									rel='group1'
// 									class='project-wrp fancybox'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0102;</div>
// 										<img
// 											src='img/projects/thumb1.jpg'
// 											alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum.'
// 										/>
// 									</div>
// 									<div class='project-name'>Monelle Photoshoots</div>
// 									<div class='project-client'>Monelle Worldwide Inc.</div>
// 								</a>
// 								<div style={{ display: "none" }}>
// 									<a
// 										href='img/projects/image1.jpg'
// 										rel='group1'
// 										class='project-wrp fancybox'
// 										title='Lorem ipsum dolor sit amet'>
// 										<img
// 											src='img/projects/thumb1.jpg'
// 											alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum.'
// 										/>
// 									</a>
// 								</div>
// 								<div style={{ display: "none" }}>
// 									<a
// 										href='img/projects/image2.jpg'
// 										rel='group1'
// 										class='project-wrp fancybox'
// 										title='Lorem ipsum dolor sit amet'>
// 										<img
// 											src='img/projects/thumb1.jpg'
// 											alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum.'
// 										/>
// 									</a>
// 								</div>
// 								<div style={{ display: "none" }}>
// 									<a
// 										href='img/projects/image3.jpg'
// 										rel='group1'
// 										class='project-wrp fancybox'
// 										title='Lorem ipsum dolor sit amet'>
// 										<img
// 											src='img/projects/thumb1.jpg'
// 											alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum.'
// 										/>
// 									</a>
// 								</div>
// 								<div style={{ display: "none" }}>
// 									<a
// 										href='img/projects/image4.jpg'
// 										rel='group1'
// 										class='project-wrp fancybox'
// 										title='Lorem ipsum dolor sit amet'>
// 										<img
// 											src='img/projects/thumb1.jpg'
// 											alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum.'
// 										/>
// 									</a>
// 								</div>
// 							</div>

// 							<div class='post item span4 isotope-item site'>
// 								<a
// 									href='https://vimeo.com/39557378'
// 									class='project-wrp fancybox-media'
// 									rel='group2'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0098;</div>
// 										<img
// 											src='img/projects/thumb2.jpg'
// 											alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum.'
// 										/>
// 									</div>
// 									<div class='project-name'>Jeep Europe Website</div>
// 									<div class='project-client'>Faces & Glasses</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item app'>
// 								<a
// 									href='img/slider/1.jpg'
// 									rel='group3'
// 									class='project-wrp fancybox'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0102;</div>
// 										<img src='img/projects/thumb3.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>Braker's Portfolio</div>
// 									<div class='project-client'>The XT&Models</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item campaign'>
// 								<a
// 									href='img/slider/2.jpg'
// 									rel='group3'
// 									class='project-wrp fancybox'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0102;</div>
// 										<img src='img/projects/thumb4.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>The Lovefest Campaign</div>
// 									<div class='project-client'>Kolokol Production</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item strategy'>
// 								<a
// 									href='https://vimeo.com/28750788'
// 									rel='group4'
// 									class='project-wrp fancybox-media'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0098;</div>
// 										<img src='img/projects/thumb5.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>Lifevent Digital</div>
// 									<div class='project-client'>Lifevent Ltd.</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item campaign'>
// 								<a
// 									href='https://vimeo.com/39907107'
// 									rel='group5'
// 									class='project-wrp fancybox-media'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0098;</div>
// 										<img src='img/projects/thumb6.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>Askent Russian Website</div>
// 									<div class='project-client'>Askent France</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item app'>
// 								<a
// 									href='img/slider/3.jpg'
// 									rel='group5'
// 									class='project-wrp fancybox'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0102;</div>
// 										<img src='img/projects/thumb7.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>Catwoman Facebook Game</div>
// 									<div class='project-client'>Crystal Media Ltd.</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item site'>
// 								<a
// 									href='http://themes.tvda.eu/demos/rudermann/dark/img/blog/slider/image2.jpg'
// 									rel='group1'
// 									class='project-wrp fancybox'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0102;</div>
// 										<img src='img/projects/thumb8.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>Bit Games Website</div>
// 									<div class='project-client'>Bit Games Russia</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item strategy'>
// 								<a
// 									href='http://themes.tvda.eu/demos/rudermann/dark/img/blog/slider/image3.jpg'
// 									rel='group1'
// 									class='project-wrp fancybox'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0102;</div>
// 										<img src='img/projects/thumb9.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>Western Story Game</div>
// 									<div class='project-client'>The Mille Corparation</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item strategy'>
// 								<a
// 									href='http://themes.tvda.eu/demos/rudermann/dark/img/blog/slider/image4.jpg'
// 									rel='group1'
// 									class='project-wrp fancybox'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0102;</div>
// 										<img src='img/projects/thumb10.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>Guide Club App</div>
// 									<div class='project-client'>Guide Club Inc.</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item site'>
// 								<a
// 									href='http://themes.tvda.eu/demos/rudermann/dark/img/blog/slider/image1.jpg'
// 									rel='group1'
// 									class='project-wrp fancybox'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0102;</div>
// 										<img src='img/projects/thumb11.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>Feary London House</div>
// 									<div class='project-client'>Feary House</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item campaign'>
// 								<a
// 									href='http://themes.tvda.eu/demos/rudermann/dark/img/portfolio/project-image1.jpg'
// 									rel='group1'
// 									class='project-wrp fancybox'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0102;</div>
// 										<img src='img/projects/thumb12.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>UpGlasses Online</div>
// 									<div class='project-client'>UpGlasses Company</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item site'>
// 								<a
// 									href='https://vimeo.com/34134308'
// 									rel='group6'
// 									class='project-wrp fancybox-media'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0098;</div>
// 										<img src='img/projects/thumb13.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>Aeromania Online</div>
// 									<div class='project-client'>Aeromania Ltd.</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item app'>
// 								<a
// 									href='https://vimeo.com/18910993'
// 									rel='group7'
// 									class='project-wrp fancybox-media'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0098;</div>
// 										<img src='img/projects/thumb14.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>The Fear Mobile</div>
// 									<div class='project-client'>EEA Games</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item campaign'>
// 								<a
// 									href='https://vimeo.com/2165451'
// 									rel='group8'
// 									class='project-wrp fancybox-media'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0098;</div>
// 										<img src='img/projects/thumb15.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>UStock Ad Campaign</div>
// 									<div class='project-client'>UStock Company</div>
// 								</a>
// 							</div>

// 							<div class='post item span4 isotope-item site'>
// 								<a
// 									href='http://2.s3.envato.com/files/40492763/index.jpg'
// 									rel='group1'
// 									class='project-wrp fancybox'
// 									title='Lorem ipsum dolor sit amet'>
// 									<div class='profile-photo'>
// 										<div class='profile-icon'>&#0102;</div>
// 										<img src='img/projects/thumb16.jpg' alt='' />
// 									</div>
// 									<div class='project-name'>Rudermann Website</div>
// 									<div class='project-client'>TVDA</div>
// 								</a>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Portfolio;

const Portfolio = () => {
	return (
		<section id='portfolio' class='page'>
			<div class='container'>
				<div class='row'>
					<div class='span12'>
						<div class='title'>Portfolio</div>
						<div class='flexslider'>
							<ul class='slides'>
								<li>
									<div class='slider-text'>
										<a href='#' class='slider-title'>
											Reservator’s Mobile App
										</a>
										<div class='slider-desc'>
											Duis tincidunt erat quam. Etiam placerat sapien elit.
											Pellentesque egestas ornare sagittis. Sed augue lorem,
											dignissim eget bibendum vitae, scelerisque eget justo.
											Class aptent taciti sociosqu ad litora.
										</div>
									</div>
									<img src='img/slider/1.jpg' alt='' />
								</li>
								<li>
									<div class='slider-text'>
										<a href='#' class='slider-title'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit
										</a>
										<div class='slider-desc'>
											Pellentesque egestas ornare sagittis. Sed augue lorem,
											dignissim eget bibendum vitae, scelerisque eget justo.
											Class aptent taciti sociosqu ad litora.
										</div>
									</div>
									<img src='img/slider/2.jpg' alt='' />
								</li>
								<li>
									<div class='slider-text'>
										<a href='#' class='slider-title'>
											Class aptent taciti
										</a>
										<div class='slider-desc'>
											Lorem ipsum dolor sit amet, adipiscing el. Maecenas neque
											diam, luctus at laoreet in, auctor ut tellus. Etiam enim
											lacus, ornare et tempor et.
										</div>
									</div>
									<img src='img/slider/3.jpg' alt='' />
								</li>
							</ul>
						</div>
						<div class='lead'>
							Duis tincidunt erat quam. Etiam placerat sapien elit. Pellentesque
							egestas ornare sagittis. Sed augue lorem, dignissim eget bibendum
							vitae, scelerisque eget justo. Class aptent taciti sociosqu ad
							litora torquent per conubia nostra, per inceptos himenaeos.
						</div>
						<hr />
						<div class='sub-title visible-desktop'>Other works:</div>

						<ul class='option-set' data-option-key='filter'>
							<li class='filter-icon hidden-phone'>&#0065;</li>
							<li>
								<a class='selected' href='#filter' data-option-value='*'>
									<span></span>All projects
								</a>
							</li>
							<li>
								<a href='#filter' data-option-value='.site'>
									<span></span>Web-sites
								</a>
							</li>
							<li>
								<a href='#filter' data-option-value='.app'>
									<span></span>Mobile Apps
								</a>
							</li>
							<li>
								<a href='#filter' data-option-value='.campaign'>
									<span></span>Ad Campaign
								</a>
							</li>
							<li>
								<a href='#filter' data-option-value='.strategy'>
									<span></span>Strategy
								</a>
							</li>
						</ul>

						<div id='posts' class='row isotope '>
							<div class='post item span4 isotope-item strategy'>
								<a
									href='img/header1.jpg'
									rel='group1'
									class='project-wrp fancybox'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0102;</div>
										<img
											src='img/projects/thumb1.jpg'
											alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum.'
										/>
									</div>
									<div class='project-name'>Monelle Photoshoots</div>
									<div class='project-client'>Monelle Worldwide Inc.</div>
								</a>
								<div style={{ display: "none" }}>
									<a
										href='img/projects/image1.jpg'
										rel='group1'
										class='project-wrp fancybox'
										title='Lorem ipsum dolor sit amet'>
										<img
											src='img/projects/thumb1.jpg'
											alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum.'
										/>
									</a>
								</div>
								<div style={{ display: "none" }}>
									<a
										href='img/projects/image2.jpg'
										rel='group1'
										class='project-wrp fancybox'
										title='Lorem ipsum dolor sit amet'>
										<img
											src='img/projects/thumb1.jpg'
											alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum.'
										/>
									</a>
								</div>
								<div style={{ display: "none" }}>
									<a
										href='img/projects/image3.jpg'
										rel='group1'
										class='project-wrp fancybox'
										title='Lorem ipsum dolor sit amet'>
										<img
											src='img/projects/thumb1.jpg'
											alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum.'
										/>
									</a>
								</div>
								<div style={{ display: "none" }}>
									<a
										href='img/projects/image4.jpg'
										rel='group1'
										class='project-wrp fancybox'
										title='Lorem ipsum dolor sit amet'>
										<img
											src='img/projects/thumb1.jpg'
											alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum.'
										/>
									</a>
								</div>
							</div>

							<div class='post item span4 isotope-item site'>
								<a
									href='https://vimeo.com/39557378'
									class='project-wrp fancybox-media'
									rel='group2'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0098;</div>
										<img
											src='img/projects/thumb2.jpg'
											alt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum.'
										/>
									</div>
									<div class='project-name'>Jeep Europe Website</div>
									<div class='project-client'>Faces & Glasses</div>
								</a>
							</div>

							<div class='post item span4 isotope-item app'>
								<a
									href='img/slider/1.jpg'
									rel='group3'
									class='project-wrp fancybox'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0102;</div>
										<img src='img/projects/thumb3.jpg' alt='' />
									</div>
									<div class='project-name'>Braker's Portfolio</div>
									<div class='project-client'>The XT&Models</div>
								</a>
							</div>

							<div class='post item span4 isotope-item campaign'>
								<a
									href='img/slider/2.jpg'
									rel='group3'
									class='project-wrp fancybox'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0102;</div>
										<img src='img/projects/thumb4.jpg' alt='' />
									</div>
									<div class='project-name'>The Lovefest Campaign</div>
									<div class='project-client'>Kolokol Production</div>
								</a>
							</div>

							<div class='post item span4 isotope-item strategy'>
								<a
									href='https://vimeo.com/28750788'
									rel='group4'
									class='project-wrp fancybox-media'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0098;</div>
										<img src='img/projects/thumb5.jpg' alt='' />
									</div>
									<div class='project-name'>Lifevent Digital</div>
									<div class='project-client'>Lifevent Ltd.</div>
								</a>
							</div>

							<div class='post item span4 isotope-item campaign'>
								<a
									href='https://vimeo.com/39907107'
									rel='group5'
									class='project-wrp fancybox-media'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0098;</div>
										<img src='img/projects/thumb6.jpg' alt='' />
									</div>
									<div class='project-name'>Askent Russian Website</div>
									<div class='project-client'>Askent France</div>
								</a>
							</div>

							<div class='post item span4 isotope-item app'>
								<a
									href='img/slider/3.jpg'
									rel='group5'
									class='project-wrp fancybox'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0102;</div>
										<img src='img/projects/thumb7.jpg' alt='' />
									</div>
									<div class='project-name'>Catwoman Facebook Game</div>
									<div class='project-client'>Crystal Media Ltd.</div>
								</a>
							</div>

							<div class='post item span4 isotope-item site'>
								<a
									href='http://themes.tvda.eu/demos/rudermann/dark/img/blog/slider/image2.jpg'
									rel='group1'
									class='project-wrp fancybox'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0102;</div>
										<img src='img/projects/thumb8.jpg' alt='' />
									</div>
									<div class='project-name'>Bit Games Website</div>
									<div class='project-client'>Bit Games Russia</div>
								</a>
							</div>

							<div class='post item span4 isotope-item strategy'>
								<a
									href='http://themes.tvda.eu/demos/rudermann/dark/img/blog/slider/image3.jpg'
									rel='group1'
									class='project-wrp fancybox'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0102;</div>
										<img src='img/projects/thumb9.jpg' alt='' />
									</div>
									<div class='project-name'>Western Story Game</div>
									<div class='project-client'>The Mille Corparation</div>
								</a>
							</div>

							<div class='post item span4 isotope-item strategy'>
								<a
									href='http://themes.tvda.eu/demos/rudermann/dark/img/blog/slider/image4.jpg'
									rel='group1'
									class='project-wrp fancybox'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0102;</div>
										<img src='img/projects/thumb10.jpg' alt='' />
									</div>
									<div class='project-name'>Guide Club App</div>
									<div class='project-client'>Guide Club Inc.</div>
								</a>
							</div>

							<div class='post item span4 isotope-item site'>
								<a
									href='http://themes.tvda.eu/demos/rudermann/dark/img/blog/slider/image1.jpg'
									rel='group1'
									class='project-wrp fancybox'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0102;</div>
										<img src='img/projects/thumb11.jpg' alt='' />
									</div>
									<div class='project-name'>Feary London House</div>
									<div class='project-client'>Feary House</div>
								</a>
							</div>

							<div class='post item span4 isotope-item campaign'>
								<a
									href='http://themes.tvda.eu/demos/rudermann/dark/img/portfolio/project-image1.jpg'
									rel='group1'
									class='project-wrp fancybox'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0102;</div>
										<img src='img/projects/thumb12.jpg' alt='' />
									</div>
									<div class='project-name'>UpGlasses Online</div>
									<div class='project-client'>UpGlasses Company</div>
								</a>
							</div>

							<div class='post item span4 isotope-item site'>
								<a
									href='https://vimeo.com/34134308'
									rel='group6'
									class='project-wrp fancybox-media'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0098;</div>
										<img src='img/projects/thumb13.jpg' alt='' />
									</div>
									<div class='project-name'>Aeromania Online</div>
									<div class='project-client'>Aeromania Ltd.</div>
								</a>
							</div>

							<div class='post item span4 isotope-item app'>
								<a
									href='https://vimeo.com/18910993'
									rel='group7'
									class='project-wrp fancybox-media'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0098;</div>
										<img src='img/projects/thumb14.jpg' alt='' />
									</div>
									<div class='project-name'>The Fear Mobile</div>
									<div class='project-client'>EEA Games</div>
								</a>
							</div>

							<div class='post item span4 isotope-item campaign'>
								<a
									href='https://vimeo.com/2165451'
									rel='group8'
									class='project-wrp fancybox-media'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0098;</div>
										<img src='img/projects/thumb15.jpg' alt='' />
									</div>
									<div class='project-name'>UStock Ad Campaign</div>
									<div class='project-client'>UStock Company</div>
								</a>
							</div>

							<div class='post item span4 isotope-item site'>
								<a
									href='http://2.s3.envato.com/files/40492763/index.jpg'
									rel='group1'
									class='project-wrp fancybox'
									title='Lorem ipsum dolor sit amet'>
									<div class='profile-photo'>
										<div class='profile-icon'>&#0102;</div>
										<img src='img/projects/thumb16.jpg' alt='' />
									</div>
									<div class='project-name'>Rudermann Website</div>
									<div class='project-client'>TVDA</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
