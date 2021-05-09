require('./test')('21-mergeTwoLists', [
  [
    {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 4
        }
      }
    },
    {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4
        }
      }
    },
    {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 4
              }
            }
          }
        }
      }
    }
  ]
])
