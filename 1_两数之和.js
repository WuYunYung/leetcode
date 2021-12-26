/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const cache = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (cache[diff] !== undefined) {
      return [cache[diff], i]
    } else {
      cache[nums[i]] = i
    }
  }
};

twoSum(
  [2, 7, 11, 15],
  9
)