import { useState, useEffect, } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductId } from "../../../asyncMock"
import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const {pid} = useParams()

  const getProduct = async (pid) => {
    const numberPid = parseInt(pid)

    try{
      const productID = await getProductId(numberPid)
      setProduct(productID)
    }catch(error){
      console.error(error)
    }
  }

  useEffect(() => {
    getProduct(pid)
  },[pid])

    return (
    <div className="contenedor">
        <ItemDetail {...product}/>
    </div>
  )
}
export default ItemDetailContainer