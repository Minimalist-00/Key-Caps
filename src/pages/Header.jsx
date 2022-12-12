import { Link,Outlet } from "react-router-dom";

function Header() {
    return (
        <div className="min-h-5vh">
            <div className="header">
                <Link to={'/'} className="clear_Link_css" >KeyCaps</Link>
                <div>Category</div>
                <div className="space"></div>
                <div>
                    <a name="top">授業の課題で制作したテストサイトです</a>
                </div>
                <div className="space"></div>
                <Link to={'/Login'} className="clear_Link_css" >Login</Link>
                <Link to={'/Cart'} className="clear_Link_css" >Cart</Link>
                <div>Search</div>
            </div>
            <Outlet />
            {/* ここにルーター内のリンクに対応した各ページを表示させる */}
        </div>
    );
}

//改良の可能性高い
export default Header;