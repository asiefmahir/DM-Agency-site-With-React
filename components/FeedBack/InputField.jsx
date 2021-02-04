const InputField = ({ item }) => {
	return (
		<div class='span6 pull-left'>
			<label>{item.placeholder}</label>
			<input
				class='span6'
				type={item.type}
				name={item.name}
				placeholder={item.placeholder}
			/>
		</div>
	);
};

export default InputField;
