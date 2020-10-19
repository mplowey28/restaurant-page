import React from 'react'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#" className="highlight">Book a Table</a></li>
            </ul>
        </nav>
    )
}

export default Nav
