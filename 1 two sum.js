/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    debugger;
    let left = 0;
    let right = 1;
    for (; right < nums.length ; right++){
        if (nums[left] + nums[right] === target){
            return [left, right];
        } else if (right === nums.length - 1){
            left++;
            right = left;
        }
    }
};
console.log(twoSum([3,2,4], 6));