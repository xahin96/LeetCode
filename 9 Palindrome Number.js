/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    debugger;
    if (x < 0) {
        return false;
    }
    const str = x.toString();
    let left = 0;
    let right = str.length - 1;
    for (; left < str.length; left++) {
        if (str[left] === str[right] && left < right) {
            right--;
        } else if (left === right && str[left] === str[right]) {
            return true;
        } else if (str[left] !== str[right]) {
            return false;
        } else if (left > right) {
            break;
        }
    }
    return true;
};

console.log(isPalindrome(11))