/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     debugger;
//     let left = 0;
//     let right = 1;
//     for (; right < nums.length ; right++){
//         if (nums[left] + nums[right] === target){
//             return [left, right];
//         } else if (right === nums.length - 1){
//             left++;
//             right = left;
//         }
//     }
// };
// console.log(twoSum([3,2,4], 6));


const twoSum2 = (nums, target) =>  {
    debugger;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            console.log(map);
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return -1;
};
console.log(twoSum2([3,2,4,5,1,7,8], 15));
