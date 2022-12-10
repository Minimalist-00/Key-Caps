import React from 'react';
import { Link } from 'react-router-dom';


function ThanksPurchase(props) {

    return (
        <div>
            <h1>ご購入頂きありがとうございます</h1>
            <Link to='/'>買い物を続ける</Link>

        </div>
    );
}

export default ThanksPurchase;