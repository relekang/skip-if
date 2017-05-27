const skipIf = require('./index');

test('evaluateCondition should evaluate functions', () => {
  expect(skipIf.evaluateCondition(() => true)).toBe(true);
  expect(skipIf.evaluateCondition(() => false)).toBe(false);
})

test('evaluateCondition should evaluate literals', () => {
  expect(skipIf.evaluateCondition(true)).toBe(true);
  expect(skipIf.evaluateCondition(false)).toBe(false);
  expect(skipIf.evaluateCondition(0)).toBe(false);
  expect(skipIf.evaluateCondition('')).toBe(false);
})

function brokenTest() {
  expect(true).toBe(false)
}

skipIf(true, 'skipIf should skip test based on true', brokenTest)
skipIf(() => true, 'skipIf should skip test based on function that returns true', brokenTest)
