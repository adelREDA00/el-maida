import juiceImg from '../assets/jusorange.png'
import leafImg from '../assets/leaf.png'
import cowbg from '../assets/cowbg.png'
import Dobg from '../assets/Dobg.png'
import homeImg from '../assets/liquid-fruit.png'

import apple1 from '../assets/apple1.png'
import apple2 from '../assets/apple2.png'

import orange1 from '../assets/or9.png'
import orange2 from '../assets/or8.png'
import ananas1 from '../assets/an9.png'
import ananas2 from '../assets/an8.png'

import peach from '../assets/peach.png'


import cowImg from '../assets/milk.svg'
import { motion ,AnimatePresence} from "framer-motion"

import prod1 from '../assets/prod1.png'
import prod2 from '../assets/prod2.png'
import prod3 from '../assets/prod3.png'
import prod4 from '../assets/jusorange.png'

import MaidaLogo from '../assets/maidaLogo.png'


import myVideo from '../assets/vid.mp4';
import { Link } from 'react-router-dom'
import Transiton from '../comp/Transiton'
import { useState,useEffect } from 'react'

const Home = () => {

  const productImages = [prod1, prod2, prod3,prod4];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 3050);

    return () => clearInterval(interval);
  }, []);

  return (


    
    <>
      <Transiton />

      <motion.div initial={{ opacity: 0}} animate={{ opacity: 1, }}
        exit={{ opacity: 0, }} transition={{ ease: "easeInOut", duration: 0.1, delay: .5 }}>
        <main className="main">

          <section className="home">


            {/* back omg texteur
               <img src={shapefImg} alt="" className="home__shape-bg" />
                */ }

            <div className="home__container container">
              <div className="home__data">
                <h1 className="home__title">
                  Créer de
                  <span>la saveur </span>
                  avec passion
                </h1>
                <p className="home__description">
                Goûtez la différence
        
                </p>
                {/* fix the hover */}
                <a href="#" className="home__button">
                Détails 
                </a>
              </div>

              <div className="home__images">
                 <img src={homeImg} alt="" className="home__liquid" /> 
                 <AnimatePresence mode='wait'>
                 <motion.div
        key={currentImageIndex} // Add the key prop here
        initial={{ opacity: 0,scale: .5 , y:50 }}
        animate={{ opacity: 1,scale: 1, y:0 }}
        exit={{opacity: 0, scale: .5,y:50  }}
        transition={{ duration: .5 , ease: "easeInOut"}}
        className="home__juice-animation"
      >
        <img
          src={productImages[currentImageIndex]}
          className="home__juice"
          alt={`Product ${currentImageIndex + 1}`}
        />
      </motion.div>
                 </AnimatePresence>



                <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: 1.2 }} animate={{ y: 15, rotate: -4, opacity: 1 }} src={apple1} alt="" className="home__apple1" /> 

                <motion.img initial={{ y: -100, opacity: 0 }} transition={{ type: "tween", duration: 1.2, delay: 1 }} animate={{ y: 15, rotate: -4, opacity: 1 }} src={orange1} alt="" className="home__apple2" /> 
             

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

                <h2 className="h2 section-title">Notre engagement envers la qualité et la durabilité</h2>

                <p className="section-text">
                Chez El Maida, nous fabriquons des jus et des produits laitiers en utilisant seulement les ingrédients les plus frais et les plus nutritifs, ainsi que des pratiques durables. De la ferme à la bouteille, nous nous soucions de nos clients, de nos employés et de la planète. Explorez notre gamme de produits délicieux et rafraîchissants et découvrez la différence  !
                </p>

                <ul className="about-list">

                  <li>
                    <div id='first' className="about-card">

                      <h3>En ce qui concerne le goût et la qualité, nous ne faisons aucun compromis .</h3>
                      <br />



                      <div className="flip">

                        <div className="front three">

                          <h1 className="text-shadow">Qualité</h1>
                          <Link className='btn-gradient-2' >
                          EN SAVOIR PLUS
                          </Link>
                        </div>

                        <div className="back three">
                          <h2>Quality</h2>
                          <p>Nous sommes engagés à élaborer des produits laitiers et des jus de haute qualité répondant aux normes de goût les plus élevées.</p>
                        </div>
                      </div>



                    </div>
                  </li>

                  <li>
                    <div id='second' className="about-card">

                      <h3>Rejoignez-nous dans notre mission de protéger l'environnement, une gorgée à la fois.</h3>
                      <br />




                      <div className="flip">

                        <div className="front two">

                          <h1 className="text-shadow">Durabilité</h1>

                          <Link id='btn2' className='btn-gradient-2' >
                          EN SAVOIR PLUS
                          </Link>
                        </div>

                        <div className="back two">
                          <h2>Durabilité</h2>
                          <p>Nous sommes engagés dans des pratiques éthiques et durables, de la sélection des ingrédients à l'emballage.</p>
                        </div>

                      </div>

                    </div>

                  </li>

                  <li>
                    <div id='third' className="about-card">


                      <h3>Choisissez la santé, choisissez El Maida.</h3>
                      <br />
                      <br />
                      <br />


                      <div className="flip ">

                        <div className="front one">

                          <h1 className="text-shadow">Santé et bien-être</h1>
                          <Link id='btn3' className='btn-gradient-2' >
                          EN SAVOIR PLUS
                          </Link>
                        </div>

                        <div className="back one ">
                          <h2>Santé</h2>
                          <p>Nos produits favorisent un mode de vie sain et durable grâce à des ingrédients naturels et nourrissants.</p>
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

                  <h2 className="h2 section-title">La famille est notre priorité.</h2>

                  <p className="section-text">
                  la famille est notre priorité. Nous fabriquons nos produits laitiers et nos jus avec soin, en n'utilisant que les ingrédients les plus frais et les plus nutritifs. Que vous cherchiez un petit-déjeuner sain ou une boisson rafraîchissante pour toute la famille, nous avons ce qu'il vous faut.
                  </p>

                  <Link  className="btn btn-secondary"  to="/About">
                  Découvrez nous
                </Link>

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