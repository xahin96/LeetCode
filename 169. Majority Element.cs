public class Solution
{
    public int MajorityElement(int[] nums)
    {
        Dictionary<int, int> od = new Dictionary<int, int>();
        int numsLength = nums.Length;
        for(int i = 0; i < numsLength; i++)
        {
            if(od.ContainsKey(nums[i]))
            {
                od[nums[i]]++;
            }
            else
            {
                od[nums[i]] = 1;
            }
        }
        int me = numsLength / 2;
        foreach(var e in od)
        {
            if(e.Value > me)
            {
                return e.Key;
            }
        }
        return 0;
    }
}