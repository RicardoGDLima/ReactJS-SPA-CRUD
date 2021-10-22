import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Input } from '../../Input';
import { Modal } from '../../Modal';
import { Header } from '../../Header';

import { Form } from './styles';


interface AddUser {
  name: string;
  email: string;
}

interface ModalAddUserPorps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddUser: (data: AddUser) => void;
}

export function ModalAddUser({ isOpen, setIsOpen, handleAddUser }: ModalAddUserPorps) {

  const formRef = useRef(null)

  const handleSubmit = async (data: AddUser) => {

    if (!data.name || data.name.length< 5) {
      toast.error('Please, insert a valid name') 
      return
    }

    if (!data.email || !data.email.includes('@')) {
      toast.error('Please, insert a valid email') 
      return
    }

    handleAddUser(data);
    setIsOpen();
  };

  return (
    <>
      <Header icon="users" title="Usuários" subtitle="Listagem de usuarios" />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Usuário</h1>
          <Input name="name" placeholder="Type your name" />

          <Input name="email" placeholder="Exemplo@email.com" />

          <button type="submit">
            <p className="text">Salvar</p>
            <div className="icon"><i className={"fas fa-plus"}></i> </div>
          </button>
        </Form>
      </Modal>
      <ToastContainer />

    </>
  );
}



