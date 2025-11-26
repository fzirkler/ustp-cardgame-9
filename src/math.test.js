const { add } = require('./math');

test('add(2, 3) sollte 5 ergeben', () => {
  expect(add(2, 3)).toBe(5);
});

test('add(-1, 1) sollte 0 ergeben', () => {
  expect(add(-1, 1)).toBe(0);
});
