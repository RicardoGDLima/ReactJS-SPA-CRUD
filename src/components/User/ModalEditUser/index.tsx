import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import { Form } from './styles';
import { Modal } from '../../Modal';
import { Input } from '../../Input';

interface UsersProps {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

interface ModalEditUserProps {
  setIsOpen: () => void;
  handleUpdateUser: (data: EditUser) => void;
  isOpen: boolean;
  editingUser: UsersProps;
}

interface EditUser {
  name: string;
  email: string;
}

export function ModalEditUser({ setIsOpen, handleUpdateUser, isOpen, editingUser }: ModalEditUserProps) {

  const formRef = useRef(null)

  const handleSubmit = async (data: EditUser) => {

    if (!data.name || data.name.length < 5) {
      toast.error('Please, insert a valid name')
      return
    }

    if (!data.email || !data.email.includes('@')) {
      toast.error('Please, insert a valid email')
      return
    }
    handleUpdateUser(data);
    setIsOpen();
  };
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingUser}>
          <h1>Editar Usuário</h1>
          <Input name="name" placeholder="Digite o seu nome" />

          <Input name="email" placeholder="exemplo@email.com" />

          <button type="submit">
            <div className="text">Editar</div>
            <div className="icon"><FontAwesomeIcon icon={faPen}/> </div>
          </button>
        </Form>        
      </Modal>
      <ToastContainer />
      
    </>

  );
}

