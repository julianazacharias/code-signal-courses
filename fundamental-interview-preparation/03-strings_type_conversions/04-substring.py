def solution(orig_strs, substrs):
    result_arr = []

    for original, substring in zip(orig_strs, substrs):
        start_position = original.find(substring)
        match_indices = []
        
        while start_position != -1:
            match_indices.append(str(start_position))
            start_position = original.find(substring, start_position + 1)

        result_arr.append(f"The substring '{substring}' was found in the original string '{original}' at position(s) {', '.join(match_indices)}.")

    return result_arr

# orig_strs = ["HelloWorld", "LearningPython", "GoForBroke", "BackToBasics"]

# substrs =  ["loW", "ear", "o", "Ba"]

# solution(orig_strs, substrs)

# ****************************************************************************************************

def replace_substring(text, old, new):
 
    new_text = text.replace(old, new)
        
    return  new_text
    
    
resposta = replace_substring("hello world", "world", "friend") # "hello friend"
print(resposta)

# ****************************************************************************************************

def solution(sentences, words):
    new_sentences = []
    for sentence, word in zip(sentences, words):
        reversed_word = word[::-1]
        reversed_word_capitalized = reversed_word.capitalize()

        # Replace all lowercase instances
        sentence = sentence.replace(word, reversed_word)

        # Replace all capitalized instances
        sentence = sentence.replace(word.capitalize(), reversed_word_capitalized)

        # Add the processed sentence to the result list
        new_sentences.append(sentence)
    
    return new_sentences

# Test examples
sentences = ['this is a Simple example.', 'the name is bond. james bond.', 'remove every single e']
words = ['simple', 'bond', 'e']

print(solution(sentences, words))


# ****************************************************************************************************

def spot_swaps(source: str, target: str) -> list:
    result = []
    # Iterate through the string, stopping before the last character
    for i in range(len(source) - 1):
        # Check if the current character and the next one are swapped in the target
        if source[i] != target[i] and source[i + 1] == target[i] and source[i] == target[i + 1]:
            result.append((i, source[i], source[i + 1]))
    return result
            
        
        
    
source = "hello" 
target = "hlelo"
# OUTPUT = [(1, 'e', 'l')]
spot_swaps(source, target)

print(spot_swaps(source, target))


# ****************************************************************************************************
# ****************************************************************************************************
# ****************************************************************************************************