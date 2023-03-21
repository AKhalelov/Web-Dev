n = int(input())

arr = list(map(int, input().split()))

counter = 0

for i in range(len(arr)):
    if(i == 0):
        continue
    if(arr[i] > arr[i - 1]):
        counter += 1

print(counter)