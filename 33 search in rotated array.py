# nums = [4, 5, 6, 7, 0, 1, 2]
# nums = [3, 4, 5, 1, 2]
# nums = [4,5,6,7,0,1,2]
# nums = [11,13,15,17]
nums = [1]
# nums = [2, 1]

l, r = 0, len(nums) - 1
res = nums[0]
smallest_num_index = 0

while l <= r:
    if nums[r] >= nums[l]:
        res = min(res, nums[l])
        smallest_num_index = l
        break

    mid = (l + r) // 2
    res = min(res, nums[mid])
    if nums[mid] >= nums[l]:
        l = mid + 1
        res = min(res, nums[l])
    else:
        r = mid - 1

# print(l, r, smallest_num_index)
# print(res)

first_half = nums[:smallest_num_index]
second_half = nums[smallest_num_index:]
print(first_half, second_half)
if first_half and not second_half:

elif second_half and not first_half:
elif first_half and second_half: