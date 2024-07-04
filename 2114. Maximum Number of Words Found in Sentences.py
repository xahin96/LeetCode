class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        maxed: int = 0
        for sentence in sentences:
            leng: int = len(sentence.split())
            if leng > maxed:
                maxed = leng
                print(maxed)

        return maxed
