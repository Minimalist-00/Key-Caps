import React from 'react';

import Alert from '@mui/material/Alert';


function ThanksPurchase(props) {

    return (
        <div>
            {/* <Link to='/'>買い物を続ける</Link> */}
            <div>
                <Alert severity="success" color="info" >
                    購入が正常に完了しました！
                </Alert>
                <h1 class="Thanks">Thank you for your purchase</h1>
            </div>
        </div>
    );
}

export default ThanksPurchase;