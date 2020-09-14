require('./test')('242-isAnagram', [
  ['abc', 'cba', true],
  ['', '', true],
  ['cdca', 'acdc', true],
  ['tdc', 'tda', false],
  ['abc', 'bac', true]
])
