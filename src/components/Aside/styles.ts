import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 26px;
  height: calc(100% - 45px);
  box-shadow: 0 0 10px rgba(51, 51, 51, 0.15);

  background: ${({ theme }) => darken(0.1, theme.colors.background)};

  > .status {
    > strong {
      margin-bottom: 1.6rem;

      display: block;

      color: ${({ theme }) => theme.colors.text};
      font-size: 2.4rem;
      font-weight: bold;
      text-transform: capitalize;

      opacity: 0.6;
    }
  }
`;
