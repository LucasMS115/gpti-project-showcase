import { useState } from 'react'
import styled from 'styled-components'
import Meta from '../src/infra/Meta'
import PlanningItem from '../src/components/PlanningItem'
import PdfFrame from '../src/components/PdfFrame'
import EAPTable from '../src/components/EAPTable'

import EAP from '../public/images/planning/EAP.jpg'
import Canvas from '../public/images/planning/canvas.png'
import EAR from '../public/images/planning/EAR.png'
import RACI from '../public/images/planning/matriz-raci.png'
import Qualidade from '../public/images/planning/qualidade.png'
import Custos from '../public/images/planning/bottom_up.png'
import Comunicacao from '../public/images/planning/comunicacao.png'
import Riscos from '../public/images/planning/matriz-riscos.png'

export default function Planning() {
  const [activeItem, setActiveItem] = useState('canvas')

  function renderActiveItem() {
    if (activeItem === 'eap') {
      return (
        <>
          <PlanningItem
            title="Estrutura Analítica de Projetos (EAP)"
            image={EAP}
          />
          <EAPTable />
        </>
      )
    } else if (activeItem === 'canvas') {
      return (
        <PlanningItem
          title="Canvas"
          image={Canvas}
          description=""
        />
      )
    } else if (activeItem === 'ear') {
      return (
        <PlanningItem
          title="Estrutura Analítica de Recursos"
          image={EAR}
          description=""
        />
      )
    } else if (activeItem === 'raci') {
      return (
        <PlanningItem
          title="Matriz RACI"
          image={RACI}
          description="FE = Front End | BE = Back-End."
        />
      )
    } else if (activeItem === 'costs') {
      return (
        <PlanningItem
          title="Estimativa de custos do projeto"
          image={Custos}
        />
      )
    } else if (activeItem === 'qualidade') {
      return (
        <PlanningItem
          title="Algumas métricas iniciais de qualidade do projeto"
          image={Qualidade}
        />
      )
    } else if (activeItem === 'ciclos') {
      return (
        <PdfFrame
          link="https://drive.google.com/file/d/1QqksgJgz6xSjnEQoSlPRhArL-7dicgrV/preview"
        />
      )
    } else if (activeItem === 'termo') {
      return (
        <PdfFrame
          link="https://drive.google.com/file/d/1rmutAid2cCOAaSfesjHClInoypoaVWPo/preview"
        />
      )
    } else if (activeItem === 'comunicacao') {
      return (
        <>

          <h2 style={{ margin: "80px 15px 15px 80px" }}>Plano de Comunicação</h2>
          <PdfFrame
            link="https://drive.google.com/file/d/1-J2gkAwe-rmrgUxYqb6jcMoh1iiXeZJX/preview"
          />

          <PlanningItem
            title="Matriz de comunicação"
            image={Comunicacao}
          />

        </>
      )
    } else if (activeItem === 'riscos') {
      return (
        <>
          <PlanningItem
            title="Matriz de Riscos"
            image={Riscos}
          />
        </>
      )
    } else if (activeItem === 'aquisicoes') {
      return (
        <>
          <PdfFrame
            link="https://drive.google.com/file/d/1IxVOktwx7QUEbVr_Md2ip1D9nXlSEU9U/preview"
          />
        </>
      )
    } else if (activeItem === 'interessados') {
    return (
      <>
        <PdfFrame
          link="https://drive.google.com/file/d/1ra9ppKy22VxsAmddZlsjk_wHHUWsSZWE/preview"
        />
      </>
    )
  }
  else if (activeItem === 'integracao') {
    return (
      <>
        <PdfFrame
          link="https://drive.google.com/file/d/1z8teG2yLfCZdxTYBXOxOtlAVwFsEbQ1A/preview"
        />
      </>
    )
  } else if (activeItem === 'termoV2') {
    return (
      <>
        <PdfFrame
          link="https://drive.google.com/file/d/1buEr8bsIhunKlFavg-J-KAHDGLeOpCEm/preview"
        />
      </>
    )
  }


}

return (
  <>
    <Meta title='Planejamento' />
    <SubMenu>
      <ul>
        <NavItem active={activeItem === 'canvas'} onClick={() => setActiveItem('canvas')}>Canvas</NavItem>
        <NavItem active={activeItem === 'eap'} onClick={() => setActiveItem('eap')}>EAP</NavItem>
        <NavItem active={activeItem === 'ear'} onClick={() => setActiveItem('ear')}>EAR</NavItem>
        <NavItem active={activeItem === 'raci'} onClick={() => setActiveItem('raci')}>Matriz Raci</NavItem>
        <NavItem active={activeItem === 'costs'} onClick={() => setActiveItem('costs')}>Custos</NavItem>
        <NavItem active={activeItem === 'qualidade'} onClick={() => setActiveItem('qualidade')}>Qualidade</NavItem>
        <NavItem active={activeItem === 'ciclos'} onClick={() => setActiveItem('ciclos')}>Ciclos</NavItem>
        <NavItem active={activeItem === 'termo'} onClick={() => setActiveItem('termo')}>Termo de Abertura</NavItem>
        <NavItem active={activeItem === 'comunicacao'} onClick={() => setActiveItem('comunicacao')}>Comunicação</NavItem>
        <NavItem active={activeItem === 'riscos'} onClick={() => setActiveItem('riscos')}>Riscos</NavItem>
        <NavItem active={activeItem === 'aquisicoes'} onClick={() => setActiveItem('aquisicoes')}>Aquisições</NavItem>
        <NavItem active={activeItem === 'interessados'} onClick={() => setActiveItem('interessados')}>Partes Interessadas</NavItem>
        <NavItem active={activeItem === 'integracao'} onClick={() => setActiveItem('integracao')}>Integração</NavItem>
        <NavItem active={activeItem === 'termoV2'} onClick={() => setActiveItem('termoV2')}>Termo de Abertura (V2)</NavItem>
      </ul>
    </SubMenu>
    {renderActiveItem()}
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