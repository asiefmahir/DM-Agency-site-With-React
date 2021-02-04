import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-brands-svg-icons";
import InputField from "../../components/FeedBack/InputField";
import TextArea from "../../components/FeedBack/TextArea";

const Feedback = ({ feedback }) => {
	return (
		<section id='feedback'>
			<div class='container'>
				<div class='row'>
					<div class='span12'>
						<div class='title'>{feedback.title}</div>
						<div class='result'></div>

						<form class='well'>
							<div class='row'>
								{feedback.field.map((item) => {
									if (item.type !== "textarea") {
										return <InputField item={item} />;
									} else {
										return <TextArea item={item} />;
									}
								})}

								<button type='submit' class='btn rounded color'>
									<FontAwesomeIcon
										icon={`${All}/${feedback.messageLink.url}`}
									/>
									{feedback.messageLink.text}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feedback;
