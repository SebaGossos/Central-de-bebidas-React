import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useProducts } from "../context/ProductsContext"
export function NavBar() {
    const { category} = useParams()
    const [inicioSesion, setInicioSesion] = useState(false)
    const [logoCentral, setLogoCentral] = useState("./build/img/central")
    const {menu} = useProducts()

    useEffect(() => {
        setLogoCentral("../build/img/central")
        console.log(menu)
    }, [category])

    const handleInicioSesion = () => {
        if (inicioSesion) {
            return (
                <form className="formulario__inicio">
                    <div className="formulario__contenedor">
                        <div className="formulario__campo">
                            <label htmlFor="usuario" className="formulario__label">Usuario</label>
                            <input id="usuario" className="formulario__input" placeholder="Coloque su usuario" type="email" />
                        </div>
                        <div className="formulario__campo">
                            <label htmlFor="contrasena" className="formulario__label">Contraseña</label>
                            <input id="contrasena" className="formulario__input" placeholder="Coloque su contraseña" type="password" />
                        </div>
                    </div>
                    <button className="formulario__boton">Iniciar Sesión</button>
                </form>
            )
        } else {
            return (
                <div className="registro__cuenta">
                    <Link to='/register' className="registro__crearCuenta">Registrarse</Link>
                    <button className="registro__inicioSesion" onClick={() => setInicioSesion(!inicioSesion)} >Iniciar Sesión</button>
                </div>
            )
        }
    }

    return (
        <header className={ menu ? 'contenedor header__registro' : 'contenedor header' }>
            <div className="header__logo">
                <Link to="/">
                    <picture>
                        <source srcSet={logoCentral + ".avif"} type="image/avif" />
                        <source srcSet={logoCentral + ".webp"} type="image/webp" />
                        <img className="header__imagen" loading="lazy" src={logoCentral + ".png"} width="" height="" alt="logo Central Bebidas" />
                    </picture>
                </Link>
            </div>
            {!menu && <nav className="registro">
                <NavLink to="/category/alcohol" className={({ isActive }) => (isActive ? "registro__active" : "registro__deactive")}>Alcohol</NavLink>
                <NavLink to="/category/sinAlcohol" className={({ isActive }) => (isActive ? "registro__active" : "registro__deactive")}>Sin Alcohol</NavLink>
                {handleInicioSesion()}
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </nav>}
        </header>
    )
}
