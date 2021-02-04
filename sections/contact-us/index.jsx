import Address from "../../components/Contact/Address";

const Contact = ({ contact }) => {
	return (
		<section id='contact' style={{ backgroundColor: "#FEC400" }}>
			<div class='container'>
				<div class='row'>
					<div class='span12'>
						<div class='title'>{contact.title}</div>
						<div class='contact-text'>{contact.excerpt}</div>
						<Address contact={contact} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
