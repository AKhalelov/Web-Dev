import math

n = int(input())

def isPerfectSquare(number):
    if(math.ceil(math.sqrt(number)) == math.floor(math.sqrt(number))):
        return True
    return False

i = 1

while(i <= n):
    if(isPerfectSquare(i)):
        print(i)
    i += 1
