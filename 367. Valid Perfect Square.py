class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        l = 1
        r = num

        while l <= r:
            mid = (l + r) // 2
            sqr = mid * mid
            if sqr == num:
                return True
            elif sqr > num:
                r = mid - 1
            elif sqr < num:
                l = mid + 1
        return False
