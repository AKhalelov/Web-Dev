def sum67(nums):
    sum = 0
    ok = True
    for i in nums:
        if i == 6:
            ok = False
        if i == 7 and ok == False:
            ok = True
            continue
        if(ok):
            sum += i
    return sum