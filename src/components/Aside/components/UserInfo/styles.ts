import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  .info {
    margin-right: 0.8rem;

    > small,
    > strong {
      display: block;

      text-align: right;
      color: ${({ theme }) => theme.colors.text};
    }

    > small {
      margin-bottom: 0.8rem;

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
