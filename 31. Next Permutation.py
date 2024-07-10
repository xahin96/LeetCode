class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        cutoff = -1
        for i in reversed(range(len(nums))):
            if nums[i] > nums[i - 1]:
                cutoff = i - 1
                break
        if cutoff == -1:
            print('largest')
            nums.reverse()
            return nums

        i_great = -1
        for i in reversed(range(len(nums))):
            if nums[i] > nums[cutoff]:
                nums[cutoff], nums[i] = nums[i], nums[cutoff]
                break
        print(nums[:cutoff + 1], nums[cutoff + 1:][::-1])
        nums[cutoff + 1:] = reversed(nums[cutoff + 1:])
