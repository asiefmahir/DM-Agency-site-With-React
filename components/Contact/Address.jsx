import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-brands-svg-icons";

// function loadIcon(name) {
// 	const Component = React.lazy(() =>
// 		import(`@fortawesome/free-brands-svg-icons/${name}`),
// 	);
// 	return Component;
// }

const Address = ({ contact }) => {
	return (
		<address>
			{contact.link.map((link) => (
				<div className={link.type}>
					<FontAwesomeIcon icon={`${All}/${link.url}`} />
					{link.text}
				</div>
			))}
		</address>
	);
};

export default Address;
