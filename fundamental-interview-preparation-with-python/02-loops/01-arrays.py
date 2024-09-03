# Our task is to form pairs of 'opposite' elements in a given array of integers. 
# In an array of n elements, we view the first and last elements as 'opposite', 
# the second and second last elements as 'opposite', and so on. If the array length is odd, 
# the middle element is its own 'opposite'.

# You are provided with an array of n integers, with n ranging from 1 to 100, inclusive. 
# The task necessitates that you return an array of tuples, where each tuple comprises a pair of an element 
# and its 'opposite' element.

#for numbers = [1, 2, 3, 4, 5, 6, 7]

#the output should be solution(numbers) = [(1, 7), (2, 6), (3, 5), (4, 4), (5, 3), (6, 2), (7, 1)].


#********************************************************************************************************

# Solution Building: Step 1

# Before we start writing code, let's familiarize ourselves with how to access the elements of an array in Python.

# In Python, the i-th element of an array numbers can be accessed as numbers[i], 
# with the index starting from 0. Consequently, the first element can be accessed using numbers[0], 
# the second using numbers[1], and so forth, up to numbers[number.length - 1] for the last element.

# Already dressed to the nines? Brilliant! Now, let's figure out how to access each element's 'opposite'.

#********************************************************************************************************
#Solution Building: Step 2

# The 'opposite' of the i-th element of the array is the numbers.length - i - 1-th element. To visualize this, 
# imagine that you are standing at the start of a line and your friend is at the end of the line,
#  with both of you being 'opposites'. So, the opposite element for numbers[0] is numbers[numbers.length - 0 - 1], 
# the opposite to numbers[1] is numbers[numbers.length - 1 - 1], and so on.

# Now, let's start coding our solution. We initiate by initializing an empty list in which we will store our 
# 'opposite' pairs and by calculating the array's length for later use.

# def solution(numbers):
#     result = []
#     n = len(numbers)

# def solution(numbers):
#     result = []
#     n = len(numbers)
#     for i in range(n):
        # next step comes here

#********************************************************************************************************

# Solution Building: Step 3

# Within our loop, we create a tuple for each pair of 'opposite' elements. 
# This pair includes the i-th element and the n - i - 1-th element. We then append this tuple to our result list. 
# Here's the final version of our function:

def solution(numbers):
    result = []
    n = len(numbers)
    for i in range(n):
        result.append((numbers[i], numbers[n - i - 1]))
    return result

# This function iterates over all elements of the array and, for each element, 
# forms a pair with its 'opposite' and stores the pair as a tuple in the result list.

#********************************************************************************************************

import math

def solution(numbers):
    result = []
    n = len(numbers)
    for i in range(n):
        elemento = numbers[i]
        raiz = round(math.sqrt(numbers[i] * numbers[n - i - 1]), 2)
        conjunto = (elemento, raiz)
        result.append(conjunto)
    return result

  
test = [1, 2, 3, 4, 5]
answer = solution(test)

#********************************************************************************************************

def solution(numbers):
    result = []
    n = len(numbers)
    for i in range(n):
        original = numbers[i]
        reversed = int(str(original)[::-1])
        conjunto = (original, reversed)
        if reversed in numbers:
            result.append(conjunto)
    return result
   
test = [123, 321, 456, 654, 789, 987]

answer = solution(test)
print(answer)

#********************************************************************************************************

def solution(numbers):
    result = []
    n = len(numbers)
    print(n // 2)
    for i in range(n // 2):
        result.append(numbers[i] + numbers[n - 1 - i])
    if n % 2 != 0:
        result.append(numbers[n // 2]*2)
    return result

test = [3, 5, 8, -2, 4, 7, 1]
answer = solution(test)
print(answer)



#********************************************************************************************************

def solution(numbers):
    result = []
    n = len(numbers)
    half = n // 2
    if n % 2 != 0:
        half += 1
    for i in range(half):
        elemento = numbers[i]
        oposto = numbers[n - i -1]
        sum_pair = elemento + oposto
        result.append(sum_pair)  
    return result  


test = [3, 5, 8, -2, 4, 7, 1]
answer = solution(test)
print(answer)