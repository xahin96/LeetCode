class Solution:
    def balancedStringSplit(self, s: str) -> int:
        rc = 0
        lc = 0
        count = 0
        for c in s:
            if c == 'R':
                rc += 1
            elif c == 'L':
                lc += 1
            if rc == lc:
                count += 1
        return count
