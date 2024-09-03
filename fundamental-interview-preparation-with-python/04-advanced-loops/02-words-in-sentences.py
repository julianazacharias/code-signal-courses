def solution(sentence):
    words = sentence.split(' ')
    result = ''
    for word in words:
        if len(word) % 2 == 0:  # check if the length of word is even
            for i in range(1, len(word), 2):  # loop over odd characters ***range(start, stop, step)***
                result += word[i]
    return result

# ****************************************************************************************************

def solution(sentence):
    result = ''
    
    sentence_array = sentence.split()
    
    for word in sentence_array:
        if len(word) % 2 != 0:
            for i in range(0, len(word), 2):
                result += word[i]
    return result[::-1]
    
sentence = "Coding tasks are fun and required"   
solution(sentence)

OUTPUT = "tssaefnad"

# selects the even-indexed characters of words containing an odd number of characters.
# ou seja, a palavra tem caracteres impares e vai selecionar os indexes pares dessa palavra e juntar
# numa string, e no final vai inverter essa string


# ****************************************************************************************************


from collections import Counter

def solution(sentence):
    result = ''
    
    sentence_array = sentence.split()
    
    for word in sentence_array:
        if len(word) % 2 != 0:
            word = word.lower()
            contar = Counter(word)
            most_common, count = contar.most_common(1)[0] # o primeiro mais comum, pega como resposta index 0 (que é a letra)
            result += most_common
    return result
                    

            
    
sentence = "Hello world this is a demo string"
OUTPUT = "lwa"

print(solution(sentence))

# ****************************************************************************************************

# EXERCICIO ANTERIOR, MAS COM AJUSTE (ambos corretos, mas o Counter pode não pegar o primeiro caractere sempre em caso de não repetição em nenhuma palavra)


from collections import Counter

def solution(sentence):
    result = ''
    sentence_array = sentence.split()

    for word in sentence_array:
        if len(word) % 2 != 0:
            word = word.lower()
            tupla_counter = Counter(word)

            most_common_char = ''
            most_common_count = 0

            for char in word:
                if tupla_counter[char] > most_common_count:

                    most_common_char = char
                    most_common_count = tupla_counter[char]

                elif tupla_counter[char] == most_common_count and most_common_char == '':

                    most_common_char = char
            result += most_common_char

    return result


sentence = "Hello world this is a demo string"
print(solution(sentence))  # Output should be "lwa"

# ****************************************************************************************************

def solution(sentence, c):
    result = ""
    
    sentence_array = sentence.split()
    
    for word in sentence_array:
        if len(word) % 2 == 0:

            half = len(word) // 2
            sec_half_word = word[half:]
            
            for char in sec_half_word:
                if ord(char) < ord(c):
                    result += char
            
    return result
    
    
sentence = "Practice makes perfect."
c = 'f'


# ****************************************************************************************************