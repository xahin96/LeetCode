class Solution:
    def romanToInt(self, s: str) -> int:
        dic = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        slen = len(s)
        total = 0
        for i in range(slen):
            if i >= 0 and i + 1 < slen and dic[s[i]] < dic[s[i+1]]:
                total -= dic[s[i]]
            else:
                total += dic[s[i]]
        return total