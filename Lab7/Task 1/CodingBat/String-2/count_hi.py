def count_hi(str):
    counter = 0
    for i in range(len(str) - 1):
        if str[i] + str[i + 1] == 'hi':
            counter += 1
    return counter