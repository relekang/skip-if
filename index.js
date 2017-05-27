function evaluateCondition(condition) {
  return typeof condition === 'function' ? condition() : !!condition
}

module.exports = function skipIf(condition, name, _test) {
  if (evaluateCondition(condition)) {
    test.skip(name, _test)
  } else {
    test(name, _test)
  }
}

module.exports.evaluateCondition = evaluateCondition
