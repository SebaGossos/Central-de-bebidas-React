import { useState, useContext, useEffect, createContext } from "react";
import { getFirestore, getDocs, doc, updateDoc, collection, writeBatch, getDoc } from "firebase/firestore";


export const ProductsContext = createContext()
export const useProducts = () => useContext(ProductsContext)

export const ProductsProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [menu, setMenu] = useState(false)
    const [controlStock, setControlStock] = useState(false) 

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
    },[controlStock])

    const updateProductsQuantity = async (productUpdates) => {
        const dbFireStore = getFirestore()
        const productCollectionRef = collection(dbFireStore, 'products')
        try{
            productUpdates.forEach( async (update) => {
                const {pId, quantity} = update
                const docRef = doc(productCollectionRef, pId)

                const docSnapshot = await getDoc(docRef)
                const currentStock = docSnapshot.data().stock
                const newStock = currentStock - quantity
                const batch = writeBatch(dbFireStore)
                batch.update(docRef, {stock: newStock})
                await batch.commit()
                setControlStock(true)
            })

        }catch(err){
            console.error(err)
        }
    }

    return (
        <ProductsContext.Provider value={{
            products,
            loading,
            menu,
            setMenu,
            updateProductsQuantity,
            controlStock,
            setControlStock,
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
