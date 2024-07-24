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

public class Solution
{
    public int MajorityElement(int[] nums)
    {
        int counter = 0;
        int major = nums[0];
        foreach(int n in nums)
        {
            if(counter == 0)
            {
                counter++;
                major = n;
            }
            else if (counter > 0 && major == n)
            {
                counter++;
            }
            else if (counter > 0 && major != n)
            {
                counter--;
            }
        }
        return major;
    }
}