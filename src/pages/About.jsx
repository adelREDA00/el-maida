import React from 'react'
import bg1 from '../assets/po2.png'
import bg2 from '../assets/rb1.png'
import bg3 from '../assets/rb2.png'
import bg4 from '../assets/2p.png'
import rb from '../assets/rb3.png'
import pur from '../assets/herobg3.png'
import Transiton from '../comp/Transiton'
import { motion } from "framer-motion"

const About = () => {
  return (

    <>
    <Transiton />
    <motion.div initial={{opacity:0,}} animate={{opacity:1,}} 
    exit={{opacity:0,}} transition={{ease:"easeInOut",duration:0.1,delay:.5}} className="about-page ">

{/* bg image here on the section div
                */ }
      <section className="section hero has-bg-image" aria-label="home"
        style={{backgroundImage: `url(${pur})`}} >
        <div className="container">

          <div className="hero-content">

            <h1 className="h1 hero-title">Crafting project specific solutions with expertise.</h1>

            <p className="hero-text">
              We’re a creative company that focuses on establishing long-term relationships with customers.
            </p>

            <div className="btn-wrapper">

              <a href="#" className="btn btn-primary">Explore Now</a>

              <a href="#" className="btn btn-outline">Contact Us</a>

            </div>

          </div>

          <div className="hero-slider" data-slider>

            <div className="slider-inner">
              <ul className="slider-container" data-slider-container>

                <li className="slider-item">

                  <figure className="img-holder" >
                    <img src={bg4}  alt="" className="img-cover"/>
                  </figure>

                </li>

                <li className="slider-item">

                  <div className="hero-card">
                    <figure className="img-holder"   >
                      <img src={bg1}  alt="hero banner"
                        className="img-cover"/>
                    </figure>

                    <button className="play-btn" aria-label="play adex intro">
                      <ion-icon name="play" aria-hidden="true"></ion-icon>
                    </button>
                  </div>

                </li>

                <li className="slider-item">

                  <figure className="img-holder" >
                    <img src={bg1}  alt="" className="img-cover"/>
                  </figure>

                </li>

              </ul>
            </div>

            <button className="slider-btn prev" aria-label="slide to previous" data-slider-prev>
              <ion-icon name="arrow-back"></ion-icon>
            </button>

            <button className="slider-btn next" aria-label="slide to next" data-slider-next>
              <ion-icon name="arrow-forward"></ion-icon>
            </button>

          </div>

        </div>
      </section>

      <section className="about" aria-labelledby="about-label">
        <div className="container">

          <figure className="about-banner">
            <img src={bg2}   loading="lazy" alt="about banner"
              className="w-100"/>
          </figure>

          <div className="about-content">

            <p className="section-subtitle" id="about-label">Why Choose Us?</p>

            <h2 className="h2 section-title">
              We bring solutions to make life easier for our clients.
            </h2>

            <ul>

              <li className="about-item">
                <div className="accordion-card expanded" data-accordion>

                  <h3 className="card-title">
                    <button className="accordion-btn" data-accordion-btn>
                      <ion-icon name="chevron-down-outline" aria-hidden="true" className="down"></ion-icon>

                      <spna className="span h5">Professional Design</spna>
                    </button>
                  </h3>

                  <p className="accordion-content">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                    sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna,
                    vel.
                  </p>

                </div>
              </li>

              <li className="about-item">
                <div className="accordion-card" data-accordion>

                  <h3 className="card-title">
                    <button className="accordion-btn" data-accordion-btn>
                      <ion-icon name="chevron-down-outline" aria-hidden="true" className="down"></ion-icon>

                      <spna className="span h5">Top-Notch Support</spna>
                    </button>
                  </h3>

                  <p className="accordion-content">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                    sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna,
                    vel.
                  </p>

                </div>
              </li>

              <li className="about-item">
                <div className="accordion-card" data-accordion>

                  <h3 className="card-title">
                    <button className="accordion-btn" data-accordion-btn>
                      <ion-icon name="chevron-down-outline" aria-hidden="true" className="down"></ion-icon>

                      <spna className="span h5">Exclusive Assets</spna>
                    </button>
                  </h3>

                  <p className="accordion-content">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                    sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna,
                    vel.
                  </p>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>


      <section className="section feature" aria-labelledby="feature-label">
        <div className="container">

          <figure className="feature-banner">
            <img src={bg3}     loading="lazy" alt="feature banner"
              className="w-100"/>
          </figure>

          <div className="feature-content">

            <p className="section-subtitle" id="feautre-label">Our Solutions</p>

            <h2 className="h2 section-title">
              We make your spending stress-free for you to have the perfect control.
            </h2>

            <p className="section-text">
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus.
            </p>

            <ul className="feature-list">

              <li>
                <div className="feature-card">

                  <div className="card-icon">
                    <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                  </div>

                  <span className="span">
                    Aenean quam ornare. Curabitur blandit.
                  </span>

                </div>
              </li>

              <li>
                <div className="feature-card">

                  <div className="card-icon">
                    <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                  </div>

                  <span className="span">
                    Nullam quis risus eget urna mollis ornare.
                  </span>

                </div>
              </li>

              <li>
                <div className="feature-card">

                  <div className="card-icon">
                    <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                  </div>

                  <span className="span">
                    Etiam porta euismod malesuada mollis.
                  </span>

                </div>
              </li>

              <li>
                <div className="feature-card">

                  <div className="card-icon">
                    <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                  </div>

                  <span className="span">
                    Vivamus sagittis lacus vel augue rutrum.
                  </span>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>

      <section className="stats" aria-label="our stats">
        <div className="container">

          <ul className="stats-card has-bg-image" style={{backgroundImage: `url(${rb})`}}>

            <li>
              <p className="card-text">
                <span className="h1">7518</span>

                <spna className="span">Completed Projects</spna>
              </p>
            </li>

            <li>
              <p className="card-text">
                <span className="h1">3472</span>

                <spna className="span">Happy Customers</spna>
              </p>
            </li>

            <li>
              <p className="card-text">
                <span className="h1">2184</span>

                <spna className="span">Expert Employees</spna>
              </p>
            </li>

            <li>
              <p className="card-text">
                <span className="h1">4523</span>

                <spna className="span">Awards Won</spna>
              </p>
            </li>

          </ul>

        </div>
      </section>





    </motion.div>
    </>
  )
}

export default About