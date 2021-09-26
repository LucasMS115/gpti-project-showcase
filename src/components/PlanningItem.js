import styled from "styled-components"

export default function PlanningItem(props) {
    return (
        <Wrapper>
            <h2>{props.title}</h2>
            <img src={props.image} alt={`MeeTour ${props.title}`} />
            <p>{props.description}</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 60px auto;

    h2{
        margin: 15px 15px 15px 80px;
    }

    img{
        width: 90%;
        height: auto;
        margin: 20px auto;
    }

    p{
        text-align: center;
        width: 80%;
        margin: auto;
    }
`;
