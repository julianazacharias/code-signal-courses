# Task Statement
# In this lesson, our goal is to write a Python function that accepts a string as input 
# and identifies all consecutive groups of identical characters within it. 
# A group can be defined as a segment of the text where the same character is repeated consecutively.

# Your function should return a list of tuples. Each tuple will consist of the repeating character
#  and the length of its repetition. For instance, if the input string is "aaabbcccdde", 
# your function should output: [('a', 3), ('b', 2), ('c', 3), ('d', 2), ('e', 1)].

# It's important to note that while processing the input string, we are interested 
# only in alphanumeric characters (i.e., alphabets and digits), 
# whether they are upper or lower case. Any other characters present 
# won't factor into the formation of these groups.

# Are you ready to unravel how to accomplish this task? Let's dive in!

def solution(s):
    groups = [] # GRUPO (RESULTADO FINAL)
    current_group_char = None # QUAL CARACTERE ESTA SENDO AVALIADO NO MOMENTO
    current_group_length = 0 # QUANTOS CARACTERES DESSES AVALIADOS

    for char in s:
        if char.isdigit() or char.isalpha(): 
            if char == current_group_char: # O CARACTERE PERTENCE A ESSE GRUPO
                current_group_length += 1 # ADICIONA PRA SABER QUANTOS CARACTERERS SE REPETEM
            else:
                if current_group_char is not None: # EXISTE UM GRUPO AQUI?
                    groups.append((current_group_char, current_group_length)) # ADICIONA NO RESULTADO (GROUPS)
                current_group_char = char # DEPOIS QUE ADICIONA, MUDA PRO PROXIMO CARACTERE A SER AVALIADO
                current_group_length = 1 # COMEÇA COM 1 PORQUE AO MENOS UMA VEZ ELE APARECE (SE EXISTE, APARECE)
    if current_group_char is not None: # EXISTE UM GRUPO AQUI?
        groups.append((current_group_char, current_group_length)) # ADICIONA NO RESULTADO (GROUPS)
    
    return groups

s = "aaabbcccdde"
resposta = solution(s)
print(resposta)

#********************************************************************************************************

def encode_rle(s):
    result = "" 
    current_group_char = None
    current_group_length = 0 

    for char in s:
        if char.isdigit() or char.isalpha():
            if char == current_group_char:
                current_group_length += 1 
            else:
                if current_group_char is not None:
                    result += current_group_char
                    result += str(current_group_length)
                current_group_char = char
                current_group_length = 1
    if current_group_char is not None:
        result += current_group_char
        result += str(current_group_length)
    return result

# s = "aaa@@bb!!c#d**e" # "a3b2c3d2e1"
# s = "aaabbcccdde" # " # "a3b2c1d1e1"

# resposta = encode_rle(s)
# print(resposta)

#********************************************************************************************************

def solution(s):
    result = []
    current_group_char = None
    current_group_length = 0

    for char in s[::-1]: # s = "aaabbcccdde"
        if current_group_char == char:
            current_group_length += 1
        else:
            if current_group_char is not None:
                result.append((current_group_char, current_group_length))
            current_group_char = char
            current_group_length = 1
    if current_group_char is not None:
        result.append((current_group_char, current_group_length))
    return result

s = "aaabbcccdde"
solution(s)
print(solution(s))

#********************************************************************************************************



def solution(s):
    result = "" 
    current_group_pair = None
    current_group_length = 0 

    for i in range(0, len(s), 2):
        pair = s[i:i+2]
        if pair.isdigit() or pair.isalpha():
            if pair == current_group_pair:
                current_group_length += 1 
            else:
                if current_group_pair is not None:
                    result += current_group_pair
                    result += str(current_group_length)
                current_group_pair = pair
                current_group_length = 1
    if current_group_pair is not None:
        result += current_group_pair
        result += str(current_group_length)
    # else: 
    #     result += current_group_pair
    #     result += str(current_group_length)
    return result

s = "aaabbabbababacab" # "aa1ab1ba1bb1ab2ac1ab1"

resposta = solution(s)
print(resposta)

#********************************************************************************************************


#********************************************************************************************************

#********************************************************************************************************

#********************************************************************************************************

#********************************************************************************************************

#********************************************************************************************************

#********************************************************************************************************