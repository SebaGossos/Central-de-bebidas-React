import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import '../build/css/app.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CartContainer from './components/CartContainer/CartContainer'
import { CartProvider } from './components/context/CartContext'
import { ProductsProvider } from './components/context/ProductsContext'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from './components/Register/Register'

function App() {

  return (
    <ProductsProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/register' element={<Register />}/>
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/detail/:pid' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <ToastContainer />
      </CartProvider>
    </ProductsProvider>
  )
}

export default App
