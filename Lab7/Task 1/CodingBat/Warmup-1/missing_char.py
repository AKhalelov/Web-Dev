def missing_char(str, n):
    return str[:n] + str[n + 1:]

str, n = input().split()
n = int(n)
print(missing_char(str, n))