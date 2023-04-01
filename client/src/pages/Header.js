import "../css/Header.css"
import React from "react";

const Header = () => {
    return (
        <div>
            <header className="header">
                <div>
                    <h1>Navigation</h1>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <a href={`/`}>Home</a>
                            </li>
                            <li>
                                <a href={`/cashier`}>Cashier</a>
                            </li>
                            <li>
                                <a href={`/manager`}>Manager</a>
                            </li>
                            <li>
                                <a href={`/customer`}>Customer</a>
                            </li>
                            <li>
                                <a href={`/menu`}>Menu</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;