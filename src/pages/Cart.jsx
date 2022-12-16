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
            <div className="bigSpace"></div>
        </div>
    );
}

export default Cart;