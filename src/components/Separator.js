import styled from "styled-components"

export default function Separator() {
    return (
        <>
            <Sep />
        </>
    )
}

const Sep = styled.div`
    width: 40%;
    height: 1px;
    background-color: grey;
    margin: 40px auto;
`;
