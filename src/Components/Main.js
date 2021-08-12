import React from "react";
import Style from "./Main-module.scss";
import Illustration from "../Assets/Img/main-draw.svg";
import { Button } from "./Button";

export function Main() {
  return (
    <main className="main container" style={Style}>
      <div>
        <div className="illustration">
          <img src={Illustration} alt="" />
        </div>
        <div>
          <h1>Agência de Marketing Data-Driven</h1>
          <p>
            A Ominik é um time multidisciplinar composto po profissionais de dados e comunicação.
            Nós utilizamos inteligência artificial e estratégias de Marketing para multiplicar vendas em escala
          </p>
          <Button>
              Fale conosco
          </Button>
        </div>
      </div>
    </main>
  );
}
