from typing import List


class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        fz = set()
        zl = set()
        for i, li in enumerate(matrix):
            for j, d in enumerate(li):
                if d == 0:
                    zl.add(j)
                    fz.add(i)

        for i in fz:
            for j in range(len(matrix[i])):
                matrix[i][j] = 0

        for li in matrix:
            for i in zl:
                li[i] = 0
