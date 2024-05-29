/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let numSet = new Set();
    for(let i = 0 ; i <= nums.length ; i ++){
        numSet.add(i);
    }
    console.log(numSet);
    for(let num of nums){
        numSet.delete(num);
    }
    const firstValue = [...numSet][0];
    return firstValue;
};