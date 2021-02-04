import Span from "../../Common/Span";

const SloganText = ({ title }) => {
	return (
		<div className='slogan'>
			<div id='slogan-text' className='slogan-text'>
				{title.map((text) => (
					<Span text={text} />
				))}
			</div>
		</div>
	);
};

export default SloganText;
