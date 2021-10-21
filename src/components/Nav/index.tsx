import { Link } from 'react-router-dom'

import { Container } from "./styles";


export function Nav() {
    return (
        <Container>
            <div className="menu" >
                <Link to="/">
                    <i className="fa fa-home"></i> Início
                </Link>
                <Link to="/users">
                    <i className="fa fa-users"></i> Usuários
                </Link>
            </div>
        </Container>
    )
}