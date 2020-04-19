import styled from 'styled-components';
import { DoorOpen } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  margin-bottom: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled(DoorOpen)`
  height: 30px;

  color: ${({ theme }) => theme.colors.background};
`;
