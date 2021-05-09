module.exports = function(l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  let newL
  let curNode

  while (l1 || l2) {
    let targetNode
    if (!l1 || (l2 && l2.val < l1.val)) {
      targetNode = l2
      l2 = l2.next
    } else {
      targetNode = l1
      l1 = l1.next
    }
    if (!curNode) {
      curNode = targetNode
      newL = targetNode
    } else {
      curNode.next = targetNode
      curNode = curNode.next
    }
  }

  return newL
}
