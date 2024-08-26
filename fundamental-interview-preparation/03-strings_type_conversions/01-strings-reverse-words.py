def solution(input_str):
    # split the string into words
    words = input_str.split()
    
    # reverse each word 
    reversed_words = [''.join(reversed(word)) for word in words]
    
    # join the words back together with space as a separator
    result = ' '.join(reversed_words)
    
    return result

# Now we call the function and print the returned result outside of the function
print(solution("Hello neat pythonistas_123"))  # this will print: 'olleH taen 321_satsinohtyp'


# ********************************************************************************************************

def solution(s):

    words = s.split()

    special_order = []

    for word in words:
        new_word = word[-1] + word[:-1]
        special_order.append(new_word)        
        
        result = ' '.join(special_order)

    return result

print(solution("abc 123 def"))  

# ********************************************************************************************************

def solution(input_str):
    words = input_str.split()
    replaced_words = []
    
    for word in words:
        replaced_word = ''
        for character in word:
            if 'a' <= character <= 'z':
                replaced_word += chr(ord('z') + ord('a') - ord(character))
            elif 'A' <= character <= 'Z':
                replaced_word += chr(ord('Z') + ord('A') - ord(character))
            else:
                replaced_word += character
        replaced_words.append(replaced_word)
    
    # Joining the transformed words, with the last word first
    result = ' '.join([replaced_words[-1]] + replaced_words[:-1]) # ULTIMA PALAVRA + TODAS AS PALAVRAS ANTES DA ULTIMA
    
    return result


input_str = "CapitaL letters" # "ovggvih XzkrgzO"
print(solution(input_str))

# ********************************************************************************************************

def solution(input_str):
    
    array = input_str.split()
    array_result = []

    for word in array:
        new_word = word[0].upper() + word[1:].lower()        
        array_result.append(new_word)
        
    result = ' '.join(array_result)

    return result
   
    
input_str = "SoME rAndoM _TeXT" # "Some Random _text"

print(solution(input_str))

# ********************************************************************************************************