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
            <div class="bg-white border p-3 m-5" >
                <div class="row">
                    <h1 class="pb-4">カート内の商品 : n</h1>
                    <div class="row">
                        <div class="card w-75 mx-auto mb-4">
                            <div class="card-body">
                                <h5 class="card-title">キーキャップ「〇〇」</h5>
                                <h6 class="card-subtitle mb-2 text-muted">値段：¥△△△</h6>
                                <p class="card-text">ーーーーーーー ここには説明文が入ります ーーーーーーー</p>
                                <Link href="" class="card-link">Link</Link>
                            </div>
                        </div>
                        <div class="card w-75 mx-auto mb-4">
                            <div class="card-body">
                                <h5 class="card-title">キーキャップ「〇〇」</h5>
                                <h6 class="card-subtitle mb-2 text-muted">値段：¥△△△</h6>
                                <p class="card-text">ーーーーーーー ここには説明文が入ります ーーーーーーー</p>
                                <Link href="" class="card-link">Link</Link>
                            </div>
                        </div>
                        <div class="card w-75 mx-auto mb-4">
                            <div class="card-body">
                                <h5 class="card-title">キーキャップ「〇〇」</h5>
                                <h6 class="card-subtitle mb-2 text-muted">値段：¥△△△</h6>
                                <p class="card-text">ーーーーーーー ここには説明文が入ります ーーーーーーー</p>
                                <Link href="" class="card-link">Link</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;