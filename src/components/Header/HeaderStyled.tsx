import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem 4rem;
  width: 100vw;

  .header {
    &__title {
      font-size: 5rem;
    }
  }
`;

export default HeaderStyled;
