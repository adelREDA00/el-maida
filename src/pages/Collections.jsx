import React from 'react'
import bg from '../assets/ig3.png'
import bg1 from '../assets/ig4.png'
import bg2 from '../assets/ig5.png'
import bg3 from '../assets/ig1.png'
import bg4 from '../assets/ig.png'
import ProductCard from '../comp/ProductCard'
import { ChessItems, MilkItems,JusItems  } from './Data';
import cowImg from '../assets/milk.svg'
import { useRef ,useEffect, useState} from 'react'
import Transiton from '../comp/Transiton'
import { motion } from "framer-motion"
import { useLocation } from 'react-router-dom';
const Collections = () => {

  const location = useLocation();
  const featuresRef = useRef(null);

  useEffect(() => {
    if (location.hash && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

    const all = ChessItems.concat(JusItems,MilkItems)

//animation dont work for exicting cards
    const [content , setContent] = useState(JusItems)
    const [btnHover , setBtnHover] = useState('Jus')
    const handleProduct = (e)=>{
        let product = e.currentTarget.innerHTML;
        if(product=='Lait'){
            setContent(MilkItems)
            setBtnHover('Lait')
        }if(product=='Jus'){
            setContent(JusItems)
            setBtnHover('Jus')
        }if(product=='Fromage'){
            setContent(ChessItems)
            setBtnHover('Fromage')
        }if(product=='All'){
            setContent(all)
            setBtnHover('all')
        }
        
       
    }

    const handleGetProduct = (e)=>{
      console.log(e.currentTarget);
    }

  const cards = content.map(card =>
    <ProductCard key={card.id}  data={card} Getproduct={handleGetProduct} />
  );

  return (
    <>
        <Transiton />

    <motion.div initial={{opacity:0,}} animate={{opacity:1,}} 
    exit={{opacity:0,}} transition={{ease:"easeInOut",duration:0.1,delay:.5}} className='col '>
      
         <section className="section collection">
        <div className="container">

          <ul className="collection-list has-scrollbar">

            
          <li>
              <div className="collection-card" style={{backgroundImage: `url(${bg})`}}> 
                <h3 className="card-title"></h3>

                <a href="https://www.instagram.com/p/CuXbEvgt5OR/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" className="btn btn-secondary">
                  <span>Explore All</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div className="collection-card" style={{backgroundImage: `url(${bg4})`}}> 
                <h3 className="card-title"></h3>

                <a href="https://www.instagram.com/p/CvK0c0_LlD0/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" className="btn btn-secondary">
                  <span>Explore All</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div className="collection-card" style={{backgroundImage: `url(${bg3})`}}> 
                <h3 className="card-title"></h3>

                <a href="https://www.instagram.com/p/CvAiMacLGOy/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" className="btn btn-secondary">
                  <span>Explore All</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div className="collection-card" style={{backgroundImage: `url(${bg1})`}}> 
                <h3 className="card-title"></h3>

                <a href="https://www.instagram.com/p/CvFxQ4xrHvm/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" className="btn btn-secondary">
                  <span>Explore All</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div className="collection-card" style={{backgroundImage: `url(${bg2})`}}> 
                <h3 className="card-title"></h3>

                <a href="https://www.instagram.com/p/CvAiMacLGOy/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" className="btn btn-secondary">
                  <span>Explore All</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>

          </ul>

        </div>
      </section>




      <section className="section product">
        <div className="container">

          <h2 ref={featuresRef} id='product-list'  className="h2 section-title">Les produits les plus vendus</h2>

          <ul className="filter-list">

            <li>
              <button onClick={handleProduct} className={`filter-btn ${btnHover=='all' ? 'active' : ''}`} >All</button>
            </li>

            <li>
              <button onClick={handleProduct} className={`filter-btn ${btnHover=='Jus' ? 'active' : ''}`} >Jus</button>
            </li>

            <li>
              <button onClick={handleProduct}  className={`filter-btn ${btnHover=='Lait' ? 'active' : ''}`} >Lait</button>
            </li>

            <li>
              <button onClick={handleProduct}  className={`filter-btn ${btnHover=='Fromage' ? 'active' : ''}`} >Fromage</button>
            </li>

          </ul>

          <ul  className="product-list">

            {cards}
                 

          </ul>

        </div>
      </section>

    </motion.div>

    </>
  )
}

export default Collections