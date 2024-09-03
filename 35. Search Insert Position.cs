public class Solution {
    public int SearchInsert(int[] nums, int target) {
        int l = 0;
        int r = nums.Length - 1;
        int mid = 0;
        while(l <= r)
        {
            mid = (l + r) / 2;
            Console.WriteLine(mid);
            if(nums[mid] == target)
            {
                return mid;
            }
            else if(nums[mid] > target)
            {
                r = mid - 1;
            }
            else if(nums[mid] < target)
            {
                l = mid + 1;
            }
        }
        return l;
    }
}