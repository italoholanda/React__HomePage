import React from "react";
import Logo from "../Assets/Img/logo.svg"
import { Button } from "./Button";
import Style from "./Footer-module.scss"
import { Input } from "./Input";

export function Footer() {
  return (
    <footer className="footer" style={Style}>
      <div className="container">
        <div>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul>
            <li>(19) 9 8852-5488</li>
            <li>contato@ominik.xyz</li>
            <li>Campinas/SP - Brasil</li>
          </ul>
        </div>
        <div>
            <h2>A Ominik</h2>
            <ul>
                <li>Sobre Nós</li>
                <li>Parceiros</li>
                <li>Trabalhe Conosco</li>
                <li>Entre em Contato</li>
            </ul>
        </div>
        <div>
            <h2>Links úteis</h2>
            <ul>
                <li>Política de Privacidade</li>
                <li>Política de Cookies</li>
                <li>Aspectos legais</li>
                <li>Mapa do Site</li>
            </ul>
        </div>
        <div>
            <h2>Newsletter</h2>
            <h3>Acompanhe a nossa Newsletter</h3>
            <Input type="text" placeholder="Digite o seu e-mail" />
            <Button>Registrar</Button>
        </div>
      </div>
    </footer>
  );
}
