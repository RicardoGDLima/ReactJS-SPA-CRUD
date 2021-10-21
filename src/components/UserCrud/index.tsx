import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface UserCrudProps {
    name: string;
    email: string;   
}


export function UserCrud() {
    const [user, setUser] = useState<UserCrudProps>({} as UserCrudProps)
    const [list, setList] = useState([])

    useEffect(() => {
       async function getUsers() {
           await api.get('/users')
            .then(response => setList(response.data))
       }
       getUsers()
    }, []) 
}
