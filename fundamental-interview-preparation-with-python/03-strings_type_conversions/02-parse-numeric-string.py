def parse_and_multiply_numbers(input_string):
    num = ""
    numbers = []
    for char in input_string:
        if char.isdigit():
            num += char
        elif num:
            numbers.append(int(num))
            num = ""
    if num:
        numbers.append(int(num))
    result = 1
    for number in numbers:
        result *= number
    return result


# ********************************************************************************************************

#VOGAL POR LETRA E LETRA POR VOGAL

def solution(s):

    words = s.split('-')
    new_array = []
    for char in words:
        if char.isdigit():
            char = chr(ord('a') + (int(char) - 1))
        elif 'a' <= char <= 'z':
            # char = str((ord(char) - ord('a')) % 26 + 1)
            char = str(ord(char) - ord('a') + 1)
        new_array.append(char)

    new_string = '-'.join(new_array)
    return new_string

    
s = "11-a-3-c-5" # "k-1-c-3-e"
print(solution(s))

# ********************************************************************************************************

def solution(s):
    separados = list(s)
    numeros = []
    soma = 0
    numero_completo = ''
    for unidade in separados:
        if unidade.isdigit():
            numero_completo += unidade

        elif numero_completo and numero_completo is not None:
            numeros.append(int(numero_completo))
            numero_completo = ""

    return sum(numeros)

s =  "joe scored 5 points, while adam scored 10 points and bob scored 2, with an extra 1 point scored by joe" # 5 + 10 + 2 + 1 = 18
print(solution(s))

# ********************************************************************************************************

def solution(input_string):

    number = ''
    new_string = ""
    for char in list(input_string):
        if char.isdigit():
            number += char
        if char.isalpha() and number:
            new_string += char + number
            number = ""
        elif not number:
            new_string += char        
    return new_string

    
input_string = "I have 2 apples and 5! oranges and 3 grapefruits." # "I have a2pples and o5ranges and g3rapefruits."
print(solution(input_string))


# ********************************************************************************************************

# ********************************************************************************************************