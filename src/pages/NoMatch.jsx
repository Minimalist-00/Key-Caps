import React from 'react';
import { Link } from "react-router-dom";

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

// 設定されていないリンクを踏んだときに出るページ

function NoMatch() {
  return (
    <Alert severity="error" action={<Button color="inherit" size="small"><Link to="/" >KeyCapsへ戻る</Link></Button>}>
      指定されたページは存在しません
    </Alert>
  );
}

export default NoMatch;