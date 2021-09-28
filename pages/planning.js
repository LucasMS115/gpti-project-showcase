import styled from 'styled-components'
import Meta from '../src/infra/Meta'
import placeholder from '../public/images/planning/placeholder.png'
import PlanningItem from '../src/components/PlanningItem'
import Separator from '../src/components/Separator'

export default function Planning() {

  return (
    <>
      <Meta title='Planejamento' />
      <Intro>
        <h2>Título da descrição da página</h2>
        <p>Texto que descreve o que tem nesta página, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </Intro>

      <PlanningItem
        title="Título da entrega"
        image={placeholder}
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />

      <Separator />

      <PlanningItem
        title="Título da entrega"
        image={placeholder}
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />
      
    </>
  )

}

const Intro = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 10px auto 30px auto;
  width: 65%;

  h2{
    font-weight: bold;
    margin-bottom: 10px;
  }

`
