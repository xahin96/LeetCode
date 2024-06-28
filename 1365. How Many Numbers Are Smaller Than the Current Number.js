const smallerNumbersThanCurrent = function (nums) {
    let arr = new Array(101).fill(0);
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]]++;
    }
    for (let j = 1; j < 101; j++) {
        arr[j] += arr[j - 1];
    }
    let res = new Array(nums.length);
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] === 0) {
            res[k] = 0;
        } else {
            res[k] = arr[nums[k] - 1];
        }
    }
    return res;
};