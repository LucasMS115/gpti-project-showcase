import styled from 'styled-components'
import Meta from '../src/infra/Meta'
import Separator from '../src/components/Separator'

import pinguins from '../public/images/pinguins.jpg'
import lucas from '../public/images/us/lucas.jpg'

export default function Us() {

  return(
    <>
      <Meta title='Sobre Nós' />

      <SectionEquipe>

        <h2>Equipe MeeTour</h2>

        <div>

          <div>
            <figure>
              <img src={lucas} alt="Lucas Mendes Sales"/>
            </figure>
            <p>Lucas M. Sales</p>
          </div>
          
          <div>
            <figure>
              <img src={pinguins} alt="Pinguins"/>
            </figure>
            <p>Pinguins</p>
          </div>

          <div>
            <figure>
              <img src={lucas} alt="Lucas Mendes Sales"/>
            </figure>
            <p>Lucas M. Sales</p>
          </div>

          <div>
            <figure>
              <img src={pinguins} alt="Pinguins"/>
            </figure>
            <p>Pinguins</p>
          </div>

        </div>


      </SectionEquipe>

      <Separator/>

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

  h2{
    font-weight: bold;
    margin-bottom: 20px;
  }

  div{

    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;

    div{
      flex-direction: column;
    }

  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-position: 50% 0; */
  }

  figure{
    margin-bottom: 10px;
    width:200px;
    height: 220px;
  }


`