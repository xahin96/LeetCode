/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const ns = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const length = ns.length;
    let firstHalf, secondHalf;
    if (length % 2 === 0) {
        firstHalf = ns.slice(0, length / 2);
        secondHalf = ns.slice(length / 2);
    } else {
        const middleIndex = Math.floor(length / 2);
        firstHalf = ns.slice(0, middleIndex);
        secondHalf = ns.slice(middleIndex + 1);
    }
    console.log(firstHalf.toLowerCase(), secondHalf.split('').reverse().join('').toLowerCase())
    return firstHalf.toLowerCase() === secondHalf.split('').reverse().join('').toLowerCase();
};