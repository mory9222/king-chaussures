
import './App.css'
import Navbar from './Compononents/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Compononents/Home'
import Footer from './Compononents/Footer'
import Products from './Compononents/Products'
import Contact from './Compononents/Contact'
function App() {

  return (
   <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />

     </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default App
