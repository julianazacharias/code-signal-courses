# Gloria's quest unravels with two arrays, both brimming with non-negative integers. 
# Starting at the first element of arrayA, she leaps to arrayB based on the index she 
# discovers in arrayA. She then bounces back to arrayA according to the index she 
# stumbles upon in arrayB. Gloria repeats these hops until she returns to where 
# she started in arrayA. What an adventure!

#craft a Python function that aids Gloria on her trip. 
# The function will take two lists of integers as inputs, representing arrayA and arrayB. 
# The objective is to find the highest value from arrayB that Gloria jumps to during her voyage.

# If arrayA = [2, 4, 3, 1, 6] and arrayB = [4, 0, 3, 2, 0], the output should be 3.

# It is guaranteed that at some point Gloria returns at the starting position.

def solution(arrayA, arrayB):
    indexA = 0
    indexB = None
    in_arrayA = True
    max_value = 0
    while True:
        if in_arrayA:
            indexB = arrayA[indexA]
            if arrayB[indexB] > max_value:
                max_value = arrayB[indexB]
            else:
                indexA = arrayB[indexB]
                if indexA == 0:
                    return max_value
        in_arrayA = not in_arrayA

arrayA = [2, 4, 3, 1, 6]
arrayB = [4, 0, 3, 2, 0]

print(solution(arrayA, arrayB))

# *******************************************************************************************************

#You're assisting in the creation of an algorithm for a novel game where a character hops between two arrays
# following certain rules. The game starts at the first index (1-based) of an array, arrayA.

# It should return an array consisting of the 1-based indices on arrayB that the character visited 
# before a position on arrayA was repeated.

def solution(arrayA, arrayB):
    indexA = 0
    visited = set() # set is a mutable and unordered collection of unique elements (no duplicates values) set () or {}
    result = []
    
    while indexA not in visited:
        visited.add(indexA) # adding an element

        indexB = arrayA[indexA] - 1  # Convert to 0-based indexing - TEM QUE SER O INDEX MESMO, como se le em python
        result.append(indexB + 1)  # Convert back to 1-based indexing - add 1 again A é i index B anterior
        indexA = arrayB[indexB] - 1  # Convert to 0-based indexing
    
    return result

# Test case
arrayA = [2, 4, 3, 1, 5] # AQUI JA ESTA COM A BASE 1, TENHO QUE CONVERTER PRA BASE 0 (original)
arrayB = [1, 5, 4, 3, 2]

print(solution(arrayA, arrayB))  # Should print: [2, 5, 4, 3, 1]


# *******************************************************************************************************

# PARECIDO COM O PRIMEIRO MAS COM 3 ARRAYS - A, B e C

def solution(arrayA, arrayB, arrayC):
    
    current_index = 0
    positions = [0, None, 0, None]  # To track positions in arrayA, B, A, C
    journey = [arrayA, arrayB, arrayA, arrayC]
    max_values = [0, 0]  # To track max in arrayB and arrayC
    
    visited = set()

    while True:
        current_array_index = current_index % 4 # 0, 1, 2, 3
        position = positions[current_array_index]
        
        if position is None or position >= len(journey[current_array_index]):
            break
            
        # Add the position to the visited set
        if (position, current_array_index) in visited:
            break
            
        visited.add((position, current_array_index))
        
        current_array = journey[current_array_index]
        
        if current_array_index == 1:  # arrayB
            max_values[0] = max(max_values[0], current_array[position])
        
        if current_array_index == 3:  # arrayC
            max_values[1] = max(max_values[1], current_array[position])
        
        # Move to the next position in the sequence
        next_index = current_array[position]
        positions[(current_array_index + 1) % 4] = next_index
        
        current_index += 1

    return sum(max_values)

arrayA = [2, 1, 3, 0]
arrayB = [1, 3, 2, 4]
arrayC = [4, 2, 5, 1]

# 3 + 4 = 7

solution(arrayA, arrayB, arrayC)


# *******************************************************************************************************
#Calcula o numero de movimentos a cada rodada (A iniciando na posição 0, depois iniciando na 2, na 3 e assim por diante) 

def solution(roadA, roadB):
    result = []
    
    for i in range(len(roadA)):
        visited = set()
        moves = 0
        indexA = i
        jump_A_to_B = True
        
        while (indexA, jump_A_to_B) not in visited:
            visited.add((indexA, jump_A_to_B))
            
            if jump_A_to_B:
                indexB = roadA[indexA]
                indexA = roadB[indexB]
            else:
                indexA = roadB[indexB]
                indexB = roadA[indexA]
            moves += 1
            jump_A_to_B = not jump_A_to_B
        result.append(moves)
    return result        
   
roadA = [1, 0, 2]
roadB = [2, 0, 1]
#[2, 4, 4]
solution(roadA, roadB)

# *******************************************************************************************************
