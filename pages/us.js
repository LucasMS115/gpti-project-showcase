import styled from 'styled-components'
import Meta from '../src/infra/Meta'
import Separator from '../src/components/Separator'

import pinguins from '../public/images/pinguins.jpg'
import lucas from '../public/images/us/lucas.jpg'
import victor from '../public/images/us/victor.jpg'
import bruno from '../public/images/us/bruno.jpeg'
import shindy from '../public/images/us/shindy.jpeg'
import meet from '../public/images/us/meet.gif'

export default function Us() {

  return (
    <>
      <Meta title='Sobre Nós' />

      <SectionEquipe>

        <h2>Equipe MeeTour</h2>

        <div>

          <div>
            <figure>
              <img src={shindy} alt="Adalberto Shindy" />
            </figure>
            <p>Adalberto Shindy</p>
          </div>

          <div>
            <figure>
              <img src={bruno} alt="Bruno Contreras" />
            </figure>
            <p>Bruno Contreras</p>
          </div>

          <div>
            <figure>
              <img src={lucas} alt="Lucas Mendes Sales" />
            </figure>
            <p>Lucas M. Sales</p>
          </div>

          <div>
            <figure>
              <img src={victor} alt="Victor Lopes" />
            </figure>
            <p>Victor Lopes</p>
          </div>

        </div>


      </SectionEquipe>

      <Separator />

      <SectionOrigem>

        <h2>Origem</h2>

        <div>

          <div>
            <p>Somos quatro estudantes do curso de Sistemas de Informação (2019), e a alguns semestres fazemos trabalhos em grupo juntos. A ideia do projeto surgiu durante um brainstorming para o tema de projeto das matérias de Resolução de Problemas II e Gestão de Projetos de Tecnologia da Informação, combinando uma idea de um aplicativo de eventos e um dos Objetivos de Desenvolvimento Sustentável(ODS).</p>
          </div>

          <div>
            <img src={meet} alt="Meet" />
          </div>

        </div>

      </SectionOrigem>

      <Separator />

      <SectionColaboradores>

        <h2>Colaboradores do Projeto</h2>

        <div>
          <p>Adalberto Shindy</p>
          <p>Bruno Contreras</p>
          <p>Daniel Chang</p>
          <p>Lucas Mendes Sales</p>
          <p>Luiz Felipe Vieira Cordeiro</p>
          <p>Victor Lopes</p>
        </div>

      </SectionColaboradores>

    </>
  )

}

const SectionEquipe = styled.section`

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: center;
  margin: 20px auto 20px auto;
  width: 100%;
  max-width: 1300px;
  
  h2{
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  div{
    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;

    div{
      width: 250px;
      flex-direction: column;
    }

  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: var(--default-shadow);
    /* object-position: 50% 0; */
  }

  figure{
    margin-bottom: 10px;
    width:220px;
    height: 220px;
  }

  @media(max-width: 1300px){

    div{
      div{
        width: 200px;
      }
    }

    figure{
      width: 180px;
      height: 180px;
    }

  }

  @media(max-width: 1024px){

    width: 90%;

    div{
      div{
        width: 180px;
      }
    }

    figure{
      width: 160px;
      height: 160px;
    }

  }

  @media(max-width: 800px){

    width: 350px;
    
    div{
      div{
        width: 150px;
        margin: 10px;
      }
    }

    figure{
      margin-bottom: 5px;
      width: 140px;
      height: 140px;
    }

  }

  @media(max-width: 500px){

    width: 280px;

    div{
      div{
        width: 120px;
      }
    }

    figure{
      margin-bottom: 10px;
      width: 110px;
      height: 110px;
    }

    }

`

const SectionOrigem = styled.section`

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

        flex-direction: column-reverse;

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

const SectionColaboradores = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;

    h2{
      margin-bottom: 20px;
    }

    div{
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      text-align: center;
      width: 60%;
      max-width: 700px;
    }

    p{
      margin: 10px;
      font-size: 1.1rem;
    }

`