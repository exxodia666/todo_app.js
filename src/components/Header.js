import React from 'react';
import { Link } from 'react-router-dom';
//todo navigation
const Header = () => {
    return(<nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <Link className="nav-item nav-link active navbar-brand"  to="/">
                    Tips Application
                    <span className="sr-only">
                    (current)
                    </span>
                </Link>
                <Link className="nav-item nav-link" to="/about">
                    About
                </Link>
            </nav>
    )
};
export default Header;