s = 'geeksforgeeks'

d = {}

for c in s:
    if c in d:
        print(c)
        break
    else:
        d[c] = 1
