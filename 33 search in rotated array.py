# nums = [4, 5, 6, 7, 0, 1, 2]
# nums = [3, 4, 5, 1, 2]
# nums = [11,13,15,17]
# nums = [1]
# nums = [2, 1]

nums = [6, 7, 0, 1, 2, 3, 4, 5]

target = 2
l, r = 0, len(nums) - 1
while l <= r:
    mid = (l + r) // 2
    if target == nums[mid]:
        print(mid)

    # left portion
    if nums[l] <= nums[mid]:
        if target > nums[mid] and target < nums[l]:
            l = mid + 1
        else:
            r = mid - 1

    # right portion
    else:
        if target > nums[r] and target < nums[mid]:
            r = mid - 1
        else:
            l = mid + 1
print(-1)
