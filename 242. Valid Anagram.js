/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false;
    }

    const sMap = new Map();

    for (let char of s){
        sMap.set(char, (sMap.get(char) || 0) + 1);
    }
    console.log(sMap);
    for (let char of t){
        if (sMap.has(char)){
            let count = sMap.get(char);
            sMap.set(char, count - 1)
            if (sMap.get(char)===0){
                sMap.delete(char);
            }
        } else{
            return false;
        }
    }
    return sMap.size === 0;
};
