import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";

const CartProdCant = ({ product, stockProd, setStockProd }) => {
    const { stock, id } = product
    const { productsCart, addToCart } = useCartContext()
    const [mostrarAgregar, setMostrarAgregar] = useState(false)
    
    const [cantidad, setCantidad] = useState(() => {
        const storedData = localStorage.getItem('productQuantities')
        if (storedData) {
            const productQuantities = JSON.parse(storedData)
            return productQuantities[id] || 0
        } else {
            localStorage.setItem('productQuantities', JSON.stringify({}))
        }
        return 0
    })

}
export default CartProdCant