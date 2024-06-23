public class Solution {
    public int FindPermutationDifference(string s, string t) {
        var dic = new Dictionary<char, int>();

        for(int i = 0 ; i < s.Length ; i++)
        {
            dic.Add(s[i], i);
        }
        int diff = 0;
        for(int j = 0 ; j < t.Length ; j++)
        {
            diff += Math.Abs(dic[t[j]] - j);
        }
        return diff;
    }
}