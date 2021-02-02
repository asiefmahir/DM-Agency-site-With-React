const ServiceItem = ({ service }) => {
	const { title, icon, description } = service;
	return (
		<div class='span2'>
			<div class='service-title'>
				<span class='service-icon'>&#0115;</span>
				{title}
			</div>
			<div class='service-text'>
				<p>{description}</p>
				<hr class='white visible-phone' />
			</div>
		</div>
	);
};

export default ServiceItem;
