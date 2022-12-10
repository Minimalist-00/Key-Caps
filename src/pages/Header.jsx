//殆どのページに共通するヘッダー
function Header() {
    return (
        <div className="min-h-5vh">
            <div className="header">
                <div>KeyCaps</div>
                <div>goods</div>
                <div>goods2</div>   
                <div>goods3</div>
                <div className="space"></div>
                <h3>授業で制作したテストサイトです</h3>
                <div className="space"></div>
                <div>Login</div>
                <div>Account</div>
                <div>Cart</div>
            </div>
        </div>
    );
}

export default Header;