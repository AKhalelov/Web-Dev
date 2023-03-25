def front_times(str, n):
    s = ''
    if(len(str) <= 3):
        s = str
    else:
        s = str[:3]
    return (s * n)