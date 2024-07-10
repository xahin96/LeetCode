class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        l = [[1]]
        for i in range(numRows - 1):
            temp = [0] + l[-1] + [0]
            l2 = []
            for j in range(len(temp) - 1):
                l2.append(temp[j] + temp[j + 1])
            l.append(l2)
        return l