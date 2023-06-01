import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useProducts } from "../context/ProductsContext"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const {products, loading} = useProducts()
  const {pid} = useParams()
  const [product, setProduct] = useState({})

  const getProduct = () => {
    const productId = !loading ?  products.find(product => product.id === pid) : {}
    setProduct(productId)
  }

  useEffect(() => {
    getProduct()
  },[products])

  // Llamar al Firestore para extraer un producto
  
/*   useEffect(() => {
    const dbFirestore = getFirestore()
    const queryDoc = doc(dbFirestore, 'products', pid)

    getDoc(queryDoc)
      .then(res => setProduct({id: res.id , ...res.data()}))
      .catch(err => console.error(err))
      .finally(() => console.log('finalizado'))
  },[]) */


    return (
    <div className="contenedor">
        <ItemDetail product={product}/>
    </div>
  )
}
export default ItemDetailContainer