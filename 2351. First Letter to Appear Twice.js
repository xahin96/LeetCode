/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    // let left = 0;
    let right = 0;
    const charSet = new Set();
    for (; right < s.length; right++){
        if(charSet.has(s[right])){
            return s[right];
        } else {
            charSet.add(s[right])
        }
    }
};