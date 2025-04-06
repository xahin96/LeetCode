public class Solution {
    public int MaxSubArray(int[] nums) {
        int maxSoFar = nums[0];
        int currentMax = nums[0];

        for (int i = 1; i < nums.Length; i++) {
            // Either start a new subarray at current index, or extend the current subarray
            currentMax = Math.Max(nums[i], currentMax + nums[i]);
            maxSoFar = Math.Max(maxSoFar, currentMax);
        }

        return maxSoFar;
    }
}
