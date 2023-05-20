

const CartItemList = ({productsCart}) => {

    return(
        <ul className="contenedor seccion cards">
            {productsCart.map(product => (
                <Item key={product.id}  {...product} />  
            ))}
        </ul>
    )
}
export default CartItemList;