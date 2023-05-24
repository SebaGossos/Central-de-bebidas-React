import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useCartContext } from "../context/CartContext";
const ItemListContainer = () => {
    const [routeImg, setRouteImg] = useState(false)
    const { category } = useParams()
    const { products, loading } = useProducts()
    const [productsCategory, setProductsCategory] = useState(products)
    const { renderOptions, setRenderOptions } = useCartContext()

    const getProductsCategory = () => {
        if (category === 'alcohol') {
            const alcohol = products.filter(product => product.category === true)
            setProductsCategory(alcohol)
            setRouteImg(true)
        } else if (category === 'sinAlcohol') {
            const sinAlcohol = products.filter(product => product.category === false)
            setProductsCategory(sinAlcohol)
            setRouteImg(true)
        } else {
            setProductsCategory(products)
        }
        setRenderOptions(false)
    }

    useEffect(() => {
        getProductsCategory()
    }, [category, products])

    return (
        <div className="contenedor principal">
            <h1 className=" principal__heading">Nuestros productos!</h1>
            <ItemList products={productsCategory} renderOptions={renderOptions} loading={loading} routeImg={routeImg} />
        </div>
    )
}

export default ItemListContainer;