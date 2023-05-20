import { useState, useContext, useEffect, createContext } from "react";
import { getProducts } from "../../../asyncMock";


export const ProductsContext = createContext()

export const useProducts = () => useContext(ProductsContext)

export const ProductsProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])


    const getPoductsLocalStorage = async () => {
        try{
            const response = await getProducts()
            setProducts(response)
            setLoading(false)
        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        getPoductsLocalStorage()
    },[])

    return (
        <ProductsContext.Provider value={{
            products,
            loading
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
