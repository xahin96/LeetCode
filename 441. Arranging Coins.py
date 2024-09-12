###### O(n)
class Solution:
    def arrangeCoins(self, n: int) -> int:
        rows = 0
        current = 1

        # Keep subtracting coins for each row until you can't complete the next row
        while n >= current:
            n -= current
            rows += 1
            current += 1

        return rows


###### log n
class Solution:
    def arrangeCoins(self, n: int) -> int:
        l = 1
        r = n
        res = 0

        while l <= r:
            mid = (l + r) // 2
            coins = (mid / 2) * (mid + 1)
            if coins > n:
                r = mid - 1
            else:
                l = mid + 1
                res = max(mid, res)

        return res
