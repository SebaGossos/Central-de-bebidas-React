import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {getProducts} from "../../../asyncMock";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [img, setImg] = useState(false)
    const {category} = useParams()
    const getProductsData = async() => {
        try{
            const response = await getProducts()
            if(category === 'alcohol'){
                const alcohol = response.filter(product => product.category === true)
                setProducts(alcohol)
                setImg(true)
            }else if(category === 'sinAlcohol'){
                const sinAlcohol = response.filter(product => product.category === false)
                setProducts(sinAlcohol)
                setImg(true)
            }else{
                setProducts(response)
                setImg(false)
            }
            setLoading(false)
        }catch(error){
            console.error('Error al obtener los datos: ' + error)
        }
    }

    useEffect(() => {
        getProductsData()
    },[category])

    return (
        <div className="contenedor principal">  
            <h1 class=" principal__heading">Nuestros productos!</h1>   
            <ItemList products={products} img={img} loading={loading}/>
        </div>
    )
}

export default ItemListContainer;