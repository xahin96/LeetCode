class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        w1l = len(word1)
        w2l = len(word2)
        l, r = 0, 0
        merged = ''
        while l < w1l and r < w2l:
            merged += word1[l] + word2[r]
            l += 1
            r += 1
        if w1l > w2l:
            merged += word1[l:]
        elif w1l < w2l:
            merged += word2[r:]
        return merged
