def array123(nums):
    nums = [str(i) for i in nums]
    s = ''.join(nums)
    if '123' in s:
        return True
    return False