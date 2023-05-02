import Item from "../Item/Item"
import { useState, useEffect } from "react";
const ItemList = ({products, img, loading}) => {
    const [dolarPrice, setDolarPrice] = useState(0)
    const apiDolar = async() => {
        try{
            let response = await fetch("https://criptoya.com/api/dolar")
            let data = await response.json()
            setDolarPrice(data.blue)             
        }
        catch(error){
            console.log(error)
        }
    }
    console.log('estoy pasando por itemList')
    useEffect(() => {
        apiDolar() 
    },[dolarPrice])

    return (
        <ul className="contenedor seccion cards">
            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                products.map(product => (
                <Item key={product.id} img={img} {...product} dolarPrice={dolarPrice} />  
                ))
            )}
        </ul>
    )
}
export default ItemList;