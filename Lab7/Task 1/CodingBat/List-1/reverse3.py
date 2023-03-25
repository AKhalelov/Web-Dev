def reverse3(nums):
    rnums = []
    for i in range(len(nums)):
        rnums.append(nums[len(nums) - i - 1])
    return rnums