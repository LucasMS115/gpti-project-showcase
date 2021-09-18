
import { createGlobalStyle } from 'styled-components'
import Meta from '../../infra/Meta';
import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function Layout({ children }) {
    return (
        <>
            <Meta />
            {/* <Header /> */}
            <GlobalStyle />
                <main>
                    {children}
                </main>
            {/* <Footer /> */}
        </>
    )
};
