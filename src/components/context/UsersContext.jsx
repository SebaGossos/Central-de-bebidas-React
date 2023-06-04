import { useEffect, useState, createContext, useContext } from "react"
import {addDoc, collection, getDocs, getFirestore} from 'firebase/firestore'


export const UsersContext = createContext()
export const useUsers = () => useContext(UsersContext)

export const UsersProvider = ({children}) => {

    const [users, setUsers] = useState({})
    
    useEffect(() => {
        const dbFireStore = getFirestore()
        const userCollection = collection(dbFireStore, 'users')
        getDocs(userCollection)
            .then((response) => {
                let usersEmpty = Object.keys(users).length === 0

                if(response.empty && !usersEmpty){
                    return addDoc(userCollection, users)
                }
                if(!response.empty && !usersEmpty){
                    return addDoc(userCollection, users)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [users])

    

    return (
        <UsersContext.Provider value={{
            users,
            setUsers,

        }}>
            {children}
        </UsersContext.Provider >
    )
}
