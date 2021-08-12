import React from "react";
import Style from "./Section-module.scss";

export function Section({ title, children }) {
  return (
    <section style={Style} className="container">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="content">{children}</div>
    </section>
  );
}
