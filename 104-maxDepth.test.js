require('./test')('104-maxDepth', [
  [
    {
      left: {},
      right: {
        left: {},
        right: {
          right: {}
        }
      }
    },
    4
  ],
  [
    {
      left: {},
      right: {}
    },
    2
  ]
])
