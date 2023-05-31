import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid navbar">
                <div className="row">
                    <div className="col-lg-12 logo">
                        {/* <Link to="/" className="navbar-brand logo"> */}
                            <h2>GroupM</h2>
                        {/* </Link> */}
                    </div>
                    <div className="col-lg-12">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col-lg-12" style={{'margin-top': '60px'}}>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" aria-current="page">
                                        Tickets Type
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
