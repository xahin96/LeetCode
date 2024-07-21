class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        print(intervals)
        fin = [intervals[0]]

        for s, e in intervals[1:]:
            if s <= fin[-1][1]:
                fin[-1][1] = max(fin[-1][1], e)
            else:
                fin.append([s, e])
        return fin