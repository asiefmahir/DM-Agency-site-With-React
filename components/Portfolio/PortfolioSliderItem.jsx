// import { useState } from "react";
import { Carousel } from "react-bootstrap";

const PortfolioSliderItem = ({ portfolio }) => {
	const { id, title, description, img } = portfolio;
	// const [index, setIndex] = useState(0);

	// const handleSelect = (selectedIndex) => {
	// 	setIndex(selectedIndex);
	// };
	return (
		<Carousel.Item key={id}>
			<div class='slider-text'>
				<Carousel.Caption>
					<a href='#' class='slider-title'>
						{id}
					</a>
					<div class='slider-desc'>{description}</div>
				</Carousel.Caption>
			</div>
			<img src={img} alt={title} />
		</Carousel.Item>
	);
};

export default PortfolioSliderItem;
