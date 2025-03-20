public class Solution 
{
    public string LongestPalindrome(string s) 
    {
        string res = "";
        int resLen = 0;

        for (int i = 0; i < s.Length; i++)
        {
            int l = i;
            int r = i;
            while (l >= 0 && r < s.Length && s[l] == s[r])
            {
                if (r - l + 1 > resLen)
                {
                    resLen = r - l + 1;
                    res = s.Substring(l, r - l + 1);
                }
                l--;
                r++;
            }
            
            l = i;
            r = i+1;
            while (l >= 0 && r < s.Length && s[l] == s[r])
            {
                if (r - l + 1 > resLen)
                {
                    resLen = r - l + 1;
                    res = s.Substring(l, r - l + 1);
                }
                l--;
                r++;
            }
        }
        return res;
    }
}