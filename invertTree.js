module.exports = function invertTree(root) {
  if (!root) return root

  var tmp = root.left
  root.left = root.right
  root.right = tmp

  invertTree(root.left)
  invertTree(root.right)

  return root
}
