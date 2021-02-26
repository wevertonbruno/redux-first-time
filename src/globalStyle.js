import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body{
        font-family: 'Roboto', sans-serif;
        font-size: 10px;
    }
`;