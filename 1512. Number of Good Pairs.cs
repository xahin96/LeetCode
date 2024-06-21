//1

public class Solution {
    public int NumIdenticalPairs(int[] nums) {
        if(nums.Length == 1)
        {
            return 0;
        }
        if(nums.Length == 2)
        {
            if(nums[0] == nums[1])
            {
                return 1;
            }
            return 0;
        }
        var count = new List<int []>();
        for(int i = 0 ; i < nums.Length - 1 ; i++)
        {
            for(int j = i + 1 ; j < nums.Length ; j++)
            {
                count.Add([nums[i], nums[j]]);
            }
        }
        int c = 0;
        foreach(var i in count)
        {
            if(i[0] == i[1])
            {
                c++;
            }
        }
        return c;
    }
}

//2

public class Solution {
    public int NumIdenticalPairs(int[] nums) {
        var count = new Dictionary<int, int>();
        foreach(int num in nums)
        {
            if(count.ContainsKey(num))
            {
                count[num]++;
            }
            else
            {
                count[num] = 1;
            }
        }
        int c = 0;
        foreach(var i in count)
        {
            c = c + (i.Value * (i.Value - 1))/2;
        }
        return c;
    }
}