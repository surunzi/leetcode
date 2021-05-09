require('./test')('20-isValid', [
  ['()', true],
  ['()[]{}', true],
  ['(]', false],
  ['([)]', false],
  ['{[]}', true],
  ['({[)', false],
  ['(([]){})', true]
])
