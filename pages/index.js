import styled from 'styled-components'
import Meta from '../src/infra/Meta'
import Separator from '../src/components/Separator'
import masp from '../public/images/meetings/masp.jpg'
import lucas from '../public/images/us/lucas.jpg'

export default function Home() {

  return (
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

          <figure>
            <img src={lucas} alt="Adalberto Shindy" />
            <figcaption>Shindy</figcaption>
          </figure>

          <figure>
            <img src={lucas} alt="Bruno Contreras" />
            <figcaption>Bruno</figcaption>
          </figure>

          <figure>
            <img src={lucas} alt="Lucas MS" />
            <figcaption>Lucas</figcaption>
          </figure>

          <figure>
            <img src={lucas} alt="Victor Ferreira" />
            <figcaption>Victor</figcaption>
          </figure>
          
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
        text-align: center;
        flex-direction: column;
        min-width: 300px;
        max-width: 520px;

        img{
          width: 100%;
          height: auto;
          border: 1px solid grey;
          border-radius: 0 40px 0 40px;
        }

      }

    }
    
    @media(max-width: 730px){

      padding: 0;

      div{

        flex-direction: column;

        div{
          min-width: unset;
          width: 80%;
          min-width: 300px;

          img{
            width: 100%;
            max-width: 330px;
            margin-bottom: 25px;
          }
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
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
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
    
    figure{
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 15%;
      min-width: 75px;
      max-width: 120px;
      margin: 10px 30px;
    }

    figcaption{
      font-size: 1.2rem;
      text-align: center;
    }
    
    img{
      width: 100%;
      border-radius: 100px;
      margin-bottom: 5px;
    }

    @media(max-width: 599px){
      figure{
        margin: 10px 15px;
      }
    } 

`