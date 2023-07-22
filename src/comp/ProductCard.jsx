import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence,motion } from "framer-motion"


const ProductCard = (props) => {
    let hasBadge = props.data.badge
      let firstDiv = null;
  if (hasBadge) {
    firstDiv =<div className="card-badge">{hasBadge}</div>;
  } 
  return (
    <div onClick={props.Getproduct} >
            <AnimatePresence  >
          <motion.li     key={props.data.id}  initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              exit={{ transform: "scale(0)"}} 
        
              className="product-item">
              <div className="product-card" tabindex="0">

                <figure className="card-banner">
                <Link className="Link"  to={`/collections/${props.data.id}`} >

                  <img src={props.data.img} width="312" height="350" loading="lazy"
                    alt="Running Sneaker Shoes" className="image-contain"/>
                    </Link>

                   
                {firstDiv}

                  <ul className="card-action-list">

                


                   
                    <li className="card-action-item">
                    <Link className="Link"  to={`/collections/${props.data.id}`} >
                      <button className="card-action-btn" aria-labelledby="card-label-3">
                    
                        <ion-icon name="eye-outline"></ion-icon>
                     
                      </button>
                      </Link>
           

                      <div className="card-action-tooltip" id="card-label-3">Quick View</div>

                      
                   
                 
                    </li>

          

                  </ul>

                </figure>

                <div className="card-content">

                  <div className="card-cat">
                    <a href="#" className="card-cat-link">organic</a>   

                    <a href="#" className="card-cat-link">juice  </a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">{props.data.name}</a>
                  </h3>

                </div>

              </div>
            </motion.li>
            </AnimatePresence>
    </div>
  )
}

export default ProductCard