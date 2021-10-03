import styled from 'styled-components'
import Meta from '../src/infra/Meta'
import Separator from '../src/components/Separator'
import masp from '../public/images/meetings/masp.jpg'
import lucas from '../public/images/us/lucas.jpg'
import victor from '../public/images/us/victor.jpg'
import bruno from '../public/images/us/bruno.jpeg'
import shindy from '../public/images/us/shindy.jpeg'

export default function Home() {

  return (
    <>
      <Meta title='Home' />

      <FirstSection>
        <div>

          <div>
            <img src={masp} alt="Masp" />
          </div>

          <div>
            <h3>Um novo meio para descobrir novas pessoas com interesses mútuos e redescobrir a cidade de São Paulo.</h3>
            <p>Um app mobile cujo objetivo consiste em  reunir pessoas através de encontros relacionados a pontos turísticos e culturais na cidade de São Paulo.</p>
          </div>

        </div>

      </FirstSection>

      <Separator />

      <SecondSection>

        <p>Nosso time</p>

        <div>

          <figure>
            <img src={shindy} alt="Adalberto Shindy" />
            <figcaption>Shindy</figcaption>
          </figure>

          <figure>
            <img src={bruno} alt="Bruno Contreras" />
            <figcaption>Bruno</figcaption>
          </figure>

          <figure>
            <img src={lucas} alt="Lucas MS" />
            <figcaption>Lucas</figcaption>
          </figure>

          <figure>
            <img src={victor} alt="Victor Lopes" />
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
          box-shadow: var(--default-shadow);
          border-radius: 8px;
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
      border-radius: 50%;
      margin-bottom: 5px;
    }

    @media(max-width: 599px){
      figure{
        margin: 10px 15px;
      }
    } 

`