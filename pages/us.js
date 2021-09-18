import styled from 'styled-components'
import Meta from '../src/infra/Meta'

const Title = styled.h1`
  font-size: 50px;
`

export default function Home() {

  return(
    <>
      <Meta title='Sobre Nós' />
      <Title>Sobre o time</Title>
    </>
  ) 

}
