def array_front9(nums):
    iter = 0
    for i in range(len(nums)):
        if iter >= 4:
            return False
        if nums[i] == 9:
            return True
        iter += 1
    return False