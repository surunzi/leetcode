require('./test')('226-invertTree', [
  [
    {
      val: 4,
      left: {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: null
        },
        right: {
          val: 3,
          left: null,
          right: null
        }
      },
      right: {
        val: 7,
        left: {
          val: 6,
          left: null,
          right: null
        },
        right: {
          val: 9,
          left: null,
          right: null
        }
      }
    },
    {
      val: 4,
      left: {
        val: 7,
        left: {
          val: 9,
          left: null,
          right: null
        },
        right: {
          val: 6,
          left: null,
          right: null
        }
      },
      right: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null
        },
        right: {
          val: 1,
          left: null,
          right: null
        }
      }
    }
  ],
  [null, null]
])
