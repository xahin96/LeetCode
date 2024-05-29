/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const strMap = new Map();
    const sArr = s.split(" ");

    if (pattern.length !== sArr.length) {
        return false;
    }
    for (let i = 0; i < pattern.length; i++) {
        const currentPatternChar = pattern[i];
        const currentWord = sArr[i];

        if (!strMap.has(currentPatternChar)) {
            if (Array.from(strMap.values()).includes(currentWord)) {
                return false;
            }
            strMap.set(currentPatternChar, currentWord);
        } else {
            if (strMap.get(currentPatternChar) !== currentWord) {
                return false;
            }
        }
    }
    return true;
};