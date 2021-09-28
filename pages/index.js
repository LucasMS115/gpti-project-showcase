import styled from 'styled-components'
import Meta from '../src/infra/Meta'
import Separator from '../src/components/Separator'
import masp from '../public/images/meetings/masp.jpg'
import lucas from '../public/images/us/lucas.jpg'

export default function Home() {

  return(
    <>
      <Meta title='Home' />

      <FirstSection>

        <h2>Se tiver algum Título</h2>
        
        <div>

          <div>
            <img src={masp} alt="Masp" />
          </div>

          <div>
            <h3>Frase que represente o objetivo do app de algum jeito</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

        </div>

      </FirstSection>
      
      <Separator />

      <SecondSection>

        <p>Breve apresentação do time</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>

        <div>
          <img src={lucas} alt="Adalberto Shindy" />
          <img src={lucas} alt="Bruno Contreras" />
          <img src={lucas} alt="Lucas MS" />
          <img src={lucas} alt="Victor Ferreira" />
        </div>

      </SecondSection>

    </>
  ) 

}

const FirstSection = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 10px 60px 10px 60px;

    h2{
      margin-bottom: 20px;
    }

    h3{
      margin-bottom: 10px;
    }

    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0 25px;

      div{
        width: 50%;
        text-align: center;
        flex-direction: column;

        img{
          width: 100%;
          height: auto;
          border: 1px solid grey;
          border-radius: 0 40px 0 40px;
        }

      }

    }
    
`

const SecondSection = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    div{
      margin: 20px 0 40px 0;
      flex-direction: row;
      width: 70%;
    }

    p:nth-child(1){
      font-weight: bold;
      margin-bottom: 5px;
    }

    p{
      width: 60%;
    }

    img{
      width: 100px;
      border-radius: 100px;
      margin: 10px 20px;
    }
    
`