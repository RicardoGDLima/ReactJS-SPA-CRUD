import { Main } from "../Main";
import { Container } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faBreadSlice, faFlag, faScroll, faPen } from '@fortawesome/free-solid-svg-icons'
import { faBtc, faReact, faAutoprefixer } from '@fortawesome/free-brands-svg-icons'



let colchetes = '{ } '
export function Home() {


    return (
        <Main>
            <Container>
                <div className="display-4">Bem Vindos!</div>
                <hr />
                <p className="mb-0">Sistema pra exemplificar a construção de um cadastro, desenvolvido com... </p> <br />                                   
                    <div className=" row col-md-12">
                       <i className={'text-info'}> <FontAwesomeIcon icon={faReact} /> React JS </i>
                       <i className={'text-info'}> <FontAwesomeIcon icon={faScroll}/> Typescript </i>
                       <i className="pink" >  <FontAwesomeIcon icon={faFileCode}/> Styled-components </i>
                       <i> <FontAwesomeIcon icon={faFlag} /> Font-awesome </i>
                       <i className="purple"><FontAwesomeIcon icon={faBtc} /> Bootstrap </i>
                       <i> <FontAwesomeIcon icon={faBreadSlice} />  Toastify </i>
                       <i> <FontAwesomeIcon icon={faAutoprefixer} /> axios </i>
                       <i className={'text-warning'}> {colchetes}json-server </i>
                    </div>
            </Container>
        </Main>
    )
}