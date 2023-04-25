import juiceImg from '../assets/jusorange.png'
import leafImg from '../assets/leaf.png'
import cowbg from '../assets/cowbg.png'
import Dobg from '../assets/Dobg.png'
import cowImg from '../assets/milk.svg'
import { motion } from "framer-motion"
import MaidaLogo from '../assets/maidaLogo.png'
import myVideo from '../assets/vid.mp4';
import { Link } from 'react-router-dom'
import Transiton from '../comp/Transiton'

const Home = () => {


  return (
    <>
      <Transiton />

      <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, }}
        exit={{ opacity: 0, }} transition={{ ease: "easeInOut", duration: 0.1, delay: .5 }}>
        <main className="main">

          <section className="home">


            {/* back omg texteur
               <img src={shapefImg} alt="" className="home__shape-bg" />
                */ }

            <div className="home__container container">
              <div className="home__data">
                <h1 className="home__title">
                  Crafting
                  <span>flavor </span>
                  with passion
                </h1>
                <p className="home__description">
                  Find your perfect sip among our <br />
                  diverse range of refreshments
                </p>
                {/* fix the hover */}
                <a href="#" className="home__button">
                  Details
                </a>
              </div>

              <div className="home__images">
                {/*     <img src={homeImg} alt="" className="home__liquid" /> */}

                <motion.div initial={{ y: -100, opacity: 0, scale: .8 }} transition={{ type: "tween", duration: 1.4 }} animate={{ y: 0, opacity: 1, scale: 1 }} className="home__juice-animation">
                  <img src={MaidaLogo} alt="" className="home__juice" />
                </motion.div>



                <div>
                  <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: .6 }} animate={{ y: 15, rotate: -4, opacity: 1 }} src={leafImg} alt="" className="home__leaf" />
                  <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: .5 }} animate={{ y: 0, rotate: -36, opacity: 1 }} src={leafImg} alt="" className="home__leaf" />
                  <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: .4 }} animate={{ y: 0, rotate: 25, opacity: 1 }} src={leafImg} alt="" className="home__leaf" />
                  <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: .5 }} animate={{ y: 0, rotate: 45, opacity: 1 }} src={leafImg} alt="" className="home__leaf" />
                  <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: .7 }} animate={{ y: 0, rotate: 16, opacity: 1 }} src={leafImg} alt="" className="home__leaf" />


                </div>
              </div>
            </div>
          </section>
        </main>

        <section className="aboutmain">


          <section className="about" id="about">

            <div className="container">

              <div className="about-top">

                <h2 className="h2 section-title">Our Commitment to Quality and Sustainability</h2>

                <p className="section-text">
                  At El Maida, we craft juice and milk products using only the freshest, most nutritious ingredients, and sustainable practices. From farm to bottle, we care about our customers, our employees, and the planet. Explore our range of delicious and refreshing products and discover the El Maida difference!
                </p>

                <ul className="about-list">

                  <li>
                    <div id='first' className="about-card">

                      <h3>When it comes to taste and quality, we don't compromise.</h3>
                      <br />



                      <div className="flip">

                        <div className="front three">

                          <h1 className="text-shadow">Quality</h1>
                          <Link  className='btn-gradient-2' >
                            LEARN MORE
                          </Link>
                        </div>

                        <div className="back three">
                          <h2>Quality</h2>
                          <p>We are committed to crafting high-quality juice and milk products that meet the highest standards of taste.</p>
                        </div>
                      </div>



                    </div>
                  </li>

                  <li>
                    <div id='second' className="about-card">

                      <h3>Join us in our mission to protect the environment, one sip at a time.</h3>
                      <br />




                      <div className="flip">

                        <div className="front two">

                          <h1 className="text-shadow">Sustainability</h1>

                          <Link id='btn2' className='btn-gradient-2' >
                            LEARN MORE
                          </Link>
                        </div>

                        <div className="back two">
                          <h2>Sustainability</h2>
                          <p>We're committed to ethical and sustainable practices, from ingredients to packaging.</p>
                        </div>

                      </div>

                    </div>

                  </li>

                  <li>
                    <div id='third' className="about-card">


                      <h3>Choose health, choose El Maida.</h3>
                      <br />
                      <br />
                      <br />


                      <div className="flip ">

                        <div className="front one">

                          <h1 className="text-shadow">Health and wellness</h1>
                          <Link  id='btn3' className='btn-gradient-2' >
                            LEARN MORE
                          </Link>
                        </div>

                        <div className="back one ">
                          <h2>Health and wellness</h2>
                          <p>Our products promote healthy, sustainable living with natural and nourishing ingredients.</p>
                        </div>

                      </div>
                    </div>
                  </li>

                </ul>

              </div>

              <div className="about-bottom">

                <figure className="about-bottom-banner">
                  <img src={MaidaLogo} alt="about banner" className="about-banner" />
                </figure>

                <div className="about-bottom-content">

                  <h2 className="h2 section-title">We’re obsessed with growth</h2>

                  <p className="section-text">
                    Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
                    development of
                    the asset through its charitable foundation.
                  </p>

                  <button className="btn btn-secondary">Sign Up For Free</button>

                </div>

              </div>

            </div>
          </section>
        </section>


        {/* vertical flip img 
                     <div className="testy">

     
        <div className="flip flip-vertical">

          <div className="front">

            <h1 className="text-shadow">MOUNTAIN</h1>
          </div>

          <div className="back">
            <h2>Angular</h2>
            <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
          </div>


        </div>
      </div>
                */ }
      </motion.div>
    </>
  )
}

export default Home