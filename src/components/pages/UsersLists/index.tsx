import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons'

import { api } from "../../../services/api"
import { Main } from "../../Main"
import { ModalAddUser } from "../../User/ModalAddUser"
import { ModalEditUser } from "../../User/ModalEditUser"

interface UsersListProps {
    id: number;
    name: string;
    email: string;
    active: boolean;
}

interface AddUser {
    name: string;
    email: string;
}

export function UsersList() {
    const [users, setUsers] = useState<UsersListProps[]>([])
    const [modalOpen, setModalOpen] = useState(false)
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [editingUser, setEditingUser] = useState<UsersListProps>({} as UsersListProps)

    useEffect(() => {
        async function getFoods() {
            await api.get('/users')
                .then(response => setUsers(response.data))
        }
        getFoods()
    }, [])

    const handleAddUser = async (user: AddUser) => {
        try {
            const response = await api.post('/users', {
                ...user,
                active: true,
            });

            setUsers([...users, response.data]);
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdateUser = async (user: AddUser) => {
        try {
            const userUpdated = await api.put(
                `/users/${editingUser.id}`,
                { ...editingUser, ...user },
            );

            const usersUpdated = users.map(u =>
                u.id !== userUpdated.data.id ? u : userUpdated.data,
            );
            setUsers(usersUpdated);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDeleteUser = async (id: number) => {
        await api.delete(`/users/${id}`);
    
        const usersFiltered = users.filter(user => user.id !== id);
    
        setUsers(usersFiltered);
      }

    const toggleEditModal = () => {
        setEditModalOpen(!editModalOpen);
    }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const handleEditUser = (user: UsersListProps) => {
        setEditingUser(user);
        setEditModalOpen(true)
    }

    function renderButton() {
        return (
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-info "
                        onClick={() => toggleModal()}>
                        Adicionar <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        )
    }

    function renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        )
    }
    
    const renderRows = () => {
        return users.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>                       
                        <button className="btn btn-warning"
                            onClick={() => handleEditUser(user)}>
                            <FontAwesomeIcon icon={faPen} />
                        </button>

                        <button className="btn btn-danger ml-2"
                            onClick={() => handleDeleteUser(user.id)}>
                            <i className={"fa fa-trash"}></i>
                        </button>

                    </td>
                </tr>
            )
        })
    }
    return (
        <>
            <Main>
                {renderButton()}
                {renderTable()}
            </Main>

            <ModalAddUser
                isOpen={modalOpen}
                setIsOpen={toggleModal}
                handleAddUser={handleAddUser}
            />

            <ModalEditUser
                isOpen={editModalOpen}
                setIsOpen={toggleEditModal}
                editingUser={editingUser}
                handleUpdateUser={handleUpdateUser}
            />

        </>
    )
}