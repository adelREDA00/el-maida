import './scss/main.scss' 
import Home from './pages/Home'
import { Routes, Route,useLocation  } from 'react-router-dom';
import About from './pages/About';
import Layout from './pages/Layout';
import Collections from './pages/Collections';
import ProductId from './pages/ProductId';
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './comp/ScrolToTop';
import Contact from './pages/Contact';
function App() {

  const location = useLocation() 
  return (
    <div > 
       <AnimatePresence  mode='wait'  >
       <ScrollToTop/>
       <Routes location= {location} key={location.pathname}>
        
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="collections" element={<Collections />} />
        <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="collections/:productID" element={<ProductId />} />
        
      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
