/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    debugger
    if (s.length !== t.length) {
        return false;
    }

    const sToTMapping = {};
    const tToSMapping = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (sToTMapping[charS] === undefined) {
            sToTMapping[charS] = charT;
        } else if (sToTMapping[charS] !== charT) {
            return false;
        }

        if (tToSMapping[charT] === undefined) {
            tToSMapping[charT] = charS;
        } else if (tToSMapping[charT] !== charS) {
            return false;
        }
    }

    return true;
};

// Test cases
// console.log(isIsomorphic("egg", "add"));      // Output: true
// console.log(isIsomorphic("foo", "bar"));      // Output: false
console.log(isIsomorphic("paper", "title"));  // Output: true
