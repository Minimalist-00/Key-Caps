import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Footer from '../pages/Footer';

const returnTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

function Header() {
    return (
        <div>
            <header>
                <h1>
                    <Link to={'/'} onClick={returnTop} className="link-white">KeyCaps</Link>
                </h1>
                <p className="link-white">Category</p>
                <div className="space" />
                <p><Link to={'/Login'} className="link-white" >Login</Link></p>
                <p><Link to={'/Cart'} className="link-white" >Cart</Link></p>
                <p><Link to={'/Search'} className="link-white" >Search</Link></p>
            </header>
            <body>
                <Outlet />
                {/* ここにルーター内のリンクに対応した各ページを表示させる */}
            </body>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Header;