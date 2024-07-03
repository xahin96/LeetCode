class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        x: int = 0
        for op in operations:
            if op == '++X' or op == 'X++':
                x = x + 1
            else:
                x = x - 1
        return x
