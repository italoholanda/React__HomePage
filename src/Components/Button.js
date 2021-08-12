import React from 'react'
import Style from "./Button-module.scss";

export function Button({children, ...props}){
    return (
        <button props={props} style={Style}>
            {children}
        </button>
    )
}

