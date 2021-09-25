import React from 'react';

const Nav = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container">
                <a className="navbar-brand text-light fs-4 fw-bold" href="./home">Programmer</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-2 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="./home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="./hire">Hire</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="./about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="./contract">Contract</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-info" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Nav;