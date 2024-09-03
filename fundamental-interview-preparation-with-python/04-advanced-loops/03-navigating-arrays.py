# In this "Move Until Obstacle" game, the player begins at the start of a linear array of integers. 
# The number at each position indicates the number of steps a player can move rightward, 
# while an obstacle number is one upon which you can't land. The aim is to move as far right as possible 
# until an obstacle stops you or you reach the array's end.

# Your function, solution(numbers, obstacle), needs to tally and 
# return the number of moves needed to reach the array's end without encountering an obstacle. 
# If the player encounters an obstacle, then the function should return the index at which the obstacle lies.

# For example, if the function is given the input: numbers = [2, 3, 3, 4, 2, 4] and obstacle = 4, 
# it should return 5. This is because the player starts on the 0th index, takes 2 steps as indicated 
# by the number at the 0th index (landing on the 2nd index), and then takes 3 more steps as indicated 
# by the number at the 2nd index to land on the 5th index, which is the obstacle 4.

# If the function is given the input: numbers = [4, 1, 2, 2, 4, 2, 2] and obstacle = 2, the output should be 2.
# The player starts on the 0th index, takes 4 steps, lands on the 4th index, then takes 4 more steps, 
# which brings the player outside the array, so in total the player makes 2 steps.


def solution(numbers, obstacle):
    position = 0
    moves = 0
    while position < len(numbers):
        if numbers[position] == obstacle:
            return position
        moves += 1
        position += numbers[position]
    return moves


# ****************************************************************************************************

def solution(numbers):
    n = len(numbers)
    result = []
    
    for i in range(n):
        if numbers[i] < 0: # SE FOR UM OBSTACULO
            result.append(-1)
        else:
            found_obstacle = False
            ultimo_valor = min(i + numbers[i] + 1, n)
            for j in range(i + 1, ultimo_valor):
                if numbers[j] < 0:
                    result.append(j)
                    found_obstacle = True
                    break
            if not found_obstacle:
                result.append(numbers[i])  # No obstacle found, keep original value
    
    return result

# Test the function
numbers = [3, 2, -3, 1, 2]
# OUTPUT = [2, 2, -1, 1, 2]
print(solution(numbers))  # Expected: [2, 2, -1, 1, 2]

# ******************************************************************************************************

def evaluatePath(numbers):
    # Initialize the starting variables
    position = 0
    moves = 0
    direction = 1  # 1 for right, -1 for left
    direction_changes = 0
    n = len(numbers)
    
    while True:
        # Calculate the move
        move = direction * numbers[position]
        new_position = position + move
        
        # Check if the new position is out of bounds
        if new_position < 0 or new_position >= n:
            direction *= -1  # Reverse direction
            direction_changes += 1
            if direction_changes == 2:
                break
            continue
        
        # Check if the new position is a blockade
        if numbers[new_position] == 0:
            break
        
        # Update position and moves
        position = new_position
        moves += 1
    
    return (position, moves)

# *******************************************************************************************************

def solution(numbers, obstacle):
    steps = []
    
    for i in range(len(numbers)):
        position = i
        current_steps = 0
        
        while position < len(numbers):
            if numbers[position] == obstacle:
                steps.append(-1)
                break
            current_steps += 1
            if position + numbers[position] < len(numbers):
                position += numbers[position]
            else:
                steps.append(current_steps)
                break
        else:
            if position >= len(numbers):
                steps.append(current_steps)
    
    return steps


# ****************************************************************************************************

def solution(numbers, obstacle):
    n = len(numbers)
    steps = [0] * n

    for i in range(n):
        position = i
        current_steps = 0

        while position < n:
            if numbers[position] == obstacle:
                steps[i] = -1
                break            
            position += numbers[position]
            current_steps += 1

            if position >= n:
                steps[i] = current_steps
                break
        i += 1   

    return steps

numbers = [5, 3, 2, 6, 2, 1, 7]
obstacle = 3

print(solution(numbers, obstacle))

# OUTPUT = [3, -1, 3, 1, 2, 2, 1]

# ****************************************************************************************************
# ****************************************************************************************************
# ****************************************************************************************************
# ****************************************************************************************************