import React from "react";
import Logo from "../Assets/Img/logo.svg";
import Menu from "../Assets/Img/menu.svg";
import { Button } from "./Button";
import Style from "./Header-module.scss";

function showMenu() {
  document.querySelector(".web-menu")
  .classList.toggle("active");
}

export function Header() {
  return (
    <header style={Style}>
      <nav className="container">
        <a href="#home" className="logo">
          <img src={Logo} alt="Ir para home" />
        </a>
        <ul className="web-menu">
          <li>
            <a href="#home">SOBRE NÓS</a>
          </li>
          <li>
            <a href="#home">PROJETOS</a>
          </li>
          <li>
            <Button>Contato</Button>
          </li>
        </ul>
        <button className="mobile-menu" onClick={showMenu}>
          <img src={Menu} alt="Menu do site" />
          menu
        </button>
      </nav>
    </header>
  );
}
