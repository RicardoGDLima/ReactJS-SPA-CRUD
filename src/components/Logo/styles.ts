import styled from "styled-components";

export const Container = styled.aside`
    .logo{
        background-color: var(--bg-dark);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
       
        width: 400px;
        padding: 0px 15px;
      //  width: 100%;
    }

    @media(max-width: 576px) {
        img{
            width: 350px;
        }
    }
`