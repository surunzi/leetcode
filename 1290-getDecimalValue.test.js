const test = require('./test')

test('1290-getDecimalValue', [
  [test.toSinglyLinkedList([1, 0, 1]), 5],
  [test.toSinglyLinkedList([0]), 0],
  [test.toSinglyLinkedList([1]), 1],
  [
    test.toSinglyLinkedList([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]),
    18880
  ],
  [test.toSinglyLinkedList([0, 0]), 0]
])
