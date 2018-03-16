const ac = require('auto-curry')

function evaluateCondition(condition) {
  return typeof condition === 'function' ? condition() : !!condition
}

module.exports = ac(function skipIf(condition, name, _test) {
  if (evaluateCondition(condition)) {
    test.skip(name, _test)
  } else {
    test(name, _test)
  }
})

module.exports.evaluateCondition = evaluateCondition
