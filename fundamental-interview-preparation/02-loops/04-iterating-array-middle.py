# Our task is as follows: Given an array of integers, we aim to return a new array that
# emerges from the center of the original array and alternates direction towards both ends.
# In other words, the first element of our new array will be the middle element of the original one.
# After establishing the starting point, we will alternate between the elements 
# to the left and to the right of the initial center until we have incorporated every element. 
# If the length of the initial array is even, we first take the the element to the left of the center, 
# then the one to the right of the center, then do the alternation as described above.

# For example, for numbers = [1, 2, 3, 4, 5], the output should be [3, 2, 4, 1, 5].



def iterateMiddleToEnd(numbers):
    mid = len(numbers) // 2 # The index of the left middle element
    if len(numbers) % 2 == 1:
        new_order = [numbers[mid]] # Adding the middle element to the resulting array
    else:
        new_order = [] # No elements in the resulting array for now
#---------------------------------------------------------------------------------------------------
def iterateMiddleToEnd(numbers):
    mid = len(numbers) // 2 # The index of the left middle element
    if len(numbers) % 2 == 1:
        left = mid - 1 # The left to the middle element
        right = mid + 1 # The right to the middle element
        new_order = [numbers[mid]] # Adding the middle element to the resulting array
    else:
        left = mid - 1 # Left middle element
        right = mid # Right middle element
        new_order = [] # No elements in the resulting array for now

#---------------------------------------------------------------------------------------------------
        
def iterateMiddleToEnd(numbers):
    mid = len(numbers) // 2 # The index of the left middle element
    if len(numbers) % 2 == 1:
        left = mid - 1 # The left to the middle element
        right = mid + 1 # The right to the middle element
        new_order = [numbers[mid]] # Adding the middle element to the resulting array
    else:
        left = mid - 1 # Left middle element
        right = mid # Right middle element
        new_order = [] # No elements in the resulting array for now

    while left >= 0 and right < len(numbers):
        new_order.append(numbers[left])
        new_order.append(numbers[right])
        left -= 1
        right += 1
            
    return new_order

numbers = [1, 2, 3, 4, 5]
resposta = iterateMiddleToEnd(numbers) #[3, 2, 4, 1, 5]
print(resposta)
#********************************************************************************************************

def solution(numbers):
    mid_index = len(numbers) // 2
    
    if len(numbers) % 2 != 0:
        left_index = mid_index - 1
        right_index = mid_index + 1
        result = [numbers[mid_index]]
    else:
        left_index = mid_index -1
        right_index = mid_index
        result = []

    while left_index >= 0 and right_index < len(numbers):
        result.append(numbers[left_index] * numbers[right_index])
        left_index -= 1
        right_index += 1
        
    return result
    
    

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

resposta = solution(numbers)
print(resposta)


#********************************************************************************************************

def solution(numbers):
    mid = len(numbers) // 2
    
    if len(numbers) % 2 != 0:
        left = mid - 1
        right = mid +1
        result = [(numbers[mid], 0)]
    else:
        left = mid -1
        right = mid
        result = []

    while left >= 0 and right < len(numbers):
        tupla = (numbers[left], numbers[right])
        result.append(tupla)
        left -= 1
        right += 1
    return result
    
    
    
numbers = [1, 2, 3, 4, 5]
resposta = solution(numbers)
print(resposta)

#******************************************** MONSTRINHO ************************************************************

def unusual_traversal(array):
    
    mid = len(array) // 2
    result = [array[mid]]
    aux = []
    left = mid - 1
    right = mid + 1
        
    while left >= 0 and right < len(array):
        aux.append(array[left])
        left -= 1
        if left >= 0 :
            aux.append(array[left])
            aux.reverse()
            if len(aux) == 2:     
                result.append(aux[0])
                result.append(aux[1])
            else:
                result.append(aux[0])
            left -= 1
        else:
            result.append(aux[0])
        aux = []

        
        aux.append(array[right])
        right += 1
        if right < len(array):        
            aux.append(array[right])
            if len(aux) == 2:     
                result.append(aux[0])
                result.append(aux[1])
            else:
                result.append(aux[0])
        else:
            result.append(aux[0])

        right += 1
        aux = []
    return result        
    
    
array = [1, 2, 3, 4, 5, 6, 7]
resposta = unusual_traversal(array)
print(resposta)

#********************************************************************************************************

def unusual_traversal(array):
    length = len(array)
    mid = length // 2
    result = [array[mid]]  # Start with the middle element

    left = mid - 1
    right = mid + 1

    # Alternating flag to decide whether to take elements from left or right
    take_left = True
    
    while left >= 0 or right < length:
        if take_left:
            # Take up to 2 elements from the left side
            left_aux = []
            for _ in range(2):
                if left >= 0:
                    left_aux.append(array[left])
                    left -= 1
            result.extend(left_aux[::-1])  # Reverse to maintain correct order
        else:
            # Take up to 2 elements from the right side
            right_aux = []
            for _ in range(2):
                if right < length:
                    right_aux.append(array[right])
                    right += 1
            result.extend(right_aux)
        
        # Alternate between left and right for the next round
        take_left = not take_left

    return result

# Example usage
array1 = [1, 2, 3, 4, 5, 6, 7]
print(unusual_traversal(array1))  # Output: [4, 2, 3, 5, 6, 1, 7]

# array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
# print(unusual_traversal(array2))  # Output: [6, 4, 5, 7, 8, 2, 3, 9, 10, 1, 11]

#********************************************************************************************************

#********************************************************************************************************

#********************************************************************************************************

#********************************************************************************************************

#********************************************************************************************************