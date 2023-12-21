import React, { useState, useRef, useEffect } from 'react'
import bg1 from '../assets/family.jpg'
import bg2 from '../assets/rb1.png'
import bg3 from '../assets/rb2.png'
import bg4 from '../assets/family.jpg'
import bg5 from '../assets/fam3.jpg'
import bg6 from '../assets/fam2.jpg'


import rb from '../assets/rb3.png'
import pur from '../assets/unbg.png'
import Transiton from '../comp/Transiton'
import { motion, transform } from "framer-motion"
import { Link } from 'react-router-dom'

const About = () => {
  //slider
  const sliderContainer = useRef(null)

  const [currentSlidePos, setCurrentSlidePos] = useState(0)
  const [move, setMove] = useState(0)

  const handleSlide = (e) => {
    let btn = e.currentTarget.dataset.id
    const theEnd = sliderContainer.current.childElementCount - 1;
    const slideEnd = currentSlidePos >= theEnd


    if (btn === "1") {

      if (slideEnd) {
        return setCurrentSlidePos(0)
      } else {
        setCurrentSlidePos((prev) => {
          return prev + 1
        })
      }
    }
    if (btn === "0") {
      if (currentSlidePos <= 0) {
        return setCurrentSlidePos(theEnd)
      } else {
        setCurrentSlidePos((prev) => {
          return prev - 1
        })
      }
    }
  }







  useEffect(() => {

    let adjust = sliderContainer.current.children[currentSlidePos].offsetLeft
    setMove(adjust)
  }, [currentSlidePos]);

  //accordation
  const [clicked, setClicked] = useState("0")

  const handleAccord = (e) => {
    let target = e.currentTarget.dataset.id;
    setClicked(target)
  }
  return (

    <>
      <Transiton />
      <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, }}
        exit={{ opacity: 0, }} transition={{ ease: "easeInOut", duration: 0.1, delay: .5 }} className="about-page ">

        {/* bg image here on the section div
                */ }
        <section className="section hero has-bg-image" aria-label="home"
          style={{ backgroundImage: `url(${pur})` }} >
          <div className="container">

            <div className="hero-content">

              <h1 className="h1 hero-title">Une marque pour toute la famille</h1>

              <p className="hero-text">
                Notre mission est de vous offrir une expérience gustative inoubliable, tout en favorisant une vie saine et durable pour vous et votre famille.
              </p>

              <div className="btn-wrapper">

                <Link className="btn btn-primary" to="/collections">
                  Explorez
                </Link>

         

                <Link className="btn btn-outline" to="/contact">
                  Contactez-nous
                </Link>


              </div>

            </div>

            <div className="hero-slider" data-slider>

              <div className="slider-inner">
                <ul ref={sliderContainer} className="slider-container" style={{ transform: `translateX(-${move}px)` }}>


                  <li className="slider-item">

                    <div className="hero-card">
                      <figure className="img-holder"   >
                        <img src={bg4} alt="hero banner"
                          className="img-cover" />
                      </figure>

                      <button className="play-btn" aria-label="play adex intro">
                        <ion-icon name="play" aria-hidden="true"></ion-icon>
                      </button>
                    </div>

                  </li>

                  <li className="slider-item">

                    <figure className="img-holder" >
                      <img src={bg5} alt="" className="img-cover" />
                    </figure>

                  </li>

                  <li className="slider-item">

                    <figure className="img-holder" >
                      <img src={bg2} alt="" className="img-cover" />
                    </figure>

                  </li>

                </ul>
              </div>

              <button onClick={handleSlide} className="slider-btn prev" aria-label="slide to previous" data-id="0">
                <ion-icon name="arrow-back"></ion-icon>
              </button>

              <button onClick={handleSlide} className="slider-btn next" aria-label="slide to next" data-id="1">
                <ion-icon name="arrow-forward"></ion-icon>
              </button>

            </div>

          </div>
        </section>

        <section className="about" aria-labelledby="about-label">
          <div className="container">

            <figure className="about-banner">
              <img src={bg2} loading="lazy" alt="about banner"
                className="w-100" />
            </figure>

            <div className="about-content">

              <p className="section-subtitle" id="about-label">Pourquoi nous choisir?</p>

              <h2 className="h2 section-title">
                Nourrir votre corps et la planète
              </h2>

              <ul>

                <li className="about-item">
                  <div className={`accordion-card ${clicked == "0" ? 'expanded' : ''}`}>

                    <h3 className="card-title">

                      <button data-id="0" className="accordion-btn" onClick={handleAccord}>

                        <ion-icon name="chevron-down-outline" aria-hidden="true" className="down"></ion-icon>

                        <span className="span h5">Des produits de haute qualité </span>

                      </button>

                    </h3>

                    <p className="accordion-content">
                      Nous nous engageons à n'utiliser que les ingrédients les plus frais et les plus nutritifs dans nos produits. Nos produits laitiers et nos jus sont fabriqués avec soin et attention pour garantir que chaque gorgée soit pleine de saveur et de nutriments.
                    </p>

                  </div>
                </li>

                <li className="about-item">
                  <div className={`accordion-card ${clicked == "1" ? 'expanded' : ''}`} >

                    <h3 className="card-title">
                      <button data-id="1" className="accordion-btn" onClick={handleAccord}>
                        <ion-icon name="chevron-down-outline" aria-hidden="true" className="down"></ion-icon>

                        <span className="span h5">Des pratiques durables</span>
                      </button>
                    </h3>

                    <p className="accordion-content">
                      Nous croyons qu'il est important de protéger l'environnement et de promouvoir un mode de vie durable. C'est pourquoi nous utilisons des pratiques éthiques et durables tout au long de notre chaîne d'approvisionnement, de la sélection des ingrédients à l'emballage et l'expédition de nos produits.
                    </p>

                  </div>
                </li>

                <li className="about-item">
                  <div className={`accordion-card ${clicked == "2" ? 'expanded' : ''}`} >

                    <h3 className="card-title">
                      <button data-id="2" className="accordion-btn" onClick={handleAccord}>
                        <ion-icon name="chevron-down-outline" aria-hidden="true" className="down"></ion-icon>

                        <span className="span h5">Engagement envers la santé </span>
                      </button>
                    </h3>

                    <p className="accordion-content">
                      Nous sommes dévoués à promouvoir un mode de vie sain et équilibré pour nos clients. Nos produits sont conçus pour offrir des options délicieuses et nutritives pour toute la famille, tout en favorisant un mode de vie actif et durable.
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
              <img src={bg3} loading="lazy" alt="feature banner"
                className="w-100" />
            </figure>

            <div className="feature-content">

              <p className="section-subtitle" id="feautre-label">Nos Produits</p>

              <h2 className="h2 section-title">
                Optez pour une option saine et écologique, avec des jus et produits laitiers délicieux et naturels.
              </h2>

              <p className="section-text">
                Nos produits biologiques sont cultivés sans l'utilisation de pesticides et d'engrais chimiques nocifs, ce qui signifie que vous pouvez profiter de boissons et de produits laitiers sains et naturels sans compromettre votre santé ni celle de l'environnement.
              </p>

              <ul className="feature-list">

                <li>
                  <div className="feature-card">

                    <div className="card-icon">
                      <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                    </div>

                    <span className="span">
                      Respect de l'environnement
                    </span>

                  </div>
                </li>

                <li>
                  <div className="feature-card">

                    <div className="card-icon">
                      <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                    </div>

                    <span className="span">
                      Produits plus sains
                    </span>

                  </div>
                </li>

                <li>
                  <div className="feature-card">

                    <div className="card-icon">
                      <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                    </div>

                    <span className="span">
                      Pas d'engrais chimiques nocifs
                    </span>

                  </div>
                </li>

                <li>
                  <div className="feature-card">

                    <div className="card-icon">
                      <ion-icon name="checkmark" aria-hidden="true"></ion-icon>
                    </div>

                    <span className="span">
                      Pas de pesticides nocifs
                    </span>

                  </div>
                </li>

              </ul>

            </div>

          </div>
        </section>

        <section className="stats" aria-label="our stats">
          <div className="container">

            <ul className="stats-card has-bg-image" style={{ backgroundImage: `url(${rb})` }}>

              <li>
                <p className="card-text">
                  <span className="h1">26</span>

                  <span className="span">Completed Projects</span>
                </p>
              </li>

              <li>
                <p className="card-text">
                  <span className="h1">3472</span>

                  <span className="span">Happy Customers</span>
                </p>
              </li>

              <li>
                <p className="card-text">
                  <span className="h1">132</span>

                  <span className="span">Expert Employees</span>
                </p>
              </li>

              <li>
                <p className="card-text">
                  <span className="h1">3</span>

                  <span className="span">Awards Won</span>
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