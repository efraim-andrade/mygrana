import MockDate from 'mockdate';

import { getMonthWrittenInFull } from '.';

describe('Utils/Functions - formatedDate', () => {
  const STATIC_DATE = new Date(2020, 3, 20, 16);

  MockDate.set(STATIC_DATE);

  it('should be able to return the right month in portuguesse', () => {
    const month = getMonthWrittenInFull();

    expect(month).toBe('abril');
  });
});
