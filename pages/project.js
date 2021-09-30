import styled from 'styled-components'
import Meta from '../src/infra/Meta'
import Working from '../src/components/Working'
import Separator from '../src/components/Separator'
import pinguins from '../public/images/pinguins.jpg'

export default function Project() {

  return (
    <>
      <Meta title='O Projeto' />
      <TextContainer>
        <h2>Frase sobre o objetivo do projeto</h2>
        <p>Texto que descreve um pouco sobre a ideia principal do app, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </TextContainer>

      <Separator />

      <SectionScreens>

        <div>
          <div>
            <figure>
              <img src={pinguins} alt="Pinguins" />
            </figure>
          </div>

          <div>
            <p>Texto que descreve um pouco de como o app funciona, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamsed quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        <div>

          <div>
            <p>Texto que descreve um pouco de como o app funciona, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamsed quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div>
            <figure>
              <img src={pinguins} alt="Pinguins" />
            </figure>
          </div>

        </div>

      </SectionScreens>

      <Separator />

      <TextContainer>

        <p>Texto que descreve um pouco sobre a ideia principal do app, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      </TextContainer>

    </>
  )

}

const TextContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 10px auto 40px auto;
  width: 65%;

  h2{
    font-weight: bold;
    margin-bottom: 10px;
  }

`
const SectionScreens = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: auto;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65%;
    min-width: 200px;
    max-width: 750px;
    margin: 20px auto 20px auto;

    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 20px;
    }

    p{
      text-align: center;
    }
  
    //não precisa do crop aqui pras imagens finais
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: var(--default-shadow);
    }
  
    figure{
      margin-bottom: 10px;
      width:200px;
      height: 280px;
    }

  }


  @media(max-width: 730px){
    div{
      flex-direction: column;
      margin: 0 10px;

      + div{
        margin-bottom: 20px;
      }

      //não precisa do crop aqui pras imagens finais
    
      figure{
        width:150px;
        height: 210px;
      }

    }

    div:nth-child(2){
      flex-direction: column-reverse;
    }

  } 
`