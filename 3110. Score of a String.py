class Solution:
    def scoreOfString(self, s: str) -> int:
        total: int = 0
        for i in range(len(s) - 1):
            print(s[i], s[i + 1])
            total += abs(ord(s[i]) - ord(s[i + 1]))
        return total


#
# /**
#  * @param {string} s
#  * @return {number}
#  */
# var scoreOfString = function(s) {
#     let total = 0;
#     for(let i = 0 ; i < s.length - 1 ; i++){
#         total += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
#     }
#     return total;
# };