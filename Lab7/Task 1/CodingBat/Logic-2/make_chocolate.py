def make_chocolate(small, big, goal):
    max_big_bars = goal // 5

    if max_big_bars <= big:
        remaining_weight = goal - max_big_bars * 5
    else:
        remaining_weight = goal - big * 5

    if remaining_weight <= small:
        return remaining_weight

    return -1