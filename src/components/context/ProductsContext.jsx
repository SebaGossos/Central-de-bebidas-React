import { useState, useContext, useEffect, createContext } from "react";
import { getProducts } from "../../../asyncMock";
import { collection, getDocs, getFirestore } from "firebase/firestore";


export const ProductsContext = createContext()
export const useProducts = () => useContext(ProductsContext)

export const ProductsProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [menu, setMenu] = useState(false)

    const getPoductsFireBase = async () => {
        try{
            const dbFirestore = getFirestore()
            const queryCollection = collection(dbFirestore, 'products')
            const response = await getDocs(queryCollection)
            setProducts(response.docs.map(doc => ( {id: doc.id, ...doc.data()} )))
            setLoading(false)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        getPoductsFireBase()
    },[products])

/*     const getPoductsLocalStorage = async () => {
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
    },[]) */

    return (
        <ProductsContext.Provider value={{
            products,
            loading,
            menu,
            setMenu
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
