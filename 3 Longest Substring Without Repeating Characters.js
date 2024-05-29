/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let left = 0;
    let right = 0;
    const charMap = new Map();
    let maxLen = 0;

    for (; right < s.length; right++) {
        if (charMap.has(s[right])) {
            left = Math.max(charMap.get(s[right]) + 1, left);
        }
        charMap.set(s[right], right);
        maxLen = Math.max(maxLen, (right - left) + 1);
    }
    return maxLen;
};

console.log(lengthOfLongestSubstring("abcdabcab")); // Output: 3
