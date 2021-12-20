/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const stack = [root]
  const result = []
  while (stack.length) {
    const node = stack[stack.length - 1] // 取出最后一位
    switch (true) {
      case !!node.left:
        stack.push(node.left)
        node.left = null
        node.isPath = true
        break
      case !!node.right:
        stack.push(node.right)
        node.right = null
        node.isPath = true
        break
      default:
        !node.isPath && result.push(stack.map(node => node.val).join('->'))
        stack.pop()
    }
  }
  return result
};