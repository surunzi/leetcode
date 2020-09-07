module.exports = function sumOfLeftLeaves(root, isLeft) {
  if (!root) return 0

  var ret = 0

  if (root.left) ret += sumOfLeftLeaves(root.left, true)
  if (root.right) ret += sumOfLeftLeaves(root.right, false)

  if (!root.left && !root.right && isLeft) return root.val

  return ret
}
