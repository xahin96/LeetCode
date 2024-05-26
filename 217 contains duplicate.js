/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = new Set();
    for (let num of nums){
        if (numsSet.has(num)){
            return true;
        } else {
            numsSet.add(num);
        }
    }
    return false;
};