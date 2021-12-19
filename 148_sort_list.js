/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


/**
 *  实现并归排序（只能合并有序链表）
 * @param {ListNode} head1 
 * @param {ListNode} head2 
 */
const merge = (head1, head2) => {
  const dummyHead = new ListNode(0) // 实现假节点
  let [temp, temp1, temp2] = [dummyHead, head1, head2] // 初始化三个节点，以方便之后的排序
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) { // 判空
      temp.next = temp1 // 排序
      temp1 = temp1.next // 战术后移
    } else {
      temp.next = temp2 // 排序
      temp2 = temp2.next // 战术后移
    }
    temp = temp.next
  }
  temp.next = temp1 !== null ? temp1 : temp2 // 接上剩下的内容，因为是两个有序链表，所以可以直接接上
  return dummyHead.next // 去掉头节点
}


/**
 *  实现二分（保证每一次参与并归的链表都是有序链表）
 * @param {ListNode} head 
 * @param {ListNode} tail 
 */
const toSortList = (head, tail) => {
  if (head === null) return head // 头判空
  if (head.next === tail) { // 尾判空
    head.next = null
    return head
  }
  let [slow, fast] = [head, head]
  while (fast !== tail) { // 尾判空 
    slow = slow.next
    fast = fast.next
    if (fast !== tail) {
      fast = fast.next
    }
  }
  const mid = slow
  return merge(toSortList(head, mid), toSortList(mid, tail))
}

var sortList = function (head) {
  return toSortList(head, null)
};

console.log(sortList([4, 2, 1, 3].reduceRight((pre, cur) => {
  const node = new ListNode(cur)
  node.next = pre
  return node
}, null)))