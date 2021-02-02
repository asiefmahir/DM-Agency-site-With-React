const PortfolioNav = ({ nav }) => {
	return (
		<li>
			<a class='selected' href='#filter' data-option-value='*'>
				<span></span>
				{nav.title}
			</a>
		</li>
	);
};

export default PortfolioNav;
