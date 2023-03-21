num = input()

res = 0
powerOfTwo = 1

for i in range(1, len(num) + 1): 
    res += int(num[len(num) - i]) * powerOfTwo
    powerOfTwo = powerOfTwo * 2

print(res)

