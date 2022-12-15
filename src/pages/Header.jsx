import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Footer from '../pages/Footer';

import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';



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
                <div className="space" />
                <Link to={'/Cart'}><ShoppingCartOutlinedIcon style={{ color: 'white' }} /></Link>
                <Link to={'/SignIn'}><LoginIcon style={{ color: 'white' }} /></Link>
                <SearchIcon className="searchIcon" />
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