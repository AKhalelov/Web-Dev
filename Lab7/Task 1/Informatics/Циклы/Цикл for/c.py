import math

a = int(input())
b = int(input())

def isPerfectSquare(number):
    if(math.ceil(math.sqrt(number)) == math.floor(math.sqrt(number))):
       print(number, end=' ')

for i in range(a, b + 1):
    isPerfectSquare(i)