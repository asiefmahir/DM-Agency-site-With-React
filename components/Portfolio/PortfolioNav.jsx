const PortfolioNav = ({ nav }) => {
	return (
		<li>
			<a class='selected' href={nav.url} data-option-value='*'>
				<span></span>
				{nav.title}
			</a>
		</li>
	);
};

export default PortfolioNav;
