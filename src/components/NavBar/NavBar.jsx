import {Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
export function NavBar(){
    const logoCentralBebidas = "./build/img/central"

    return(
        <header className='contenedor header'>
            <div className="header__logo">
                <Link to="/">
                    <picture>
                        <source srcset={logoCentralBebidas+".avif"} type="image/avif"/>
                        <source srcset={logoCentralBebidas+".webp"} type="image/webp"/>
                        <img className="header__imagen" loading="lazy" src={logoCentralBebidas+".png"} width="" height="" alt="logo Central Bebidas" />
                    </picture>
                </Link>
            </div>
            <nav className="registro">
                <NavLink to="/category/alcohol" className={({isActive}) => (isActive ? "registro__active" : "registro__deactive")}>Alcohol</NavLink>
                <NavLink to="/category/sinAlcohol" className={({isActive}) => (isActive ? "registro__active" : "registro__deactive")}>Sin Alcohol</NavLink>
                <Link to="/cart">
                    <CartWidget />  
                </Link>
            </nav>
        </header>
    )
}
