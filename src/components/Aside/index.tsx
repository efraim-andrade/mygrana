import React, { useMemo } from 'react';

import { formatedDate } from '@/utils/functions';

import { Header } from './components';
import { Container } from './styles';

const Aside: React.FC = () => {
  const month = useMemo(() => formatedDate.getMonthWrittenInFull(), []);

  return (
    <Container>
      <Header />

      <div className="status">
        <strong>{month}</strong>
      </div>
    </Container>
  );
};

export default Aside;
