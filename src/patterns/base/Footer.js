import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <div>
          <p>Meetour</p>
        </div>
        <div>
          <p>|</p>
        </div>
        <div>
          <p>São Paulo - Brasil</p>
        </div>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #6951ff;

  div {
    padding: 15px 12.5px;
    p {
      color: var(--color-background);
    }
  }
`;
