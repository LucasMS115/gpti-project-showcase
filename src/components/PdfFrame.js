import styled from "styled-components"

export default function PdfFrame(props) {
    return (
        <Wrapper>
            <iframe src={props.link} width="100%" height="600px" allow="autoplay"></iframe>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    margin: 60px auto;
`;
