/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const charCount = new Map();
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Step 2: Calculate the length of the longest palindrome
    let length = 0;
    let oddCountFound = false;

    for (let count of charCount.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            oddCountFound = true;
        }
    }

    // Add one to the length if there's any character with an odd count
    if (oddCountFound) {
        length += 1;
    }

    return length;
};