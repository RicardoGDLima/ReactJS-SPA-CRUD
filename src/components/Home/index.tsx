import { Main } from "../Main";

let colchetes = '{ } '
export function Home() {

    return (      
            <Main>
                <div className="display-4">Bem Vindos!</div>
                <hr />
                <p className="mb-0">Sistema pra exemplificar a construção de um cadastro, desenvolvido com... </p> <br/>
                    <p><span style={{background: 'black'}} className="text-info"><i className={'fab fa-react'}></i>React </span>, 
                    <span style={{background: 'black'}} className="text-info"><i className={'fas fa-scroll'}></i>Typescript</span>, 
                    <span style={{background: 'black', color: "#E985CC"}}><i className={'far fa-file-code'}></i> Styled-components</span>, 
                    <span style={{background: 'black', color: '#FFF'}}><i className={'far fa-flag'}></i> Font-awesome</span>, 
                    <span style={{background: 'black', color: '#563D7C'}}><i className={"fab fa-btc"}></i> Bootstrap</span>,
                    <span style={{background: 'black', color: '#FFF'}}><i className={"fab fa-autoprefixer"}></i> axios </span>, 
                    <span style={{background: 'black'}} className="text-warning"> {colchetes}json-server </span></p>
            </Main>
    )
}