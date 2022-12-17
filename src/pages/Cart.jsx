import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
/* 未完成のページです */


function Cart() {
    return (
        <div>
            <Alert severity="warning" color="error">
                こちらは未完成のページです
            </Alert>
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
            <div className="bg-white border p-3 m-5" >
                <div className="row">
                    <h1 className="pb-4">カート内の商品 : n</h1>
                    <div className="row">
                        <div className="card w-75 mx-auto mb-4 py-2">
                            <div className="card-body">
                                <h5 className="card-title">キーキャップ「〇〇」</h5>
                                <h6 className="card-subtitle mb-2 text-muted">値段：¥△△△</h6>
                                <Link href="" className="card-link">Link</Link>
                            </div>
                        </div>
                        <div className="card w-75 mx-auto mb-4 py-2">
                            <div className="card-body">
                                <h5 className="card-title">キーキャップ「〇〇」</h5>
                                <h6 className="card-subtitle mb-2 text-muted">値段：¥△△△</h6>
                                <Link href="" className="card-link">Link</Link>
                            </div>
                        </div>
                        <div className="card w-75 mx-auto mb-4 py-2">
                            <div className="card-body">
                                <h5 className="card-title">キーキャップ「〇〇」</h5>
                                <h6 className="card-subtitle mb-2 text-muted">値段：¥△△△</h6>
                                <Link href="" className="card-link">Link</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;