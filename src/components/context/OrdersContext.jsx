import { createContext, useContext, useEffect, useState } from "react"
import { useUsers } from "./UsersContext"
import { useCartContext } from "./CartContext"
import { useProducts } from "./ProductsContext"
import { getFirestore, addDoc, collection, doc, getDoc } from "firebase/firestore"

export const OrdersContext = createContext()
export const useOrders = () => useContext(OrdersContext)

export const OrdersProvider = ({ children }) => {
    const { user } = useUsers()
    const { cartPrice, productsCart } = useCartContext()
    const {products, updateProductsQuantity, setControlStock} = useProducts()
    const [orderId, setOrderId] = useState(null)
    const [showMessage, setShowMessage] = useState(false)
    const [order, setOrder] = useState({})

    const setOrdersFireBase = async () => {
        const dbFirestore = getFirestore()
        const orderCollection = collection(dbFirestore, 'orders')
        try{
            const docRef = await addDoc(orderCollection, order)
            const orderKey = docRef.id

            const queryDoc = doc(orderCollection, orderKey)
            const docSnap = await getDoc(queryDoc)
            const itemsOrder = docSnap.data().items
            const cartTotal = docSnap.data().totalPrice
            const userName = docSnap.data().userData.name
            

            const orderProducts = {
                key: orderKey,
                items: [],
                cartTotal: cartTotal,
                name: userName
            }
            itemsOrder.map(item => orderProducts.items.push({
                name: item.pName,
                cantidad: item.pCantidad,
            }))

            return orderProducts

        }catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        if(Object.keys(order).length > 0){
            setOrdersFireBase()
            .then(res => {
                setOrderId(res)
                setShowMessage(true)
            })
        }
    },[order])


    const finalizarOrden = () => {

        const buyerOrder = {
            userData: {
                name: user.nombre,
                email: user.email
            },
            items: [],
            totalPrice: cartPrice
        }

        const storedData = JSON.parse(localStorage.getItem('productQuantitiesCart'))
        productsCart.map(item => {

            let cantidad = storedData[item.id]

            buyerOrder.items.push({
                pName: item.name,
                pCantidad: cantidad
            })
        })
        setOrder(buyerOrder)
    
        // Extraer Data del LocalStorage para actualizar la cantidad de productos en la DB
        const updateProductsStock = []

        for(const key in storedData){
            updateProductsStock.push({
                pId: key,
                quantity: storedData[key]
            })
        }
        updateProductsQuantity(updateProductsStock)
    }   


    return (
        <OrdersContext.Provider value={{
            finalizarOrden,
            orderId,
            showMessage,
            setShowMessage
        }}>
            {children}
        </OrdersContext.Provider>
    )
}