n = int(input())

arr = list(map(int, input().split()))

counter = 0 
for i in arr:
    if i > 0:
        counter += 1

print(counter)