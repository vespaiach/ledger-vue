import { expect, test } from 'vitest';

import { getMonthList, getMonthDates } from './utils';

test('getMonthDates, new Date(2022, 1, 27)', () => {
  const dates = getMonthDates(new Date(2022, 1, 27));

  expect(dates).toHaveLength(42);
  expect(dates[0].getDate()).toBe(27);
  expect(dates[dates.length - 1].getDate()).toBe(9);
  expect(dates[dates.length - 1].getMonth()).toBe(3);
});

test('getMonthList', () => {
  const months = getMonthList(new Date(2022, 2, 1), 10);

  expect(months).toHaveLength(21);

  expect(months[0].month).toBe(4);
  expect(months[0].year).toBe(2021);
  expect(months[0].startDate.getDate()).toBe(25);
  expect(months[0].startDate.getMonth()).toBe(3);

  expect(months[20].month).toBe(0);
  expect(months[20].year).toBe(2023);
  expect(months[20].startDate.getDate()).toBe(25);
  expect(months[20].startDate.getMonth()).toBe(11);
});
