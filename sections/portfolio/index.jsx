import { useState } from "react";
import { Carousel } from "react-bootstrap";
import PortfolioItem from "../../components/Portfolio/PortfolioItem";
import PortfolioSliderItem from "../../components/Portfolio/PortfolioSliderItem";

const Portfolio = ({ portfolio }) => {
	const { name, excerpt, others, carousels, works } = portfolio;
	const [activeIndex, setActiveIndex] = useState(0);
	const [index, setIndex] = useState(0);
	const [category, setCategory] = useState("All");
	const [activeWorks, setActiveWorks] = useState(works);
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	const handleFilter = (category) => {
		setCategory(category);
		if (category !== "All") {
			let filteredWorks = works.filter((work) => work.category === category);
			setActiveWorks(filteredWorks);
			console.log("I am triggered", filteredWorks);
		} else {
			setActiveWorks(works);
		}
	};
	return (
		<section id='portfolio' class='page'>
			<div class='container'>
				<div class='row'>
					<div class='span12'>
						<div class='title'>{name}</div>
						<div class='flexslider'>
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
						</div>
						<div class='lead'>{excerpt}</div>
						<hr />
						<div class='sub-title visible-desktop'>{others.title}</div>

						<ul class='option-set' data-option-key='filter'>
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
								<li key={item.id} style={{ cursor: "pointer" }}>
									<a
										class='selected'
										// href={item.url}
										data-option-value='*'
										onClick={() => handleFilter(item.url)}>
										<span></span>
										{item.text}
									</a>
								</li>
							))}
						</ul>

						<div id='posts' class='row isotope '>
							{activeWorks.map((work) => (
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
