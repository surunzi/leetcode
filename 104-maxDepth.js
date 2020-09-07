module.exports = function maxDepth(root) {
  if (!root) return 0

  var left = 1,
    right = 1

  if (root.left) left += maxDepth(root.left)
  if (root.right) right += maxDepth(root.right)

  return left > right ? left : right
}
