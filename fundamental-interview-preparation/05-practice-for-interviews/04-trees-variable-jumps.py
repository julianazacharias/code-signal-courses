# Task Statement
# Consider an array which symbolizes a dense forest; each index is either 1, 
# indicating a tree, or 0, signifying a clear position. Starting from a fixed initial 
# index and given a specific direction, your objective is to ascertain the smallest 
# possible jump size that enables traversal from the initial position to one of the 
# ends of the array without hitting a tree. Each move you make will be exactly the 
# determined jump size in the given direction.

# Keep these pointers in mind:

# The array of binary integers (0 and 1) depicts the forest.
# The journey will always commence from a 0 index.
# The direction is an integer. 1 implies jumping toward larger indices, while -1 denotes 
# jumping toward smaller ones.
# In situations where there is no jump size that can avoid all trees, return -1 to indicate 
# the impossibility of traversal under these conditions.
# The ultimate objective? Identify the minimal jump size that ensures a smooth navigation 
# through the entire forest without hitting a single tree.

# Example

# For the input values forest = [0, 1, 0, 0, 0, 0, 1, 1], start = 0, and direction = 1, 
# the output should be 4.

# If you take the jump size equal to 1, you immediately step on a tree.
# If you choose 2, you step on a tree after three jumps at forest[6].
# If you choose 3, you again step on a tree at forest[6].
# For the jump size equal to 4, you first jump to the 4th position which is a 
# valid position, then jump outside of the array, thereby traversing the forest without hitting a tree.


def calculate_jump(forest, start, direction):

    jump = 1

# The first while ensures the jumps stay within the boundary of the forest array
# The expression (direction * jump) + start calculates the position index after executing a jump

    while (direction * jump) + start >= 0 and (direction * jump) + start < len(forest): 
        pos = start # reinicia a posição
        while 0 <= pos < len(forest): # EXECUTAR OS PULOS - Within the nested loop, inspect whether the current position has a tree
            if forest[pos] == 1: # ENCONTROU UMA ARVORE - QUEBRA O LOOP
                break # quando parar no break, esse ja não serve mais
            pos += jump * direction # A FUNÇÃO DE DIRECTION APENAS DETERMINA SE VAI PRA FRENTE OU PRA TRAS (POSITIVO OU NEGATIVO)
        else:
            return jump

        jump += 1 # acrescenta um pulinho
    return -1

forest = [0, 1, 0, 0, 0, 0, 1, 1]
start = 0
direction = 1

calculate_jump(forest, start, direction)

# *******************************************************************************************************************

def solution(dungeon, health):
    dungeon_size = len(dungeon)
    best_jump = None
    best_health = float('-inf')

    for jump in range(1, dungeon_size + 1):
        current_pos = 0 # RESETAR A POSIÇÃO CADA VEZ QUE VOLTA PRO LOOP
        current_health = health # RESETAR O HEALTH (VIDAS) CADA VEZ QUE VOLTA PRO LOOP

        while current_pos < dungeon_size:

            current_health -= dungeon[current_pos]

            if current_health <= 0:
                break

            current_pos += jump
            
        else:
            if current_health > best_health:
                best_health = current_health
                best_jump = jump

    if best_health <= 0:
        return -1
    return best_jump

# Example usage:
dungeon = [0, 1, 0, 0, -2, 0, 3]
health = 5
print(solution(dungeon, health))

# *******************************************************************************************************************

def largest_step(garden, start, direction):
    
    unique_flowers = set(garden) # SET DE GARDEN SÃO TODOS OS VALORES DE GARDEM QUE APARECEM, MAS AQUI SEM REPETIR
    max_step = len(garden)  # start with the maximum possible step size
    
    for step in range(max_step, 0, -1):
        
        seen_flowers = set() # reset seen flowers for each step size
        i = start  # reset start
        
        # SIMULATE THE JUMPS
        while 0 <= i < len(garden):
            seen_flowers.add(garden[i])
            if len(seen_flowers) == len(unique_flowers): # IGUAL A: QUANDO PASSAR POR TODAS AS FLORES DO JARDIM
                return step  # ALL FLOWERS TYPES HAS BEEN VISITED
            i += step * direction
        
        # if no valid step size is found that covers all flowers
    return -1
    
            
    
garden = [3, 1, 2, 1, 3, 2, 1]
start = 0
direction = 1

# *******************************************************************************************************************

def solution(array1, array2):
    if array1 == array2:
        return array1, 0

    min_distance = float('inf')
    best_rotation = array1[:] # COPIA DO ARRAY 1
    
    for i in range(len(array1)):
        # p = array1[i:] # DO (VALOR) NO INDICE PRA FRENTE
        # s = array1[:i] # PRA TRAS DO (VALOR) NO INDICE
        rotated = array1[i:] + array1[:i]
        distance = sum(abs(rotated[j] - array2[j]) for j in range(len(array1)))
        
        if distance < min_distance:
            min_distance = distance
            best_rotation = rotated
        elif distance == min_distance: # IMPORTANTE If the distance is equal to the current min_distance, 
            if ''.join(map(str, rotated)) < ''.join(map(str, best_rotation)):
                best_rotation = rotated
            #check the lexicographical order by converting arrays to strings and comparing. 
            # If the current rotated is lexicographically smaller, update best_rotation.
    
    return best_rotation, min_distance
        
 
array1 = [1, 2, 3, 4, 5]
array2 = [5, 4, 3, 2, 1]
solution(array1, array2)

# *******************************************************************************************************************

# *******************************************************************************************************************




