# nums = [4, 5, 6, 7, 0, 1, 2]
# nums = [3, 4, 5, 1, 2]
nums = [4,5,6,7,0,1,2]
# nums = [11,13,15,17]
# nums = [1]
# nums = [2, 1]

def binary_search(arr, item):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = arr[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return -1

l, r = 0, len(nums) - 1
res = nums[0]
smallest_num_index = 0
target = 0

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

first_half = nums[:smallest_num_index]
second_half = nums[smallest_num_index:]
print(first_half, second_half)
if first_half and not second_half:
    print(binary_search(first_half, target))
elif second_half and not first_half:
    print(binary_search(second_half, target))
elif first_half and second_half:
    print("here")
    if first_half[0] <= target <= first_half[-1]:
        print("1st")
        print(binary_search(first_half, target))
    else:
        print("2nd")
        print(binary_search(second_half, target))
