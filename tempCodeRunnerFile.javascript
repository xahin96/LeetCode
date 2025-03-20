var maxSubArray = function (nums) {
    let currentMax = nums[0];
    let finMax = nums[0];

    if (nums.length === 1) return nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > finMax) {
            currenMax = finMax = nums[i];
        }
        else if (currentMax + nums[i] > finMax) {
            finMax = currentMax + nums[i];
        }
        currentMax = currentMax + nums[i];
    }
    return finMax;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))