import { Main } from "../Main";
import { Container } from "./styles";

let colchetes = '{ } '
export function Home() {

    return (
        <Main>
            <Container>
                <div className="display-4">Bem Vindos!</div>
                <hr />
                <p className="mb-0">Sistema pra exemplificar a construção de um cadastro, desenvolvido com... </p> <br />
                <p >
                    <i className={'text-info fab fa-react'}> React JS</i>,
                    <i className={'text-info fas fa-scroll'}> Typescript</i>,
                    <i className={'pink far fa-file-code'}> Styled-components</i>,
                    <i className={'white far fa-flag'}> Font-awesome</i>,
                    <i className={'purple fab fa-btc'}> Bootstrap</i>,
                    <i className={"white fab fa-autoprefixer"}> axios</i>,
                    <i className={'text-warning'}> {colchetes}json-server </i> ,
                    <i className={"white fas fa-bread-slice"}> Toastify</i>
                </p>
            </Container>
        </Main>
    )
}