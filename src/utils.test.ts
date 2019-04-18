import { minutesToSeconds, formatSeconds } from './utils';

test('minutesToSeconds', () => {
  expect(minutesToSeconds(0)).toBe(0);
  expect(minutesToSeconds(-100)).toBe(0);
  expect(minutesToSeconds(25)).toBe(1500);
});

test('formatSeconds', () => {
  expect(formatSeconds(0)).toBe('00:00');
  expect(formatSeconds(-140)).toBe('00:00');
  expect(formatSeconds(1500)).toBe('25:00');
  expect(formatSeconds(347)).toBe('05:47');
  expect(formatSeconds(1275747)).toBe('60:00');
});
