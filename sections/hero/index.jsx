import SloganText from "../../components/Home/SloganText";
import Logo from "../../components/Home/Logo";
import Nav from "../../components/Home/Nav";
import MainText from "../../components/Home/MainText";

const Hero = () => {
	return (
		<header id='home'>
			<div className='pattern'></div>
			<div className='container'>
				<div className='row'>
					<div className='span12'>
						<nav id='topnav'>
							<div className='row'>
								<Logo />
								<Nav />
							</div>
						</nav>
						<div>
							<SloganText />
							<MainText />
						</div>

						<script>$(window).resize();</script>

						<div className='scroll-links'>
							<a href='#about' className='nextslide'>
								<span>Who we are?</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Hero;
