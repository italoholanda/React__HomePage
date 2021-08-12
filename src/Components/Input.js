import React from "react";
import Style from "./Input-module.scss";

export function Input({ placeholder, type }) {
  return type === "textarea" ? (
    <textarea
      placeholder={placeholder}
      type={type}
      style={Style}
      className="input"
    />
  ) : (
    <input
      placeholder={placeholder}
      type={type}
      style={Style}
      className="input"
    />
  );
}
