import {Routes} from "./routes"
import { BrowserRouter } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Logo } from "./components/Logo";

import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>   
        <Logo />    
        <Nav />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App

