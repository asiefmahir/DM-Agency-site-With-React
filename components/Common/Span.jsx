const Span = ({ text }) => {
	return <span style={{ color: `${text.variantColor}` }}>{text.text}</span>;
};

export default Span;
