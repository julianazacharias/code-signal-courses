text = "Hello, Python!"
for char in text:
    print(char)
# Prints:
# H
# e
# l
# l
# o
# ,
# ...

try:
    text = "Hello, Python!"
    tenth_char = text[9]
    print('The tenth character is:', tenth_char)
except IndexError as e:
    print("Char access error message:", e)


# The ord() and chr() functions could prove valuable when implementing encryption algorithms. 
# Specifically, ord(c) returns an ASCII ordinal number of the provided character c, and chr(c) converts 
# the provided ASCII ordinal number back to the character.

print(ord('A'))  # Prints: 65
print(chr(65))  # Prints: 'A'
print(chr(ord('A') + 1)) # Prints: 'B'

print('mark'.upper())  # Prints: 'MARK'
print('Mark'.lower())  # Prints: 'mark'

# The isalpha(), isdigit(), and isalnum() methods are useful when you need to check 
# whether the character or all letters in the string satisfy a specific condition 
# (are all letters, all digits, or letters/digits, respectively).

print("C".isalpha()) # Prints: True
print("C++".isalpha()) # Prints: False
print("239".isdigit()) # Prints: True
print("C239".isdigit()) # Prints: False
print("C98".isalnum()) # Prints: True
print("C98++".isalnum()) # Prints: False

def encrypt_string(text):
    encrypted = []
    for c in text:
        #Check if `c` is a letter different from 'z' and 'Z'. If so, increment by 1.
        # If 'c' is 'z', change it to 'a'. If 'c' is 'Z', change it to 'A'.
        # Otherwise, keep 'c' unchanged and add it to the encrypted list.
        if c not in ('z', 'Z'):
            c = chr(ord(c) + 1)
        elif c == 'z':
            c = 'a'
        elif c == 'Z':
            c = 'A'
        encrypted.append(c)
        print(encrypted)
            
    return ''.join(encrypted)

# Encrypt the string "Hello, Python!" by shifting each letter in the alphabet one by one.

encrypted_text = encrypt_string("Hello, Python!")
print("The encrypted text is:", encrypted_text) # Should print out "Ifmmp, Qzuipo!"

#********************************************************************************************************


# ***************** CRIPTOGRAFIA DE CESAR: *****************

def encrypt_text(text):
    encrypted = ""
    for char in text:
        if char.isalpha():  # check if the character is an alphabet
            shift = 3
            if char.isupper():
                letrinha = chr((ord(char) - ord('A') + shift) % 26 + ord('A'))
            else:
                letrinha = chr((ord(char) - ord('a') + shift) % 26 + ord('a'))
            encrypted += letrinha
        else:
            encrypted += char  # keep non-alphabet characters unchanged
    return encrypted

# Example text to encrypt
original_text = "Hello, Python!"
encrypted_text = encrypt_text(original_text)
print(encrypted_text)  # The correct output after implementing the TODO should be 'Khoor, Sbwkrq!'

# Quebra da Linha de Código
# ord(char):

# A função ord() recebe um caractere e retorna o seu valor Unicode (ou ASCII para caracteres do alfabeto básico). Por exemplo, ord('A') retorna 65 e ord('B') retorna 66.
# ord(char) - ord('A'):

# Subtrai o valor Unicode de 'A' do valor Unicode do caractere char. Isso transforma o caractere 'A' em 0, 'B' em 1, 'C' em 2, e assim por diante, o que é útil para operações matemáticas baseadas na posição do caractere no alfabeto.
# (ord(char) - ord('A') + shift):

# Adiciona o valor de shift (o deslocamento) à posição do caractere no alfabeto. Se shift for 3 e char for 'A', o resultado seria 3.
# (ord(char) - ord('A') + shift) % 26:

# O operador % 26 garante que a rotação se mantenha dentro dos limites do alfabeto. Se o deslocamento levar a uma posição além de 'Z', ele volta para o início do alfabeto. O módulo 26 é utilizado porque há 26 letras no alfabeto inglês.
# chr((ord(char) - ord('A') + shift) % 26 + ord('A')):

# Converte o valor numérico resultante de volta para um caractere. Adiciona o valor Unicode de 'A' para obter o caractere correspondente.