import { useState, useContext, createContext } from "react";


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartProvider = ({children}) => {
    const [productsCart, setProductCart] = useState([])


    // Guardar en el carrito
    const addToCart = (product, cantidad) => {
        
        const storedData = localStorage.getItem('productQuantitiesCart') ? JSON.parse(localStorage.getItem('productQuantitiesCart')) : false
        if(!storedData){
            localStorage.setItem('productQuantitiesCart', JSON.stringify({}))
        }else{
            for(const id in storedData){
                const productExist = productsCart.some(item => item.id === id)
                console.log(productExist)
            }
        }

        // localStorage
        storedData[product.id] = storedData[product.id] ? storedData[product.id] + cantidad: cantidad
        localStorage.setItem('productQuantitiesCart', JSON.stringify(storedData))
        
        // Corroborar si el producto ya existe en el carrito
        const productExist = productsCart.some(item => item.id === product.id)
        
        // Carrito
        if(!productExist){
            setProductCart([
                ...productsCart,
                product
            ])
        }
    }
    console.log(productsCart)
    // Eliminar del carrito

    
    return(
        <CartContext.Provider value={{
            productsCart,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

