import {Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
export function NavBar(){
    const {category} = useParams()
    const [logoCentral,  setLogoCentral] = useState("./build/img/central")

    useEffect(() => {
        setLogoCentral("../build/img/central")
    }, [category])
    return(
        <header className='contenedor header'>
            <div className="header__logo">
                <Link to="/">
                    <picture>
                        <source srcSet={logoCentral+".avif"} type="image/avif"/>
                        <source srcSet={logoCentral+".webp"} type="image/webp"/>
                        <img className="header__imagen" loading="lazy" src={logoCentral+".png"} width="" height="" alt="logo Central Bebidas" />
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
