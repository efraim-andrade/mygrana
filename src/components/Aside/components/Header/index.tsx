import React from 'react';

import UserInfo from '../UserInfo';

import { Container, Icon } from './styles';

const Header: React.FC = () => (
  <Container>
    <Icon />

    <UserInfo />
  </Container>
);

export default Header;
