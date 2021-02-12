import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-brands-svg-icons";

const PortfolioSliderItem = ({ length, carousel, index, setActiveIndex }) => {
	const { id, title, subTitle, image } = carousel;
	console.log(carousel);
	return (
		<Carousel.Item key={id}>
			<div class='slider-text'>
				<Carousel.Caption>
					<a href='#' class='slider-title'>
						{title}
					</a>
					<div class='slider-desc'>{subTitle}</div>
				</Carousel.Caption>
			</div>
			<div className="slider-img-wrap">
				<img className="slider-img" src={`http://192.168.0.136:4500${image.url}`} alt={title} />
			</div>
			<div className='carousel-next-prev-icons'>
				<FontAwesomeIcon
					className='carousel-icon carousel-prev-icon'
					icon={All.faAngrycreative}
					onClick={() => {
						console.log(index);
						if (index === 0) {
							setActiveIndex(length - 1);
						} else {
							setActiveIndex((prev) => prev - 1);
						}
					}}
				/>
				<FontAwesomeIcon
					className='carousel-icon carousel-next-icon'
					icon={All.faAngrycreative}
					onClick={() => {
						if (index == length - 1) {
							setActiveIndex(0);
						} else {
							setActiveIndex((prev) => prev + 1);
						}
					}}
				/>
			</div>
		</Carousel.Item>
	);
};

export default PortfolioSliderItem;
