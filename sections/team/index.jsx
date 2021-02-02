const Team = () => {
	return (
		<section id='team' class='page'>
			<div class='container'>
				<div class='row'>
					<div class='span12'>
						<div class='title'>
							<span class='yellow-text'>Who</span> we are?
						</div>
						<p class='lead'>
							Duis tincidunt erat quam. Etiam placerat sapien elit. Pellentesque
							egestas ornare sagittis. Sed augue lorem, dignissim eget bibendum
							vitae, scelerisque eget justo. Class aptent taciti sociosqu ad
							litora torquent per conubia nostra, per inceptos himenaeos.
						</p>
						<div class='row'>
							<div class='span3 profile'>
								<img src='img/team/profile1.jpg' alt='' />
								<div class='profile-name'>Michael Goltsman</div>
								<div class='profile-job'>Chief Executive Officer</div>
								<div class='profile-desc'>
									<p>
										Lorem ipsum dolor sit amet, adipiscing elit. Maecenas neque
										diam, luctus at laoreet in, auctor ut tellus. Etiam enim
										lacus, ornare et tempor et, rhoncus sem.
									</p>
								</div>
								<ul class='profile-social-icons'>
									<li>
										<a href='#'>&#228;</a>
									</li>
									<li>
										<a href='#t'>&#231;</a>
									</li>
									<li>
										<a href='#'>&#235;</a>
									</li>
								</ul>
							</div>

							<div class='span3 profile'>
								<img src='img/team/profile2.jpg' alt='' />
								<div class='profile-name'>Aaron James Fox</div>
								<div class='profile-job'>Digital Creative Director</div>
								<div class='profile-desc'>
									<p>
										Duis tincidunt erat quam. Etiam placerat sapien elit.
										Pellentesque egestas ornare sagittis. Sed augue lorem,
										dignissim eget bibendum vitae, scelerisque eget justo.
									</p>
								</div>
								<ul class='profile-social-icons'>
									<li>
										<a href='#'>&#228;</a>
									</li>
									<li>
										<a href='#t'>&#231;</a>
									</li>
									<li>
										<a href='#'>&#235;</a>
									</li>
								</ul>
							</div>

							<div class='span3 profile'>
								<img src='img/team/profile3.jpg' alt='' />
								<div class='profile-name'>Paul Getter</div>
								<div class='profile-job'>Technical Director</div>
								<div class='profile-desc'>
									<p>
										Praesent rhoncus nunc vitae metus condimentum viverra. Fusce
										sed est orci, vel condimentum felis. Suspendisse ullamcorper
										vulputate sagittis.
									</p>
								</div>
								<ul class='profile-social-icons'>
									<li>
										<a href='#'>&#228;</a>
									</li>
									<li>
										<a href='#t'>&#231;</a>
									</li>
									<li>
										<a href='#'>&#235;</a>
									</li>
								</ul>
							</div>

							<div class='span3 profile'>
								<img src='img/team/profile4.jpg' alt='' />
								<div class='profile-name'>Sergey Kvasov</div>
								<div class='profile-job'>Art Director</div>
								<div class='profile-desc'>
									<p>
										Lorem ipsum dolor sit amet, adipiscing elit. Maecenas neque
										diam, luctus at laoreet in, auctor ut tellus. Etiam enim
										lacus, ornare et tempor et, rhoncus sem.
									</p>
								</div>
								<ul class='profile-social-icons'>
									<li>
										<a href='#'>&#228;</a>
									</li>
									<li>
										<a href='#t'>&#231;</a>
									</li>
									<li>
										<a href='#'>&#235;</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;

// import Member from "../../components/Team/Member";

// const Team = ({ title, description, members }) => {
// 	return (
// 		<section id='team' class='page'>
// 			<div class='container'>
// 				<div class='row'>
// 					<div class='span12'>
// 						<div class='title'>
// 							<span class='yellow-text'>Who</span> we are?
// 						</div>
// 						<p class='lead'>{description}</p>
// 						{members.map((member) => (
// 							<Member member={member} />
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };
