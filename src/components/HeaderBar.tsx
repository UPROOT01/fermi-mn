import React from "react";

import "./HeaderBar.css";

interface Props {}

const HeaderBar: React.FC<Props> = () => {
    return <div className="header-container">
        <span>Home</span>
        <span>Area riservata</span>
        <span>Istituto</span>
        <span>Reti di ambito</span>
        <span>A.S. 2019/2020</span>
        <span>I nostri siti</span>
        <span>Link utili</span>
    </div>;
}

export default HeaderBar;