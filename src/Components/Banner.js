import React from "react";
import Style from "./Banner-module.scss";
import Illustration from "../Assets/Img/banner-draw.svg";
import { Button } from "./Button";

export function Banner() {
  return (
    <aside style={Style}>
      <div className="container">
        <div>
          <span>Data Marketing <br /> para startups</span>
          <p>Escale os resultados da sua marca <br /> com estratégias data-driven</p>
          <Button>Comece agora</Button>
        </div>
        <div className="illustration">
          <img src={Illustration} alt="Marketing Data-Driven" />
        </div>
      </div>
    </aside>
  );
}
