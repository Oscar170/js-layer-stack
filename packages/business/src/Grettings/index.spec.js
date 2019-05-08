import Grettings from './index';

test('should return the gretting to the user', () => {
  expect(Grettings('Username')).toBe('Hello Username');
});
