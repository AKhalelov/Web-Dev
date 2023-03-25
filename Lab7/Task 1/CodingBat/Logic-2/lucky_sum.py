def lucky_sum(a, b, c):
    sum = 0
    if a != 13:
        sum += a
        if b != 13:
            sum += b
            if c != 13:
                return sum + c
            return sum
        else:
            return sum
    else:
        return 0
