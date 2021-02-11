import { useState } from "react";
import { Carousel } from "react-bootstrap";
import PortfolioItem from "../../components/Portfolio/PortfolioItem";
import PortfolioSliderItem from "../../components/Portfolio/PortfolioSliderItem";

const Portfolio = ({ portfolio }) => {
	const { name, excerpt, others, carousels, works } = portfolio;
	console.log(carousels);
	// const [selected, setSelected] = useState("");
	const [activeIndex, setActiveIndex] = useState(0);
	// const handleSelect = (id) => {
	// 	setSelected(id);
	// };
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	return (
		<section id='portfolio' class='page'>
			<div class='container'>
				<div class='row'>
					<div class='span12'>
						<div class='title'>{name}</div>
						<div class='flexslider'>
							<ul>
								<Carousel
									activeIndex={activeIndex}
									onSelect={() => handleSelect(activeIndex)}>
									<PortfolioSliderItem
										carousel={carousels[activeIndex]}
										setActiveIndex={setActiveIndex}
										index={activeIndex}
										length={carousels.length}
									/>
								</Carousel>
							</ul>
						</div>
						<div class='lead'>{excerpt}</div>
						<hr />
						<div class='sub-title visible-desktop'>{others.title}</div>

						<ul class='option-set' data-option-key='filter'>
							{/* <li class='filter-icon hidden-phone'>&#0065;</li> */}
							<li class='filter-icon hidden-phone'>
								<img
									class='filter-icon hidden-phone'
									src={`http://192.168.0.136:4500${others.icon.url}`}
									alt=''
								/>
							</li>
							<a class='selected' href={others.icon.url} data-option-value='*'>
								<span></span>
								{/* {category[0].title} */}
							</a>
							{others.categoy.map((item) => (
								<li key={item.id}>
									<a
										class='selected'
										href={item.url}
										data-option-value='*'
										onClick={() => handleSelect(item.url)}>
										<span></span>
										{item.text}
									</a>
								</li>
							))}
						</ul>

						<div id='posts' class='row isotope '>
							{works.map((work) => (
								<PortfolioItem work={work} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
