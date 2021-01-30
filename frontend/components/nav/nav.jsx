import React from 'react';

const Nav = ({ currentUser, logout }) => {

    if (currentUser) {
        return null
    } else {
        return (
            <nav className="nav-bar">
                <div>
                    <a>Prices</a>
                </div>
                <div>
                    <a>Products</a>
                </div>
                <div>
                    <a>Company</a>
                </div>
                <div>
                    <a>Earn Crypto</a>
                </div>
                <div>
                    <a id="promotion">Get $158+</a>
                </div>
            </nav>
        )
    } 
};

export default Nav;
