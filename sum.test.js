const sum = require('./sum');

test('adds 2 + 3  equals 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('adds 2 + 2 equal 4 ', () => {
  expect(2 + 2).toBe(4);
});

test('Object Assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
