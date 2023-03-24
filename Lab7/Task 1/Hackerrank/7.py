'''
Compress the String!
Input: 1222311
Output: (1, 1) (3, 2) (1, 3) (2, 1)
'''

from itertools import groupby

for key, group in groupby(input()):
   print('({}, {})'.format(len(list(group)), key), end=" ")