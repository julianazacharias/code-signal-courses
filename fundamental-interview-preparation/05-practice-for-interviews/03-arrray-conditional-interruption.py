# Our mission for today is to generate a unique encoded message for a book club. 
# Here's the fun part: to create a cryptic message, we will process a string and 
# an array of numbers simultaneously and stop once a given condition is satisfied.

# For the string, our task is to replace each letter with the next alphabetical 
# letter and then reverse the entire updated string. For the array of numbers, 
# our task is to divide each number by 2, round the result, and accumulate 
# the rounded numbers until their total exceeds 20.

# When the accumulated total exceeds 20, we immediately stop the process and 
# return the updated string and the as yet unprocessed numbers in their original order.

def solution(inputString, numbers):
    result = ''
    sum_so_far = 0
    i = 0
    while i < len(inputString) and sum_so_far <= 20:
        result += 'a' if inputString[i] == 'z' else chr(ord(inputString[i]) + 1)
        half_number = round(numbers[i] / 2)
        sum_so_far += half_number
        i += 1
    return result[::-1], numbers[i:]


#*************************************************************************************

def solution(strings, numbers):
    soma = 0
    new_string = ''
    i = 0
    vowels = ['a', 'e', 'i', 'o', 'u']
    
    while soma <= 100 and i < len(strings):
        
        if strings[i] in vowels:
            break
        else:    
            new_string += chr(ord(strings[i]) - 1)
            
        new_number = abs(numbers[i]) * 2    # Add the absolute value multiplied by 2
        soma += new_number
        
        i += 1
        
    return new_string, numbers[i:] # Slice the original array from current index
        

strings = "songlyrics"

numbers = [10, -20, 30, -40, 50, -60, 70, -80, 90, -100]

print(solution(strings, numbers))

#*************************************************************************************

def solution(inputString, numbers):
    vowels = 'aeiou'
    consonants = 'bcdfghjklmnpqrstvwxyz'
    sum_number = 0
    i = 0
    nova_string = ''
    
    while sum_number < 100 and i < len(inputString) and i < len(numbers):
        
        if inputString[i] in vowels:
            index = vowels.index(inputString[i]) # TEM QUE PEGAR O INDEX QUE É DIFERENTE DO i
            nova_string += vowels[(index + 1) % len(vowels)]  # Wrap around
        elif inputString[i] in consonants:
            index = consonants.index(inputString[i]) # TEM QUE PEGAR O INDEX QUE É DIFERENTE DO i
            nova_string += consonants[(index + 1) % len(consonants)]  # Wrap around

            # IMPORTANTE  % len(consonants): The modulo operator ensures that if the index is at the end of the string,
            #  it wraps around to the beginning. For example, if the current consonant is z, the next consonant should be b.
            # GARANTE QUE VAI FICAR DANDO VOLTINHAS EM CARROSSEL
            
        sum_number += numbers[i] * 3
        i += 1
        
    return nova_string, numbers[i:]
    
    
    
inputString = "aerobics"
numbers = [10, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

print(solution(inputString, numbers))


#*************************************************************************************

def solution(arr, text):
    message = ''
    soma = 0
    i = 0
    
    while i < len(text) and i < len(arr):
        
        valor_atual = abs(arr[i] - 3)
        
        if soma + valor_atual > 30:
            break
            
        soma += valor_atual
        
        if text[i].islower():
            message += 'a' if text[i] == 'z' else chr(ord(text[i]) + 1)
        else:
            message += text[i]
        
        i += 1
    
    return message, arr[i:]
    
arr = [5, 10, 15, 20, 25]
text = "hello"


#*************************************************************************************
#*************************************************************************************

