import { Outlet } from "react-router-dom";

function Header() {
    return (
        <div className="min-h-5vh">
            <div className="header">
                <div>KeyCaps</div>
                <div>goods</div>
                <div>goods2</div>
                <div>goods3</div>
                <div className="space"></div>
                <div>授業の課題で制作したテストサイトです</div>
                <div className="space"></div>
                <div>Login</div>
                <div>Account</div>
                <div>Cart</div>
            </div>
            <Outlet />
        </div>
    );
}

//改良の可能性高い
export default Header;