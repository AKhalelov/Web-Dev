def centered_average(nums):
    mn = mx = nums[0]
    total = 0
    for i in nums:
        if(i > mx):
            mx = i
        if(i < mn):
            mn = i
        total += i

    return (total - mn - mx) // (len(nums) - 2)
        