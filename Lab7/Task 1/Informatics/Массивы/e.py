import sys

n = int(input())

arr = list(map(int, input().split()))

for i in range(1, len(arr)):
    if((arr[i - 1] > 0 and arr[i] > 0) or (arr[i - 1] < 0 and arr[i] < 0)):
        print('YES')
        sys.exit(0)
print('NO')