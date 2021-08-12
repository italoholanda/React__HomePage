import React from 'react'
import Style from "./MemberCard-module.scss";

export function MemberCard({img, name, title}){
    return (
        <div className="member-card" style={Style}>
            <div className="img">
                <img src={img} alt={name + ", " + title}/>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{title}</p>
            </div>
        </div>
    )
}

