const TextArea = ({ item }) => {
	return (
		<div class='span12 textarea-margin'>
			<label>{item.placeholder}</label>
			<textarea
				class='span12'
				rows='6'
				name={item.name}
				placeholder={item.placeholder}></textarea>
		</div>
	);
};

export default TextArea;
