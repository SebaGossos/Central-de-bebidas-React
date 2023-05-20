import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useProducts } from "../ProductsContext/ProductsContext";
const ItemListContainer = () => {
    const [routeImg, setRouteImg] = useState(false)
    const {category} = useParams()
    const {products, loading} = useProducts()
    const [productsCategory, setProductsCategory] = useState(products)

    const getProductsCategory = () => {
        if(category === 'alcohol'){
            const alcohol = products.filter(product => product.category === true)
            setProductsCategory(alcohol)
            setRouteImg(true)
        }else if(category === 'sinAlcohol'){
            const sinAlcohol = products.filter(product => product.category === false)
            setProductsCategory(sinAlcohol)
            setRouteImg(true)
        }else{
            setProductsCategory(products)
        }
    }
     

    useEffect(() => {
        getProductsCategory()
    },[category, products])

    return (
        <div className="contenedor principal">  
            <h1 class=" principal__heading">Nuestros productos!</h1>   
            <ItemList products={productsCategory} loading={loading} routeImg={routeImg}/>
        </div>
    )
}

export default ItemListContainer;