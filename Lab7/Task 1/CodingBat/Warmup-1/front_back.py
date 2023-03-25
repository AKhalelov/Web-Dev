def front_back(str):
    if(len(str)) <= 1:
       return str
    fc = str[0]
    lc = str[len(str) - 1]
    return lc + str[1:len(str) - 1] + fc
