def front3(str):
    s = ''
    if(len(str) <= 3):
        s = str
    else:
        s = str[:3]
    return (s * 3)