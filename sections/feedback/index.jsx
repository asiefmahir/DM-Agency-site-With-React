const Feedback = () => {
	return (
		<section id='feedback'>
			<div class='container'>
				<div class='row'>
					<div class='span12'>
						<div class='title'>Feedback form</div>
						<div class='result'></div>

						<form class='well'>
							<div class='row'>
								<div class='span6 pull-left'>
									<label>Your name</label>
									<input
										class='span6'
										type='text'
										name='name'
										placeholder='Your Name'
									/>
								</div>
								<div class='span6 pull-right'>
									<label>Your e-mail</label>
									<input
										class='span6'
										type='text'
										name='email'
										placeholder='Your E-mail'
									/>
								</div>
							</div>
							<div class='row'>
								<div class='span12 textarea-margin'>
									<label>Message</label>
									<textarea
										class='span12'
										rows='6'
										name='message'
										placeholder='Message'></textarea>
									<button type='submit' class='btn rounded color'>
										<i class='web-icon'>8</i>Send Message
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feedback;
