import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheckSquare, faFrog } from '@fortawesome/free-solid-svg-icons'
import {  faFacebookF,faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Home() {
  return (
    <div>
    <header id="home">
		<div classNameName="pattern"></div>
		<div className="container">
			<div className="row">
				<div className="span12">
					<nav id="topnav">
						<div className="row">
							<div className="span5">
								<a href="index.html"><img className="logo" src="img/logo-b.png" alt=""/></a>
								<div className="logo-status visible-desktop">onepage theme for agencies</div>
							</div>
							<div className="span7">
								<ul id="fixed-nav" className="hidden-phone scroll-links">
									<li className="current"><a href="#home">Home</a></li>
									<li><a href="#about">About Us</a></li>
									<li><a href="#team">Team</a></li>
									<li><a href="#services">Services</a></li>
									<li><a href="#portfolio">Portfolio</a></li>
									<li><a href="#contact">Contact Us</a></li>
									<li><a href="shortcodes.html">Shortcodes</a></li>
								</ul>
								<ul className="social-icons">
									<FontAwesomeIcon icon={faFacebookF} />
									<FontAwesomeIcon icon={faTwitter} />

								</ul>
							</div>
						</div>
					</nav>
					<div id="slogan-text" className="slogan-text">
						<div className="slogan">We love <span className="yellow-text">digital communications</span>.</div>
						<div className="maintext">What are <strong><span className="white-text">Google Fonts</span> <span className="yellow-text">API</span></strong> and Google Fonts? Google Fonts provides high-quality fonts that you can include <span className="white-text">in your pages</span>.</div>
					</div>
					
					<script>
						$(window).resize();
					</script>
					
					<div className="scroll-links">
						<a href="#about" className="nextslide"><span>Who we are?</span></a>
					</div>
					
				</div>
			</div>
		</div>
	</header>
    </div>
  )
}
