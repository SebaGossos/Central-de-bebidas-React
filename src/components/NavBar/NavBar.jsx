import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useProducts } from "../context/ProductsContext"
import { useUsers } from "../context/UsersContext"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
export function NavBar() {
    const { category} = useParams()
    const [inicioSesion, setInicioSesion] = useState(false)
    const [logoCentral, setLogoCentral] = useState("./central")
    const {menu} = useProducts()
    const {isAnUser, setIsAnUser, user, setUser} = useUsers()
    

    useEffect(() => {
        setLogoCentral("./central")
    }, [category])

    const callUserDb = async (user, key) => {
        const dbFireStore = getFirestore()
        const userCollection = collection(dbFireStore, 'users')
        const queryRef = query(userCollection, where('email', '==', user), where('contrasena', '==', key))

        try{
            const querySnapshot = await getDocs(queryRef)

            if(!querySnapshot.empty){
                setUser(querySnapshot.docs[0].data())
                return true
            }
            if(querySnapshot.empty){
                alert("Usuario y/o contraseña incorrecto")
                return false
            }
        }catch(err){
            console.error(err)
            return false
        }
    }


    const handleLogin = (e) => {
        e.preventDefault()

        const usuario = e.target.usuario.value
        const contrasena = e.target.contrasena.value

        callUserDb(usuario, contrasena)
        .then(res => {
            setIsAnUser(res)
        })
    }

    const handleInicioSesion = () => {
        if (inicioSesion && !isAnUser) {
            return (
                <form onSubmit={handleLogin} className="formulario__inicio">
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
                    <input className="formulario__boton" type="submit" value="Iniciar Sesión" />
                </form>
            )
        } else if(isAnUser){
            return <h2 className="registro__user">{`Bienvenido ${user.nombre}`}</h2>
        }else{
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
                <Link onClick={() => setInicioSesion(false)} to="/">
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
