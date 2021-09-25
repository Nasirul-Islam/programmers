import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css'

const Header = () => {
    return (
        <div className="full-width">
            <Nav></Nav>
            <div className="text-center">
                <p className="fs-3 text-success mt-4">You can hire a programmer according to your needs, who can solve your problems properly.</p>
                <h1>Our Total Budget : 200 Million</h1>
            </div>
            <hr />
        </div>
    );
};

export default Header;