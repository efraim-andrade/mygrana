import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  .info {
    margin-left: 0.8rem;

    > small,
    > strong {
      display: block;

      color: ${({ theme }) => theme.colors.text};
    }

    > small {
      margin-bottom: 0.4rem;

      font-weight: 200;
      font-size: 1.6rem;
    }

    > strong {
      font-size: 1.2rem;
    }
  }

  .avatar {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
`;
