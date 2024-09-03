def solution(list1, list2):
    result = []
    for i in list1:
        for j in list2:
            if i < j:
                result.append((i, j))
    return result


list1 = [1, 3, 7]
list2 = [2, 8, 9]

OUTPUT = [(1, 2), (1, 8), (1, 9), (3, 8), (3, 9), (7, 8), (7, 9)]
# ****************************************************************************************************

def common_elements(listA, listB):
    result = []
    
    for a in listA:
        for b in listB:
            if a == b:
                result.append(a)     
    
    return result
    
      
listA = [7, 2, 3, 9, 1]
listB = [2, 3, 7, 6]
OUTPUT = [7, 2, 3]



# ****************************************************************************************************

def stringSearch(sourceArray, searchArray):
    result = []
    
    for source in sourceArray:
        for search in searchArray:
            if source[1] in search[1] and source[0] <= search[0]:
                result.append(source)
                break
    return result

    
    
sourceArray = [(1, 'abc'), (2, 'def'), (3, 'xyz')] # identifier is less or equal to equivalent in searchArray
searchArray = [(1, 'abcdef'), (5, 'uvwxy')]
OUTPUT = [(1, 'abc')]

stringSearch(sourceArray, searchArray)

# ****************************************************************************************************

import math

def solution(arr1, arr2):
    result = []
    for a1 in arr1:
        for a2 in arr2:
            soma = a1 + a2
            if soma >= 0 and math.sqrt(soma).is_integer():
                result.append((a1, a2))
    
    return result
    
    
arr1 = [2, 3, 16]
arr2 = [1, 9, 10]



# ****************************************************************************************************
# ****************************************************************************************************