import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #f0f2f5;
        --primary: #e52e4d;
        --secondary: #F8C43C;
        --terciary: #6933ff;
        --text-title: #363f5f;
        --text-body: #828282;
        --backgroundLight: #f0f2f5;
        --shape: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1080px){
            font-size:93.75%
        }
        @media(max-width: 720px){
            font-size:87.5%
        }
        scroll-behavior: smooth;
    }

    body{
        background-color:var(--background);
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
    }

    button{
        cursor:pointer;
    }

    [disabled]{
        opacity:0.6;
        cursor:not-allowed;
    }
`;