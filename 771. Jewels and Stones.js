/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let stn = new Map();
    for(let i = 0 ; i < stones.length ; i++){
        if(stn.has(stones[i])){
            stn.set(stones[i], stn.get(stones[i]) + 1);
        } else {
            stn.set(stones[i], 1);
        }
    }
    console.log(stn);
    let total = 0;
    for(let j = 0 ; j < jewels.length ; j++){
        if(stn.has(jewels[j])){
            total = total + stn.get(jewels[j]);
        }
    }
    return total;
};