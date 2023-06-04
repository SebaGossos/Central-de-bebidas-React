import { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import { useUsers } from "../context/UsersContext";
import { getFirestore, collection, query, getDocs, where, getDoc } from "firebase/firestore";

const Register = () => {
    const { setMenu } = useProducts()
    const { users, setUsers } = useUsers()
    function mayorEdad(edad) {
        const fechaActual = new Date();
        const cumpleanos = new Date(edad);
        let ano = fechaActual.getFullYear() - cumpleanos.getFullYear();
        let mes = fechaActual.getMonth() - cumpleanos.getMonth();
        let dia = fechaActual.getDate() - cumpleanos.getUTCDate();
        if (mes < 0 || (mes === 0 && dia < 0)) {
            ano--;
        }
        return ano >= 18;
    }
    async function validateForm(data) {
        const adulto = mayorEdad(data.adulto.value)
        if (!adulto) {
            alert('Debes ser mayor de edad para registrarte')
            return false
        }
        const dbFireStore = getFirestore()
        const userCollection = collection(dbFireStore, 'users')
        const queryRef = query(userCollection, where('email', '==', data.email.value))
        try{
            const querySnapshot = await getDocs(queryRef)
            if(!querySnapshot.empty){
                alert('El usuario ya existe')
                return false
            }
        }catch(error){
            console.log(error)
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Saber si el formulario es valido (devuelve una promesa)
        validateForm(e.target)
            .then(queryForm => {
            console.log(queryForm)
            if(queryForm) {
                const user = {
                    nombre: e.target.nombre.value,
                    contrasena: e.target.contrasena.value,
                    email: e.target.email.value
                }
                setUsers(user)
            }
        })
    }

    useEffect(() => setMenu(true), [])

    return (
        <main className="contenedor registrar">
            <h2 className="registrar__heading">Registro de Usario</h2>
            <div className="registrar__contenedor">
                <form onSubmit={handleSubmit} id="formulario" className="registrar__formulario" action="">
                    <div className="registrar__campo">
                        <label className="registrar__label" htmlFor="nombre">Nombre</label>
                        <input className="registrar__input" type="text" id="nombre" name="nombre" placeholder="Tu Nombre" />
                    </div>
                    <div className="registrar__campo">
                        <label className="registrar__label" htmlFor="contrasena">Contraseña</label>
                        <input className="registrar__input" type="password" id="contrasena" name="contrasena" placeholder="Tu Contraseña" />
                    </div>
                    <div className="registrar__campo">
                        <label className="registrar__label" htmlFor="email">Email</label>
                        <input className="registrar__input" type="email" id="email" name="email" placeholder="Tu Email" />
                    </div>

                    <div className="registrar__campo">
                        <label className="registrar__label" htmlFor="fecha">Fecha de nacimiento</label>
                        <input className="registrar__input" type="date" id="adulto" name="adulto" />
                    </div>

                    <div className="registrar__campo--submit">
                        <input className="registrar__input--submit" type="submit" value="Registrar" />
                    </div>
                </form>
            </div>
        </main>
    );

}
export default Register;