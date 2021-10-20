import { Link } from 'react-router-dom'

import { Container } from "./styles";


export function Nav() {
    return (
        <Container>
            <nav>
                <Link to="/">
                    <i className="fa fa-home"></i> Início
                </Link>
            </nav>
        </Container>
    )
}