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

        --meetour: linear-gradient(130deg, #6951FF 0%, #8A94F0 100%);
        --default-shadow: 0px -4px 8px rgba(0, 0, 0, 0.25)
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    main{
        background: var(--color-background);
        max-width: 1500px;
        margin: auto;
        min-height: 80vh;
    }

    body {
        background: var(--color-background);
    }

    body, input {
        font-family: 'Lato', sans-serif;
        font-size: 1.8rem;
    }

    h1, h2{
        color: var(--color-text);
        font-family: 'Lato', sans-serif;
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
        font-family: 'Lato', sans-serif;
        font-style: normal;
    }

    h3{
        font-size: 1.17rem;
    }

    p{
       font-size: 1.1rem;
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

    @media (max-width:479px) {
         :root{
             font-size: 62.5%;
         }
    }
    @media (min-width:480px) and (max-width:599px) {
         :root{
             font-size: 70%;
         }
    }
    @media (min-width:600px) and (max-width: 800px){ 
        :root{
             font-size: 80%;
         }
    }
    @media (min-width:801px) and (max-width: 1020px){
        :root{
             font-size: 90%;
        }
    }
    @media (min-width:1021px) and (max-width: 2199px){
        :root{
             font-size: 100%;
         }

         main{
             width: 80%;
         }
    }
    @media (min-width:2200px) {
        :root{
             font-size: 110%;
         }
    }
`;