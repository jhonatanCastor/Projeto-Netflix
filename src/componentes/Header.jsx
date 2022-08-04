import React from "react";
import './Header.css';

const net = ''

export default ({blank}) => {
    return(
    <header className={blank ? 'blank' : ''}>
        <div className="header--logo">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix"/>
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



