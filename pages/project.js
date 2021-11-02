import styled from 'styled-components'
import Meta from '../src/infra/Meta'
import Working from '../src/components/Working'
import Separator from '../src/components/Separator'
import eventInfo from '../public/images/about/event_info.png'
import event from '../public/images/about/event.png'

export default function Project() {

  return (
    <>
      <Meta title='O Projeto' />
      <TextContainer>
        <h2>Um novo meio para descobrir novas pessoas com interesses mútuos e redescobrir a cidade de São Paulo com o que ela tem de melhor para oferecer.</h2>
      </TextContainer>

      <Separator />

      <SectionScreens>

        <div>
          <div>
            <figure>
              <img src={event} alt="Evento" />
            </figure>
          </div>

          <div>
            <p>O app mostrará eventos que acontecerão em locais próximos ou dentro de uma área específica que você pode definir. Os eventos serão mostrados um de cada vez, e, caso tenha interesse, ao clicar no botão à direita, o app exibirá mais informações sobre aquele evento, caso não, pode clicar no botão à esquerda e um novo evento será sugerido.</p>
          </div>
        </div>

        <div>

          <div>
            <p>O app conterá informações detalhadas sobre o local, data, descrição, pessoas que confirmaram presença pelo MeeTour, informações de acessibilidade, além de de um link para visualização de fotos do local no Instagram.</p>
          </div>

          <div>
            <figure>
              <img src={eventInfo} alt="Informações sobre o evento" />
            </figure>
          </div>

        </div>

      </SectionScreens>

      <Separator />

      <TextContainer>

        <p>Diante do cenário pós-pandemia, a aplicação pode satisfazer o anseio de muitos pelo retorno de atividades ao ar livre, em pontos que até então estavam restritos pelas normas sanitárias em vigor.</p>

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
      object-fit: contain;
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