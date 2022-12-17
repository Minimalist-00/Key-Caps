import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';


function ThanksPurchase() {
    return (
        <div>
            <div>
                <Alert severity="success" color="info" >
                    購入が正常に完了しました！ - <Link to="/Review" className="ms-1">よければ感想をお聞かせください</Link>
                </Alert>
                <Alert severity="info" color="success">
                    買い物を続ける場合はこちら<span className="ms-1" />- <Link to="/" className="ms-1">トップページへ</Link>
                </Alert>
                <h1 className="Thanks">Thank you for your purchase</h1>
            </div>
        </div>
    );
}

export default ThanksPurchase;