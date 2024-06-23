public class Solution {
    public int NumJewelsInStones(string jewels, string stones) {
        var stn = new Dictionary<char, int>();
        for(int i = 0 ; i < stones.Length ; i++)
        {
            if(stn.ContainsKey(stones[i]))
            {
                stn[stones[i]] = stn[stones[i]] + 1;
            }
            else
            {
                stn[stones[i]] = 1;
            }
        }
        int total = 0;
        foreach(char c in jewels)
        {
            if(stn.ContainsKey(c))
            {
                total = total + stn[c];
            }
        }
        return total;
    }
}