from typing import List


class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        fl: List[int] = []
        for i, word in enumerate(words):
            if x in word:
                fl.append(i)
        return fl



# /**
#  * @param {string[]} words
#  * @param {character} x
#  * @return {number[]}
#  */
# var findWordsContaining = function(words, x) {
#     let fl = [];
#     for(let i = 0 ; i < words.length ; i++){
#         if(words[i].includes(x)){
#             fl.push(i);
#         }
#     }
#     return fl;
# };