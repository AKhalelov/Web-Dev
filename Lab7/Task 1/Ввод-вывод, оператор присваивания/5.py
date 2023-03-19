a = int(input()) # velocity
b = int(input()) # time

if a >= 0:
    print((a * b) % 109)
else:
    print((109 - abs(a * b) % 109) % 109)