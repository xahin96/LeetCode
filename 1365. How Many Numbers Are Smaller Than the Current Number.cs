public class Solution {
    public int[] SmallerNumbersThanCurrent(int[] nums) {
        var counter = new int[nums.Length];
        for(int i = 0 ; i < nums.Length ; i++)
        {
            int count = 0;
            for(int j = 0 ; j < nums.Length ; j++)
            {
                if(nums[i] > nums[j])
                {
                    count++;
                }
            }
            counter[i] = count;
        }
        return counter;
    }
}

//hash table

public class Solution {
    public int[] SmallerNumbersThanCurrent(int[] nums) {
        var counter = new int[101];
        for(int i = 0 ; i < nums.Length ; i++)
        {
            counter[nums[i]]++;
        }
        for(int j = 1 ; j < 101 ; j++)
        {
            counter[j] += counter[j-1];
        }
        int[] result = new int[nums.Length];
        for(int k = 0 ; k < nums.Length ; k++)
        {
            if(nums[k] == 0)
            {
                result[k] = 0;
            }
            else
            {
                result[k] = counter[nums[k] - 1];
            }
        }
        return result;
    }
}