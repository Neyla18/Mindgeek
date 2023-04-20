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


                      
						<label htmlFor="message">Votre message : </label>
						<textarea name="message" id="message" cols="100" rows="20"></textarea>

						<input type="submit" value="send" />


					</fieldset>
                    
				</form>

				
			</section>
			<section>
				<h2> Nous rendre visite</h2>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.1376304379996!2d2.351730476482197!3d48.893714171336974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701c64657be9%3A0xbf05ba902bfe4aab!2s3W%20Academy!5e0!3m2!1sfr!2sfr!4v1681994190301!5m2!1sfr!2sfr"
				 width="600" height="450"   style={{ border: 0 }} 
				allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</section>
		</main>
	)
}

export default Contact