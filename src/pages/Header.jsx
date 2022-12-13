import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <div>
            <body>
                <header className="header">
                    <h5>
                        <Link to={'/'} className="clear_Link_css" >KeyCaps</Link>
                    </h5>
                    <div>Category</div>
                    <div className="space" />
                    <div><Link to={'/Login'} className="clear_Link_css" >Login</Link></div>
                    <div><Link to={'/Cart'} className="clear_Link_css" >Cart</Link></div>
                    <div>Search</div>
                </header>
            </body>
            <Outlet />
            {/* ここにルーター内のリンクに対応した各ページを表示させる */}
        </div>
    );
}

//改良の可能性高い
export default Header;