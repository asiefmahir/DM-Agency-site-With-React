const PortfolioItem = ({ work }) => {
	return (
		<div class='post item span4 isotope-item strategy'>
			{work[0]}
			<a
				href='#'
				rel='group1'
				class='project-wrp fancybox'
				title={work[0].title}>
				<div class='profile-photo'>
					<div class='profile-icon'>&#0102;</div>
					<img src={work[0].thumb} alt={work[0].title} />
				</div>
				<div class='project-name'>{work[0].title}</div>
				<div class='project-client'>{work[0].heading}</div>
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
	);
};

export default PortfolioItem;
