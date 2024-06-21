// 1
var numIdenticalPairs = function(nums) {
    if(nums.length === 1){
        return 0;
    }
    if(nums.length === 2){
        if(nums[0] === nums[1]){
            return 1;
        }
        return 0;
    }
    let hSet = new Set();
    for(let i = 0 ; i < nums.length - 1 ; i++){
        for(let j = i + 1 ; j < nums.length ; j++){
            hSet.add([nums[i],nums[j]]);
        }
    }
    let count = 0;
    for(let pair of hSet){
        console.log(pair);
        if(pair[0] === pair[1]){
            count++;
        }
    }
    return count
};


// 2

var numIdenticalPairs2 = function(nums) {
    let hMap = new Map();
    for(let num of nums){
        if(hMap.has(num)){
            hMap.set(num, hMap.get(num) + 1);
        } else {
            hMap.set(num, 1);
        }
    }
    let count = 0;
    for(let d of hMap){
        count = count + (d[1] * (d[1] - 1))/2;
        console.log(d[1]);
    }
    console.log(count);
    return count
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));