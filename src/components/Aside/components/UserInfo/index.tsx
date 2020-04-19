import React from 'react';

import { Container } from './styles';

const UserInfo: React.FC = () => (
  <Container>
    <img
      src="https://avatars1.githubusercontent.com/u/28229600?s=460&u=091aba50d4e61541054ff4b6c9d4e7927a3619c5&v=4"
      alt=""
      className="avatar"
    />
    <div className="info">
      <small>Efraim Andrade</small>

      <strong>Mobile & FrontEnd Developer</strong>
    </div>
  </Container>
);

export default UserInfo;
