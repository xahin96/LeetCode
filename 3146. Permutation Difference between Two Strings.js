
var findPermutationDifference = function(s, t) {
    let hMap = new Map();
    for(let i = 0 ; i < s.length ; i++){
        hMap.set(s[i], i);
    }
    let diff = 0;
    for(let i = 0 ; i < t.length ; i++){
        diff = diff + Math.abs(hMap.get(t[i]) - i)
    }
    return diff;
};