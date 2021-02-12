import { useState } from "react";
import ReactModal from "react-modal";
import { Carousel } from "react-bootstrap";

import PortfolioModalSliderItem from "./PortfolioModalSliderItem";

ReactModal.setAppElement("#root");

const PortfolioItem = ({ work }) => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	const [activeIndex, setActiveIndex] = useState(0);

	const [active, setActive] = useState(false);
	// console.log(active);
	return (
		<div class='post item span4 isotope-item strategy'>
			<a
				onClick={() => setActive(true)}
				href={work.thumb.url}
				rel={work.category}
				className='project-wrp fancybox'
				title={work.title}>
				<div class='profile-photo'>
					<div class='profile-icon'>&#0102;</div>
					<img
						src={`http://192.168.0.136:4500${work.thumb[0].url}`}
						alt={work.title}
					/>
					<div class='project-name'>{work.title}</div>
					<div class='project-client'>{work.subTitle}</div>
				</div>
			</a>
			{active && (
				<div style={{ border: "1px solid red" }}>
					<ReactModal
						isOpen={active}
						onRequestClose={() => {
							setActive(false);
						}}>
						<Carousel
							activeIndex={activeIndex}
							onSelect={() => handleSelect(activeIndex)}>
							<PortfolioModalSliderItem
								modal={work.ModalSection[activeIndex]}
								index={activeIndex}
								setActiveIndex={setActiveIndex}
								length={work.ModalSection.length}
							/>
						</Carousel>
					</ReactModal>
				</div>
			)}
		</div>
	);
};

export default PortfolioItem;
