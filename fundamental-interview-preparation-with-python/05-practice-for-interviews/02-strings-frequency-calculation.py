# For the input string "banana", the output should be [294, 222, 99].

# The string "banana" will be shifted to "cbobob".

# The ASCII value for 'c' is 99, it appears once in the string so its product is 99x1 = 99.
# The ASCII value for 'b' is 98, it appears three times in the string so its product is 98x3 = 294.
# The ASCII value for 'o' is 111, it appears twice in the string so its product is 111x2 = 222.

# Collecting these products into a list gives [99, 294, 222]. Sorting this list in descending order results in [294, 222, 99].

def character_frequency_encoding(word):
    next_string = ''

    for letter in word:
        next_string += 'a' if letter == 'z' else chr(ord(letter) + 1)
    frequency_dict = {}

    for letter in next_string:
        if letter in frequency_dict:
            frequency_dict[letter] += 1
        else:
            frequency_dict[letter] = 1
    combined_values = []

    for letter, freq in frequency_dict.items():
        combined_values.append(ord(letter) * freq)
    combined_values.sort(reverse=True)
    return combined_values

word = 'banana'
print(character_frequency_encoding(word))

[294, 222, 99]


# ***************************************************************************************

def solution(numbers):
    result = []
    frequency_dict = {}
    for n in numbers:
        if n % 10 != 0:
            result.append(n + 1)
        else:
            result.append(1)
    
    for n in result:
        if n in frequency_dict:
            frequency_dict[n] += 1
        else:
            frequency_dict[n] = 1
    
    combination = []
    
    for n, freq in frequency_dict.items():
        combination.append(n * freq)
        
    combination.sort()
    
    return combination

numbers = [5, 10, 15, 10, 5, 15]
print(solution(numbers))


# ***************************************************************************************

def solution(s):
  
    freq_dict = {}
       
    for c in s:
        if c in freq_dict:
            freq_dict[c] += 1
        else:
            freq_dict[c] = 1
       
    new_dict = {}
     
    for k, v in freq_dict.items():       
        key = chr((ord(k) - ord('a') - 3) % 26 + ord('a'))
        new_dict[k] = ord(key) * v

  
    return dict(sorted(new_dict.items()))     


s = "def"
solution(s)
print(solution(s))


# ***************************************************************************************

def solution(sentence):
    
    encoded = ''
    freq = {}
    
    for c in sentence:
        if c.islower():
            new_char = chr((ord(c) - ord('a') -1) % 26 + ord('a'))
            encoded += new_char
        elif c.isupper():
            new_char = chr((ord(c) - ord('A') -1) % 26 + ord('A'))
            encoded += new_char
        elif c.isdigit():
            encoded += '9' if c == '0' else chr(ord(c) - 1)
        else:
            encoded += c
    
    for d in encoded:
        if d.isalnum():
            if d in freq:
                freq[d] += 1
            else:
                freq[d] = 1
                
    result = []
    
    for k, v in freq.items():
        elemento = abs(ord(k) - v)
        result.append(elemento)
        
    resp = sorted(result)
        
    return resp
            
 
sentence = "Hello, 123!"
print(solution(sentence))
