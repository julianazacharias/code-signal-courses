#For example, if the inputString is "abcdefg", the function should return "agbfced".

#The question here is, how many iterations are required for our loop? 
# Given that we are taking two characters per iteration — one from the beginning 
# and one from the end — we need the loop to run for half the length of the list if 
# the length is even and half the length plus one if the length is odd so that we include the middle character.

#How do we achieve this? We use length // 2 + length % 2. This will ensure that 
# the loop iterates for half the length if it is even and half the length plus one if it is odd.

def solution(inputString):
    result = ''
    length = len(inputString)
    for i in range(length // 2 + length % 2):
        # Loop implementation in next step
        pass

#********************************************************************************************************

# Step 3: Adding Characters to Result
# Now that we are inside our loop, we can start taking characters and adding them to our result.

# First, we take a character from the beginning of the input string, i.e., inputString[i], and add it to our result.

# Next, we take a character from the end of the input string. The index for the last character is 
# length - 1 - i. However, we don't want to add this character if it is the same as the one we just added 
# from the beginning. This could happen when the length of the string is odd and we are at the middle character. 
# Hence, we only add it if length - 1 - i is not equal to i.

# After adding the code for these steps, our function becomes:

#[i] - INDEX OF first CHARACTER
#[length - 1 - i] - INDEX OF LAST CHARACTER

def solution(inputString):
    result = ''
    length = len(inputString)
    for i in range(length // 2 + length % 2):
        result += inputString[i]
        if length - 1 - i != i:
            result += inputString[length - 1 - i]
    return result

#********************************************************************************************************
#UMA FORMA MAIS FACIL DE ENTENDER

def solution(inputString):
    result = ''
    length = len(inputString)
    for i in range(length // 2 + length % 2): #This will ensure that the loop iterates for half the length 
        #if it is even and half the length plus one if it is odd.

        result += inputString[i] # ADICIONA O PRIMEIRO ELEMENTO, SEGUNDO, TERCEIIRO EM ORDEM

        posicao_ultimo = length - 1 - i # print(poicao_ultimo)
        if posicao_ultimo != i:
            result += inputString[posicao_ultimo] # ADICIONA O ULTIMO ELEMENTO, PENULTIMO, ANTEPENULTIMO EM ORDEM
    return result

string = 'abcdea'
answer = solution(string)
print(answer)

#********************************************************************************************************

def special_order(inputString):
    length = len(inputString)
    if length == 1:
        return inputString
    i_middle = length // 2
    i_last = length - 1
    first_part = inputString[i_last: i_middle - 1 : -1] #imprime do fim pro meio (reverse)
    second_part = inputString[:i_middle]   # Imprime do começo até o meio 
    return first_part + second_part

# Start Index (length - 1): Index of the LAST CHARACTER of the string.
# *** middle - 1 *** (length // 2 - 1): This is the index just before the middle of the string.
# Step (-1): Slicing should proceed in REVERSE ORDER (from END to START).
    
entrada = 'abcdefgh' # "hgfedabcd"

resposta = special_order(entrada)
print(resposta)


#********************************************************************************************************

def repeat_char_jump(inputString, k): # K é igual a step
    length = len(inputString)
    result = []
    visited = [False] * length # criando um array pra saber se visitou todos
    i = 0
    
    while (len(result) < length): # Enquanto array menor que tamanho
        if not visited[i]:
            result.append(inputString[i])
            visited[i] = True
        i = (i + k) % length  # % length PORQUE NÃO PODE ULTRAPASSAR O TAMANHO DO ARRAY
    return ''.join(result)
    
    
palavrao = 'abcdefg' #"adgcfbe"
step = 3
answer = repeat_char_jump(palavrao, step)
print(answer)

#********************************************************************************************************

def reversed_triple_chars(s: str) -> str:
    chunks = [s[i:i+3] for i in range(0, len(s), 3)] # with a step size of 3.
    reversed_string_build = ''
    for chunk in chunks:
        if len(chunk) == 3:
            reversed_string_build += chunk[::-1]  # Only reverse if the chunk has exactly 3 characters
        else:
            reversed_string_build += chunk  # Append small chunks as they are
    return reversed_string_build

# Test your function
entrada = 'abcdefg' # "cbafedg" expected
resposta = reversed_triple_chars(entrada)
print(resposta)

#********************************************************************************************************

#********************************************************************************************************

#********************************************************************************************************

#********************************************************************************************************

#********************************************************************************************************