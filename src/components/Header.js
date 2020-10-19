import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from './Nav';
import Content from './Content'

library.add(fas);


const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="pre-nav">
                    <a href="#" className="logo">
                    <FontAwesomeIcon icon="utensils" />
                    &nbsp; Restaurant
                    </a>
                    <a href="#">Call us on +00 00 000 0000</a>
                </div>
                <Nav />
                <Content />
           </div>
        </header>
    )
}

export default Header
