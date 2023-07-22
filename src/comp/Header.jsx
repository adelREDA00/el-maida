import { useState, useEffect, useRef } from 'react'
import navImg from '../assets/nav-img.png'
import MaidaLogo from '../assets/maidaLogo.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Header = () => {

  //activate link'../
  const location = useLocation();

  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  //show and hide the menu'../
  const navMeneuRef = useRef()

  function HandleShow() {
    navMeneuRef.current.classList.add('show-menu')
  }
  function HandleRemove() {
    navMeneuRef.current.classList.remove('show-menu')
  }

  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll('.nav__link')


  const linkAction = (e) => {
    // When we click on each nav__link, we remove the show-menu class
    navMeneuRef.current.classList.remove('show-menu')
  }


  //active header when window scrolled to 50px
  //https://stackoverflow.com/questions/69473259/how-to-show-or-hide-navbar-when-scroll-use-react-js

  //full screen slider 
  //https://reactjsexample.com/introduce-new-users-to-your-app-with-this-material-style-carousel/

  //swiper react
  //https://reactjsexample.com/a-lightweight-carousel-component-for-react/

  const headerRef = useRef();

  const activeHeader = function () {
    window.scrollY > 50
      ? headerRef.current?.classList.add("active")
      : headerRef.current?.classList.remove("active");
  };

  useEffect(() => {
    window.addEventListener("scroll", activeHeader);

    return () => {
      window.removeEventListener("scroll", activeHeader);
    };
  }, []);

  return (
    <>

      <header ref={headerRef} className='header' id='header'>
        <nav className="nav container">

          <a href="#" className="nav__logo">
            <img src={MaidaLogo} alt="" />
          </a>

          <div ref={navMeneuRef} className="nav__menu" id='nav-menu' >
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/">
                  <a onClick={linkAction} className={`nav__link ${url === "/" ? 'active-link' : ''}`} >ACCUEIL </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link className={`nav__link ${url === "/About" ? 'active-link' : ''}`} onClick={linkAction} to="/About">
                  À PROPOS
                </Link>

              </li>

              <li className="nav__item">
                <Link className={`nav__link ${url === "/collections" ? 'active-link' : ''}`} onClick={linkAction} to="/collections">
                  PRODUITS
                </Link>
              </li>

              <li className="nav__item">
                <Link className={`nav__link ${url === "/contact" ? 'active-link' : ''}`} onClick={linkAction} to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>

            <div onClick={HandleRemove} className="nav__close" id='nav-close'>
              <i className="ri-close-line"></i>
            </div>
            <img src={navImg} alt="nav img" className="nav__img" />
          </div>

          {/* Toggle btn */}
          <div onClick={HandleShow} className="nav__toggle" id='nav-toggle'>
            <i className="ri-menu-3-line"></i>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header