import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
    --bg-dark: #1a2f3a;

    --logo-height: 100px;
    --header-height: 100px;
    --menu-top-height: 70px;
    --aside-width: 225px;
    --footer-height: 40px;

    --shadow: 
        0 2px 23px 0 rgba(0, 0, 0, 0.1),
        0 2px 49px 0 rgba(0, 0, 0, 0.06);
}
   
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
   
body {
    background: #FFF;
    //color: #FFF;
}

body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
}

button {
    cursor: pointer;
}

`