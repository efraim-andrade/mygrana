import React from 'react';

import UserInfo from '../UserInfo';

import { Container, Icon } from './styles';

const Header: React.FC = () => (
  <Container>
    <UserInfo />

    <Icon />
  </Container>
);

export default Header;
