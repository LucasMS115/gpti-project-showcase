import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
    return (
        <HeaderContainer>

            <div>
                <h1>MeeTour</h1>
                <h2>Alguma frase bonitinha pra servir como slogan do app</h2>
            </div>

            <NavContainer>

                <nav>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/project"><a>Sobre o MeeTour</a></Link></li>
                        <li><Link href="/us"><a>Sobre o time</a></Link></li>
                        <li><Link href="/planning"><a>Entregas e Planejamento</a></Link></li>
                    </ul>
                </nav>

            </NavContainer>
        </HeaderContainer>
    )
};

const HeaderContainer = styled.div`
    width: 80%;
    max-width: 1500px;
    margin: auto;
    padding: 15px;

    h2{
        margin-bottom: 15px;
    }
`

const NavContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid grey;

    ul{
        list-style-type: none;  
        display: flex;

        li{
            margin-right: 25px; 
            font-size: 1rem;
        }

        li:hover{
            color: var(--color-secondary);
        }
    }
`