import React from 'react'

function Contact() {
	return (
		<main>
			<header>
				<h2>Contactez-nous</h2>
			</header>
			    <section>
				<form>
					<fieldset>
						<legend>Nous écrire</legend>


						<label htmlFor="firstName">Votre prénom</label>
						<input type="text" name="firstName" id="firstName" />

						<label htmlFor="name"> Votre nom :</label>
						<input type="text" name="name" id="name" />

						<label htmlFor="name"> Votre email:</label>
						<input type="email" name="name" id="email" />


                      
						<label htmlFor="message">Vos attentes en quelques mots</label>
						<textarea name="message" id="message" cols="100" rows="5"></textarea>

						<input type="submit" value="send" />


					</fieldset>
                    
				</form>
			</section>
		</main>
	)
}

export default Contact