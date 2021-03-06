import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css'

const Header = () => {
    return (
        <div className="full-width">
            {/* Nav Component */}
            <Nav></Nav>
            {/* Header Text Part */}
            <div className="text-center header-text">
                <p className="fs-3 fw-bolder text-success mt-4">You can hire a programmer according to your needs, who can solve your problems properly.</p>
                <h1>Our Total Budget : 200 Million</h1>
            </div>
            <br />
        </div>
    );
};

export default Header;