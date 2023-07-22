import React from 'react'
import Transiton from '../comp/Transiton'
import { motion } from "framer-motion"

const Contact = () => {
  return (

    <>


      <Transiton />
      <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, }}
        exit={{ opacity: 0, }} transition={{ ease: "easeInOut", duration: 0.1, delay: .5 }} className='contactpage '>


        <main>
          <article>

            {/* bg image here on the section div
                */ }

            <section className="section contact has-bg-image" aria-labelledby="contact-label"
            >
              <div className="container">

                <form action="" className="contact-form">

                  <h2 className="headline-sm" id="contact-label">👋 Get in touch</h2>

                  <p className="contact-text body-md">
                    Notre équipe sympathique serait ravie de vous entendre.
                  </p>

                  <div className="wrapper">

                    <div>
                      <label for="name" className="label">Nom</label>

                      <input type="text" name="Nom" id="name" placeholder="Nom *" required className="input-field" />
                    </div>

                    <div>
                      <label for="email" className="label">Votre Email </label>

                      <input type="email" name="email" id="email" placeholder="Email *" required className="input-field" />
                    </div>

                  </div>

                  <label for="subject" className="label">Objet</label>
                  <input type="text" name="Objet" id="subject" placeholder="Objet *" className="input-field" />

                  <label for="message" className="label">Votre message </label>
                  <textarea name="message" id="message" placeholder="Votre message *" required className="input-field"></textarea>

                  <a href="#" className="btn"> <ion-icon name="send-outline" ></ion-icon> Send Message</a>

                </form>



                <div className="contact-content">

                  <ul className="contact-list">

                    <li className="contact-item">

                      <div className="item-icon" style={{ backgroundColor: "hsl(177, 39%, 72%)" }} >
                        <ion-icon name="call" aria-hidden="true"></ion-icon>
                      </div>

                      <div>
                        <p className="label-lg">Phone</p>

                        <a href="tel:+011236548096" className="body-lg">+01 123 654 8096</a>
                      </div>

                    </li>

                    <li className="contact-item">

                      <div className="item-icon" style={{ backgroundColor: " hsl(19, 97%, 85%)" }}>
                        <ion-icon name="mail" aria-hidden="true"></ion-icon>
                      </div>

                      <div>
                        <p className="label-lg">Mail</p>

                        <a href="tel:info@domainname.com" className="body-lg">info@elmaida.com</a>
                      </div>

                    </li>

                    <li className="contact-item">

                      <div className="item-icon" style={{ backgroundColor: "hsl(41, 99%, 64%)" }}>
                        <ion-icon name="location" aria-hidden="true"></ion-icon>
                      </div>

                      <div>
                        <p className="label-lg">Visit My Studio</p>

                        <address className="body-lg">
                          Annaba 
                        </address>
                      </div>

                    </li>

                  </ul>

                </div>



              </div>
            </section>

          </article>


          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10350.975598510533!2d7.746633393133448!3d36.902558292209854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps!5e0!3m2!1sen!2sdz!4v1684106576368!5m2!1sen!2sdz"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />






        </main>
      </motion.div>
    </>
  )
}

export default Contact