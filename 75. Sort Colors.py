from typing import List


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        dn = {}
        fl = []
        for num in nums:
            if num in dn:
                dn[num] += 1
            else:
                dn[num] = 1
        if 0 in dn:
            fl.extend([0] * dn[0])
        if 1 in dn:
            fl.extend([1] * dn[1])
        if 2 in dn:
            fl.extend([2] * dn[2])
        for i in range(len(fl)):
            nums[i] = fl[i]


class Solution2:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        l = 0
        m = 0
        h = len(nums) - 1
        while m <= h:
            if nums[m] == 0:
                nums[l], nums[m] = nums[m], nums[l]
                m += 1
                l += 1
            elif nums[m] == 1:
                m += 1
            elif nums[m] == 2:
                nums[h], nums[m] = nums[m], nums[h]
                h -= 1