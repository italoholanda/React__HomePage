import React from "react";
import Style from "./ServiceCard-module.scss";

export function ServiceCard({ icon, alt, title, text }) {
  return (
    <div style={Style} className="card">
      <div className="icon">
        <img src={icon} alt={alt} />
      </div>
      <div className="text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
