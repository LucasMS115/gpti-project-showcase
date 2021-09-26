import styled from 'styled-components'

export default function Footer() {
    return (
        <>
            <FooterContainer>
                <div>
                    <p>placeholder</p>
                </div>

                <div>
                    <p>Algum texto no footer 2021</p>
                </div>
            </FooterContainer>
        </>
    )
};

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: var(--color-primary);
    
    div{
        padding: 15px 12.5px;
        p{
            color: var(--color-tertiary)
        }
    }
`