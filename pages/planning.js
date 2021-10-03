import { useState } from 'react'
import styled from 'styled-components'
import Meta from '../src/infra/Meta'
import PlanningItem from '../src/components/PlanningItem'

import EAP from '../public/images/planning/EAP.jpg'
import inProgress from '../public/images/planning/in_progress.gif'

export default function Planning() {
  const [activeItem, setActiveItem] = useState('eap')

  function renderActiveItem () {
    if (activeItem === 'eap') {
      return (
        <PlanningItem
          title="Estrutura Analítica de Projetos (EAP)"
          image={EAP}
        />
      )
    } else if (activeItem === 'canvas') {
      return (
        <PlanningItem
          title="Canvas"
          image={inProgress}
          description="brb"
        />
      )
    }
  }

  return (
    <>
      <Meta title='Planejamento' />
      <SubMenu>
        <ul>
          <NavItem active={activeItem === 'eap'} onClick={() => setActiveItem('eap')}>EAP</NavItem>
          <NavItem active={activeItem === 'canvas'} onClick={() => setActiveItem('canvas')}>Canvas</NavItem>
        </ul>
      </SubMenu>
      { renderActiveItem() }
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

const SubMenu = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    flex-flow: wrap;
  }
`

const NavItem = styled.li`
    font-size: 1rem;
    padding: 20px 20px;
    cursor: pointer;
    border-radius: 50px;

    background-color:  ${props => props.active === true ? 'var(--color-light-purple)' : 'transparent'};
    color: ${props => props.active === true ? 'white' : 'var(--color-light-purple)'};
`