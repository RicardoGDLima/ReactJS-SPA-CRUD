import styled from "styled-components";

export const Container = styled.aside`
   
        background-color: var(--bg-dark);
        display: flex;
        align-items: center;
        justify-content: center;
    

    img{
        padding: 0px 15px;
        width: 100%;
    }

    @media(max-width: 576px) {
        img{
            width: 250px;
        }
    }
`