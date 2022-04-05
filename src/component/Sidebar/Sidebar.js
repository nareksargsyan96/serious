import React from 'react'
import {ReactComponent as BurgerImges} from "../../Img/menu.svg";

import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="burger_imges">
            <BurgerImges />
        </div>
        <ul className="traslate" >
            <li className="traslate_link">ENG</li>
            <li className="traslate_link">RUS</li>
            <li className="traslate_link">ARM</li>
        </ul>
    </div>

  )
}

export default Sidebar