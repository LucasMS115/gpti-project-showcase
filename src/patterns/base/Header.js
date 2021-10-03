import { useState } from 'react';
import { withRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'

function Header({ router }) {

    const [toggle, setToggle] = useState(false);

    return (
        <HeaderContainer>

            <HeaderTitle>
                <h1>MeeTour</h1>
                <h2>Conheça Pessoas</h2>
            </HeaderTitle>

            <NavContainer>

                <DesktopNav>            
                    <nav>
                        <ul>
                            <Link href="/"><NavItem active={router.pathname === '/'}>Home</NavItem></Link>
                            <Link href="/project"><NavItem active={router.pathname === '/project'}>Sobre o MeeTour</NavItem></Link>
                            <Link href="/us"><NavItem active={router.pathname === '/us'}>Sobre o time</NavItem></Link>
                            <Link href="/planning"><NavItem active={router.pathname === '/planning'}>Entregas e Planejamento</NavItem></Link>
                        </ul>
                    </nav>
                </ DesktopNav> 

                <Sandwich toggle={toggle}>
                    <div onClick={() => setToggle(!toggle)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Sandwich>

                {/* navbar mobile*/}
                {toggle &&
                    <SideNav >
                        <nav>
                            <ul>
                                <li onClick={() => setToggle(false)}><Link href="/"><a>Home</a></Link></li>
                                <li onClick={() => setToggle(false)}><Link href="/project"><a>Sobre o MeeTour</a></Link></li>
                                <li onClick={() => setToggle(false)}><Link href="/us"><a>Sobre o Time</a></Link></li>
                                <li onClick={() => setToggle(false)}><Link href="/planning"><a>Entregas e Planejamento</a></Link></li>
                            </ul>
                        </nav>
                    </SideNav>
                }

            </NavContainer>
        </HeaderContainer>
    )
};

const HeaderTitle = styled.div`
    h1 {
        background: var(--meetour);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const HeaderContainer = styled.div`
    width: 80%;
    max-width: 1500px;
    margin: auto;
    padding: 15px;

    h2{
        margin-bottom: 15px;
    }

    @media(max-width: 730px){
        text-align: center;
        margin-top: 10px;
        h2{
            margin-bottom: 0px;
        }
    }
`

const NavContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 0 10px 0;

    ul{
        list-style-type: none;  
        display: flex;
    }

    @media(max-width: 731px){
        border-bottom: none;
    }
`

const NavItem = styled.li`
    margin-right: 25px; 
    font-size: 1rem;
    padding: 15px 0;
    cursor: pointer;

    color: ${props => props.active === true ? 'var(--color-secondary)' : '#666666'};
    font-weight: ${props => props.active === true ? 'bold' : 'regular'};
    border-bottom: ${props => '3px solid ' + (props.active ? 'var(--color-secondary)' : 'transparent')};

    &:hover{
        color: var(--color-light-purple);
        border-bottom: 3px solid var(--color-light-purple);
    }
`

const DesktopNav = styled.div`

    @media(max-width: 731px){
        display: none;
    }

`

const Sandwich = styled.div`

    display: none;
    position: fixed;
    right: 20px;
    top: 20px;

    @media(max-width: 730px){

        display: inline-block;

        span {
            display: block;
            height: 3px;
            width: 20px;
            background: var(--color-primary);
            margin-bottom: 3px;
            border-radius: 1px;
            transition: all 0.3s ease;
        }

        ${props => props.toggle && css`
            span {
                margin: 0;
            }
            span:nth-child(1){
                transform: rotate(45deg) translateY(4.45px);
            }
            span:nth-child(2){
                opacity: 0;
            }
            span:nth-child(3){
                transform: rotate(-45deg) translateY(-4px);
            }
        `}
    }

    &:hover{
        cursor: pointer;
    }
`

const SideNav = styled.div`
    
    display: none;

    @media(max-width: 730px){
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        width: 70%;
        height: 100vh;
        padding-top: 60px;
        background: var(--color-primary);
        
        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            li{
                margin-right: 0;
                margin-top: 30px;
                
                a {
                    font-size: 1.75rem;
                    text-decoration: none;
                    color: var(--color-tertiary);
                }
            }

        }
    }
`

export default withRouter(Header)