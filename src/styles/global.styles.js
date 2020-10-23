import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        background-color: #F5F5f5;
        font-size: 14px;
        color: #333;
        font-family: sans-serif;
    }

    .App {
        height: 100vh;
    }
`;
