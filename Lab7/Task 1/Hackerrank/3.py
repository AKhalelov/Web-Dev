'''
Merge the Tools!
Example


There are three substrings of length  to consider: 'AAA', 'BCA' and 'DDE'. 
The first substring is all 'A' characters, so . 
The second substring has all distinct characters, so . 
The third substring has  different characters, so . 
Note that a subsequence maintains the original order of characters encountered. 
The order of characters in each subsequence shown is important.
'''

def merge_the_tools(string, k):
    index = 0
    for j in range(int(len(string) / k)):
        cnt = 0
        totalStr = ''
        for i in range(int(len(string) / k)):
            character = string[index + i]
            if(character not in totalStr):
                totalStr += character
            cnt += 1
        print(totalStr)
        index += cnt
        
if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)