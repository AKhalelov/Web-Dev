'''
Word Order
Output  lines.
On the first line, output the number of distinct words from the input.
On the second line, output the number of occurrences for each distinct word according to their appearance in the input.
'''

n = int(input())

counter = {}
words = []

for i in range(n):
  word = input()
  if word in counter:
    counter[word] += 1
  else:
    counter[word] = 1
    words.append(word)
    
print(len(words))
print(' '.join([str(counter[word]) for word in words]))