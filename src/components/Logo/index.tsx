import { Link } from "react-router-dom";

import { Container} from "./styles";

import imgLogo from "../../assets/imgs/Logo-React.png"

export function Logo() {
    return(
        <Container>
            <Link to="/" className="logo"></Link>
            <img src={imgLogo} alt="Logo-React" />
        </Container>
    )
}