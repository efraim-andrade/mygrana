import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: 1600px;

  display: grid;
  grid-column-gap: 2.4rem;
  grid-template-columns: 0.3fr 0.7fr;

  background: ${({ theme }) => theme.colors.background};

  @media screen and (max-width: 1500px) {
    max-width: 1270px;
  }

  > main {
  }

  > aside {
    padding-top: 45px;

    display: flex;
    justify-content: flex-end;
  }
`;
