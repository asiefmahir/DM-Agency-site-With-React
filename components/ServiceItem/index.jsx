import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-brands-svg-icons";

const ServiceItem = ({ service }) => {
	const { name, iconText, description } = service;
	return (
		<div class='span2'>
			<div class='service-title'>
				<span class='service-icon'>
					<FontAwesomeIcon icon={`${All}/${iconText}`} />
				</span>
				{name}
			</div>
			<div class='service-text'>
				<p>{description}</p>
				<hr class='white visible-phone' />
			</div>
		</div>
	);
};

export default ServiceItem;
