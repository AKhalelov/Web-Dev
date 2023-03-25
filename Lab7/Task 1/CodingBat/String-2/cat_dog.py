def cat_dog(str):
    count_cats = 0
    count_dogs = 0
    for i in range(len(str) - 2):
        s = str[i] + str[i + 1] + str[i + 2]
        if(s == 'dog'):
            count_dogs += 1
        elif(s == 'cat'):
            count_cats += 1
    if(count_cats == count_dogs):
        return True
    return False