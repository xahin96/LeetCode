public class Solution {
    public int MaxProfit(int[] prices) {
        if (prices.Length == 1)
        {
            return 0;
        }
        int maxProfit = 0;
        int l = 0;
        int r = 1;
        for (int i = 0; i < prices.Length - 1; i++)
        {
            if (prices[r] - prices[l] > maxProfit)
            {
                maxProfit = prices[r] - prices[l];
                r++;
            }
            else if (prices[r] < prices[l])
            {
                l=r;
                r++;
            }
            else
            {
                r++;
            }
        }
        return maxProfit;
    }
}

public class Solution {
    public int MaxProfit(int[] prices) {
        int maxProfit = 0;
        int l = 0;
        int r = 1;
        while (r < prices.Length)
        {
            int currDiff = prices[r] - prices[l];
            if (currDiff > maxProfit)
            {
                maxProfit = currDiff;
            }
            else if (prices[r] < prices[l])
            {
                l=r;
            }
            r++;
        }
        return maxProfit;
    }
}