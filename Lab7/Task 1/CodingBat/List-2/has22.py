def has22(nums):
    nums = [str(i) for i in nums]
    s = ''.join(nums)
    if '22' in s:
        return True
    return False