import { createGlobalStyle } from 'styled-components'
import Meta from '../../infra/Meta'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <>
            <Meta />
            <Header />
            <GlobalStyle />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
};

const GlobalStyle = createGlobalStyle`
    :root {
        /* paleta de cores */
        --color-primary: #131313;
        --color-secondary: #3d00f3;
        --color-tertiary: #1Bdff1;
        --color-text: black;
        --color-background: #ffffff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    main{
        background: var(--color-background);
        width: 80%;
        max-width: 1500px;
        margin: auto;
        min-height: 80vh;
    }

    body {
        background: var(--color-background);
    }

    body, input {
        font-family: 'Roboto', sans-serif;
        font-size: 1.8rem;
    }

    h1, h2{
        color: var(--color-text);
        font-family: 'Roboto', sans-serif;
        font-style: normal;
    }
    
    h1{
        font-size: 2rem;
        line-height: 121%;
    }

    h2{
        font-size: 1.5rem;
        line-height: 121%;
        font-weight: normal;
    }

    h3, h4, h5, p, span{
        color: var(--color-text);
        font-family: 'Roboto', sans-serif;
        font-style: normal;
    }

    h3{
        font-size: 1.17rem;
    }

    p{
       font-size: 1rem;
       line-height: 1.4rem;
    }

    span{
        font-weight: 300;
        font-size: 0.6rem;
    }

    a{
        text-decoration: none;
        color: var(---color-text);
    }

    button {
        cursor: pointer;
    }

    /* @media (min-width:480px) {
         :root{
             font-size: 70%;
         }
    }
    @media (min-width:600px) { 
        :root{
             font-size: 80%;
         }
    }
    @media (min-width:801px) {
        :root{
             font-size: 90%;
        }
    }
    @media (min-width:1021px) {
        :root{
             font-size: 100%;
         }
    }
    @media (min-width:2200px) {
        :root{
             font-size: 120%;
         }
    } */
`;