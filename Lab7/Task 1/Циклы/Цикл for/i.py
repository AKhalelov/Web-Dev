import math

num = int(input())
divisors = 1

for i in range(2, int(math.sqrt(num)) + 1):
    count = 0
    while(num % i == 0):
        count += 1
        num //= i
    if count > 0:
        divisors *= (count + 1)

if num > 1:
    divisors *= 2

print(divisors)
