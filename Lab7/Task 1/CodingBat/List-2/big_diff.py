def big_diff(nums):
    mn = mx = nums[0]
    for i in range(len(nums)):
        if(nums[i] > mx):
            mx = nums[i]
        if(nums[i] < mn):
            mn = nums[i]
    return mx - mn