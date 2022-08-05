import React from "react";
import './Header.css';
import logo from './Img/Logonet.png'

const net = ''

export default ({blank}) => {
    return(
    <header className={blank ? 'blank' : ''}>
        <div className="header--logo">
            <a href="/">
                <img src={logo} alt="Netflix"/>
            </a>
        </div>
        <div className="header--user">
            <a href="">
                <img src="https://pbs.twing.com/profile_images/1240119990411550720/hBEe3dn_400x400.png" alt="Usuário"/>
            </a>
        </div>
    </header>
    )
}



