import React from 'react'
import { motion } from "framer-motion";
import { Link,useParams } from 'react-router-dom'
import { ChessItems, MilkItems,JusItems  } from './Data';
import prod4 from '../assets/jusorange.png'
import { useNavigate  } from "react-router-dom";

const ProductId = () => {


    const navigateTo = useNavigate ();
  
  function handleLinkClick() {
    navigateTo('/collections#product-list');
  }
    
    const all = ChessItems.concat(JusItems,MilkItems)

    const {productID} =  useParams()
    const product = all.find((prod)=>{
        return prod.id==productID
    }
    )
    console.log(product);

    
    let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

  return (
    <div className='show_product'>
         <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
    <div className='fullscreen'>
      <div className='product'>

        <motion.div
        style={{backgroundImage: `url(${product.bg})`}}
          className='img'
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}>
          <motion.img
            
            src={product.img}
            animate={{ x: 0, opacity: 1,rotate:0}}
            initial={{ x: 200, opacity: 0,rotate:0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5,duration:.5 }}
          />
        </motion.div>


        <div className='product-details'>

          <motion.div variants={stagger} className='inner'>

  
              <motion.div  onClick={handleLinkClick} variants={fadeInUp}>
      
                <a className='go-back'><ion-icon name="chevron-back-outline"></ion-icon>Back</a>
              </motion.div>
       


            <motion.div variants={fadeInUp}>
              <span className='category'>  </span>
            </motion.div>

            <motion.h1 className='product_name' variants={fadeInUp}> {product.name} 
            </motion.h1>

            <motion.p variants={fadeInUp}> {product.des} </motion.p>

            <motion.div  variants={fadeInUp} className='additonals'>
              <div className="additonal">
              <span><ion-icon name="checkmark-circle-outline"></ion-icon>Vitamin B6 </span>
              <span><ion-icon name="checkmark-circle-outline"></ion-icon>Vitamin E</span>
              </div>

              <div className="additonal">
              <span><ion-icon name="checkmark-circle-outline"></ion-icon>Vitamin C</span>
              <span><ion-icon name="checkmark-circle-outline"></ion-icon>Vitamin A</span>
              </div>
              

            </motion.div>

            <motion.div variants={fadeInUp} className='qty-price'>
              <span className='price'><ion-icon name="restaurant-outline"></ion-icon>Ingredients</span>
            </motion.div>

            <motion.div variants={fadeInUp} className='btn-row'>
              <button className='add-to-cart'><ion-icon name="arrow-up-outline"></ion-icon>Nutrition</button>
     
            </motion.div>

          </motion.div>
        </div>


      </div>
    </div>
  </motion.div>
    </div>
  )
}

export default ProductId