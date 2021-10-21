import { Routes } from "./routes"
import { BrowserRouter } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Logo } from "./components/Logo";

import GlobalStyle from "./styles/global";
import "./app.css"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <div className="app">
          <Logo />
          <Nav />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>

    </>
  );
}

export default App

