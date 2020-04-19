import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 0.7fr 0.3fr;

  background: ${({ theme }) => theme.colors.background};

  > main {
  }

  > aside {
    padding-top: 45px;

    display: flex;
    justify-content: flex-end;
  }
`;
