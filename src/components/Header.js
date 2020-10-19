import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from './Nav';

library.add(fas);


const Header = () => {
    return (
        <header>
            <div className="container">
                <a href="#" className="logo">
                <FontAwesomeIcon icon="utensils" />
                    Restaurant
                </a>
                <a href="#">Call us on +00 00 000 0000</a>
            </div>
            <Nav />
        </header>
    )
}

export default Header
