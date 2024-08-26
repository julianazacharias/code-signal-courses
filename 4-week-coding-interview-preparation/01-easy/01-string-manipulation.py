#Write a function that takes a string s, iterates through it, 
# and collects all 0-based positions of vowels in it to a list.

# Note that you should not use any Python built-in string methods to solve this task.

# So, for print(solution("CodeSignal")), the output would be [1, 3, 6, 8].

# 'o' is at position 1
# 'e' is at position 3
# 'i' is at position 6
# 'a' is at position 8

def solution(s):
    result = []
    vowels = ['a', 'e', 'i', 'o', 'u']
    
    
    for i in range(len(s)):
        l = s[i]
        l = l.lower()
        if l in vowels:
            result.append(i)
    return result

s = "Hello WORLD"
print(solution(s))

