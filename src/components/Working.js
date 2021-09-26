import styled from "styled-components"
import working from "../../public/images/working.gif"

const WorkingWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    
    img{
        width: 40%;
        height: auto;
    }
`
export default function Working(){
    return(
        <WorkingWrapper>
            <h1>Desculpe, ainda estamos trabalhando nisto :)</h1>
            <img src={working} alt="turtles" />
        </WorkingWrapper>
    )

}