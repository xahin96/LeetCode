from typing import List


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for l in matrix:
            if target <= l[-1]:
                return target in l


class Solution2:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        t = 0
        b = len(matrix) - 1
        tl = []
        while t <= b:
            m = t + (b - t) // 2
            if matrix[m][0] <= target <= matrix[m][-1]:
                tl = matrix[m]
                break
            elif matrix[m][0] > target:
                b = m - 1
            elif matrix[m][-1] < target:
                t = m + 1

        l = 0
        r = len(tl) - 1
        while l <= r:
            m = l + (r - l) // 2
            if tl[m] < target:
                l = m + 1
            elif tl[m] > target:
                r = m - 1
            elif tl[m] == target:
                return True
        return False
