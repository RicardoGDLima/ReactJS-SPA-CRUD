
import 'bootstrap/dist/css/bootstrap.min.css'

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`  


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
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
}

button {
    cursor: pointer;
}

`