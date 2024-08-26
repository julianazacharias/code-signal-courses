# The first step requires initialization of our variables. 
# We'll use two indices, i and j, to point to the current digit in num1 and num2, respectively. 
# We'll also need a variable carry to hold carryovers from each addition operation. 
# Lastly, we'll employ a list named res to hold our result, 
# where each digit from the addition is appended at the front.

# def solution(num1, num2):
#     i, j, carry, res = len(num1) - 1, len(num2) - 1, 0, []

#Having initialized our variables, we can advance to the next step, 
# which involves scanning through num1 and num2 from right to left. 
# This scanning goes from the least significant digit to the most significant one.

#For each iteration, we extract the digits n1 from num1 and n2 from num2. 
# If i or j is less than 0, we've processed all the digits in one of the numbers. 
# Consequently, we consider these additional digits as 0.

# def solution(num1, num2):
#     i, j, carry, res = len(num1) - 1, len(num2) - 1, 0, []
    
#     while i >= 0 or j >= 0 or carry > 0:
#         n1 = int(num1[i]) if i >= 0 else 0
#         n2 = int(num2[j]) if j >= 0 else 0


# After obtaining the digits n1 and n2, our immediate step is to add them.
#  However, the carry, which accumulates any overflow from the addition of 
# previous column digits, must also be added. This sum results in a two-digit number,
# in which the tens place becomes a new carry and the units place is the resultant digit.

# Subsequently, we append curr to res and decrement both i and j before embarking on the next iteration. 
# Finally, we reverse res and join the digits into a single string to acquire our result.

def solution(num1, num2):
    i, j, carry, result = len(num1) - 1, len(num2) - 1, 0, []  # i and j are initialized to the last indices of num1 and num2, respectively.
    
    while i >= 0 or j >= 0 or carry > 0:
        n1 = int(num1[i]) if i >= 0 else 0 # Transforma o digito de string pra inteiro, pra avaliar no loop
        n2 = int(num2[j]) if j >= 0 else 0

        total = n1 + n2 + carry

        if total > 9:
            carry = 1
        else:
            carry = 0
        current = total % 10 # Sera 0 ou 1, sempre -> desconsidera a dezena, ela sera usada na proxima soma de numeros a esquerda (proximo loop)
        result.append(str(current))

        i, j = i -1, j - 1

    return ''.join(result[::-1])  # reverse the list and join into a single string

num1 = "789"
num2 = "456"

solution(num1, num2)
print(solution(num1, num2))



# ******************************************************************************************

# Your mission is to write a Python function that compares these two "string-numbers"
#  without converting the entire strings into integers. Your function should determine 
# whether num1 is greater than, less than, or equal to num2.

def solution(num1, num2):
    len1, len2 = len(num1), len(num2)
    
    if len1 > len2:
        return 1
    elif len2 > len1:
        return -1
    else:
        # Compare digit by digit --> Nesse caso não se deve a ordem dos numeros
        for i in range(len1):
            digit1 = num1[i]
            digit2 = num2[i]
            if digit1 > digit2:
                return 1
            elif digit1 < digit2:
                return -1
        return 0  # All digits are the same

# Continue for digit by digit comparison if lengths are equal
    
    

# For `num1` = '12345' and `num2` = '1234', your function should return `1`.
# For `num1` = '1234' and `num2` = '12345', your function should return `-1`.
# For `num1` = '12345' and `num2` = '12345', your function should return `0`.

num1 = '1236'
num2 = '1234'

print(solution(num1, num2))

# ******************************************************************************************

def solution(num1, num2):
    i, j, borrow, result = len(num1) - 1, len(num2) - 1, 0, []

    while i >= 0 or j >= 0:
        n1 = int(num1[i]) if i >= 0 else 0 # Transforma o digito de string pra inteiro, pra avaliar no loop
        n2 = int(num2[j]) if j >= 0 else 0
        
        n1 -= borrow  # subtract the borrow if any from n1
        
        if n1 < n2:
            n1 += 10  # borrow 10 - pega uma dezena
            borrow = 1
        else:
            borrow = 0
        
        total = n1 - n2
        result.append(str(total))

        i -= 1
        j -= 1
        
    # Remove leading zeros
    while len(result) > 1 and result[-1] == '0':
        result.pop()

    return ''.join(result[::-1])  # reverse the list and join into a single string

# Example usage
num1 = '398746'
num2 = '199234'
print(solution(num1, num2))  # Expected '199512'



# ******************************************************************************************

def solution(num1, num2):
    len1, len2 = len(num1), len(num2)
    product = [0] * (len1 + len2) # Um array gigante, que cada casa é um digito to tamanho dos dois numeros a multiplicar
    
    # Multiply each digit from `num2` with each digit from `num1`
    for i in reversed(range(len1)): # ITERANDO DE TRAS PRA FRENTE OS DOIS NUMEROS
        for j in reversed(range(len2)):
            mul = int(num1[i]) * int(num2[j])
            sum_ = mul + product[i + j + 1]
            product[i + j + 1] = sum_ % 10
            product[i + j] += sum_ // 10

    # Build the final result string
    result = ''.join(map(str, product))
    
    # Remove leading zeros
    result = result.lstrip('0')
    
    return result if result else '0'

num1 = '123'
num2 = '456'
print(solution(num1, num2))


# ******************************************************************************************