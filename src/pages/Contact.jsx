import React from 'react'
import Transiton from '../comp/Transiton'
import { motion } from "framer-motion"

const Contact = () => {
  return (

    <>

    
<Transiton />
    <motion.div initial={{opacity:0,}} animate={{opacity:1,}} 
    exit={{opacity:0,}} transition={{ease:"easeInOut",duration:0.1,delay:.5}} className='contactpage '>

        
  <main>
    <article>

{/* bg image here on the section div
                */ }

      <section className="section contact has-bg-image" aria-labelledby="contact-label"
      >
        <div className="container">

          <form action="" className="contact-form">

            <h2 className="headline-sm" id="contact-label">Get in touch</h2>

            <p className="contact-text body-md">
              Our friendly team would love to hear from you.
            </p>

            <div className="wrapper">

              <div>
                <label for="name" className="label">First name</label>

                <input type="text" name="name" id="name" placeholder="Name *" required className="input-field"/>
              </div>

              <div>
                <label for="email" className="label">Your Email </label>

                <input type="email" name="email" id="email" placeholder="Email *" required className="input-field"/>
              </div>

            </div>

            <label for="subject" className="label">Subject</label>
            <input type="text" name="subject" id="subject" placeholder="Subject *" className="input-field"/>

            <label for="message" className="label">Your message </label>
            <textarea name="message" id="message" placeholder="Your message *" required className="input-field"></textarea>

            <a href="#" className="btn"> <ion-icon name="send-outline" ></ion-icon> Send Message</a>

          </form>

          <div className="contact-content">

            <ul className="contact-list">

              <li className="contact-item">

                <div className="item-icon" style= {{backgroundColor: "hsl(177, 39%, 72%)"}} >
                  <ion-icon name="call" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <p className="label-lg">Phone</p>

                  <a href="tel:+011236548096" className="body-lg">+01 123 654 8096</a>
                </div>

              </li>

              <li className="contact-item">

                <div className="item-icon" style= {{backgroundColor: " hsl(19, 97%, 85%)"}}>
                  <ion-icon name="mail" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <p className="label-lg">Mail</p>

                  <a href="tel:info@domainname.com" className="body-lg">info@domainname.com</a>
                </div>

              </li>

              <li className="contact-item">

                <div className="item-icon" style= {{backgroundColor: "hsl(41, 99%, 64%)"}}>
                  <ion-icon name="location" aria-hidden="true"></ion-icon>
                </div>

                <div>
                  <p className="label-lg">Visit My Studio</p>

                  <address className="body-lg">
                    Annaba - 23000 / street 21
                  </address>
                </div>

              </li>

            </ul>

          </div>

        </div>
      </section>

    </article>
  </main>
    </motion.div>
    </>
  )
}

export default Contact