import { useState, useEffect, useContext, createContext } from "react";
import { useProducts } from "./ProductsContext";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartProvider = ({children}) => {
    const {products} = useProducts()
    const [productsCart, setProductCart] = useState([])
    const [renderOptions, setRenderOptions] = useState(false)
    const [cartPrice, setCartPrice] = useState(0)

    // Obtener los productos del carrito
    useEffect(() => {
        if(localStorage.getItem('productQuantitiesCart')){
            const storedData = JSON.parse(localStorage.getItem('productQuantitiesCart'))
            let productsAdd = []

            for(const id in storedData){
                const product = products.find(item => item.id === parseInt(id))
                if(product){
                    productsAdd.push(product)
                }
            }
            setProductCart(productsAdd)
        }
    }, [products])


    // Guardar en el carrito
    const addToCart = (product, cantidad) => {

        // localStorage
        const storedData = localStorage.getItem('productQuantitiesCart') ? JSON.parse(localStorage.getItem('productQuantitiesCart')) : false

        if(!storedData){
            localStorage.setItem('productQuantitiesCart', JSON.stringify({[product.id] : cantidad}))
        }else{
            const existProduct = product.id in storedData   
            existProduct ? storedData[product.id] = storedData[product.id] + cantidad: storedData[product.id] = cantidad
            // Guardo o actualizo el carrito del localStorage
            localStorage.setItem('productQuantitiesCart', JSON.stringify(storedData))
        }
        
        let productsAdd = []

        for(const id in storedData){
            productsAdd.push(products.find(item => item.id === parseInt(id)))
        }
        console.log(productsAdd)
        // Carrito
        setProductCart([
            ...productsAdd
        ])

    }
    // Eliminar del carrito
    const removeFromCart = (product) => {
        // localStorage
        const storedData = JSON.parse(localStorage.getItem('productQuantitiesCart'))
    }
    
    return(
        <CartContext.Provider value={{
            productsCart,
            addToCart,
            renderOptions,
            setRenderOptions,
            cartPrice,
            setCartPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

