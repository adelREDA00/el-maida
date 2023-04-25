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
                  <img src={props.data.img} width="312" height="350" loading="lazy"
                    alt="Running Sneaker Shoes" className="image-contain"/>

                   
                {firstDiv}

                  <ul className="card-action-list">

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">Add to Cart</div>
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">Add to Whishlist</div>
                    </li>

                   
                    <li className="card-action-item">
                    <Link className="Link"  to={`/collections/${props.data.id}`} >
                      <button className="card-action-btn" aria-labelledby="card-label-3">
                    
                        <ion-icon name="eye-outline"></ion-icon>
                     
                      </button>
                      </Link>
           

                      <div className="card-action-tooltip" id="card-label-3">Quick View</div>

                      
                   
                 
                    </li>

                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-4">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">Compare</div>
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