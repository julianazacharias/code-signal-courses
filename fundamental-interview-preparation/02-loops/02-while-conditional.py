def solution(n):
    digit_sum = 0
    while n > 0:
        digit = n % 10
        if digit % 2 == 0:  # Check if the digit is even
            digit_sum += digit
        n = n // 10  # Remove the last digit
    return digit_sum

#********************************************************************************************************

def solution(n):
    result = 1
    count_odd = 0
    while n >= 1 and n <= 10**8:
        digit = n % 10
        if digit % 2 != 0:
            result *=  digit
            count_odd += 1
        n = n // 10
    if count_odd == 0:
        return 0
    return result          
    
    
    
value = 8642
answer = solution(value)
print(answer)

#********************************************************************************************************

def solution(n):
    result = 0
    while n > 0:
        single = n % 10
        result = result * 10 + single
        n //= 10
    return result

number = 12345
answer = solution(number)
print(answer)


#********************************************************************************************************

def solution(n):
    resultado = 0
    add_uma_casa = 1
    
    while n > 0:
        digito_sozinho = n % 10
        resultado += digito_sozinho * add_uma_casa
        add_uma_casa *= 10
        resultado += digito_sozinho * add_uma_casa
        add_uma_casa *= 10
        n = n // 10

    return resultado

# Test the solution
number = 12345
answer = solution(number)
print(answer)  # This should print 1122334455 correctly

#********************************************************************************************************

def solution(n):
    count = 0
    while n > 0:
        digito = n % 10
        n = n // 10
        next = n % 10
        if digito == next:
            count += 1
    return count
        
        
        
number = 11233455
answer = solution(number)
print(answer)  # This should print 3


#********************************************************************************************************

def solution(n):
    product = 1
    has_odd = False
    
    while n > 0:
        digit = n % 10
        if digit % 2 != 0:  # Check if the digit is odd
            product *= digit
            has_odd = True
        n //= 10  # Remove the last digit from n
    
    if not has_odd:
        return 0
    return product

# Example usage
print(solution(43172))  # Output should be 21


