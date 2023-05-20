import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductId } from "../../../asyncMock"
import { useParams } from "react-router-dom"
import { useProducts } from "../context/ProductsContext"
const ItemDetailContainer = () => {
  const {products, loading} = useProducts()
  const {pid, category} = useParams()
  const [product, setProduct] = useState({})

  const getProduct = (pid) => {
    const numberPid = parseInt(pid)
    const productId = !loading ? products.find(product => product.id === numberPid) : {}
    setProduct(productId)

  }

  useEffect(() => {
    getProduct(pid)
  },[products])

    return (
    <div className="contenedor">
        <ItemDetail {...product}/>
    </div>
  )
}
export default ItemDetailContainer