temperature = 15
if temperature > 20:
    print("Wear light clothes.") # This will print if temperature is over 20.
else:
    print("Bring a jacket.") # This will print otherwise.

#********************************************************************************************************

if temperature > 30:
    print("It's hot outside!") # Prints if temperature is over 30.
elif temperature > 20:
    print("The weather is nice.") # Prints if temperature is between 21 and 30.
else:
    print("It might be cold outside.") # Prints if temperature is 20 or below.

#********************************************************************************************************
numbers = [1, 3, 7, 9, 12, 15]

for number in numbers:
    if number % 2 == 0:
        print("The first even number is:", number) # Prints the first even number.
        break # Stops the loop after printing the first even number.
    print("Number:", number)
# Prints:
# Number: 1
# Number: 3
# Number: 7
# Number: 9
# The first even number is: 12

#********************************************************************************************************

for i in range(6):
    if i == 3:
        continue # Skips the print command for '3'.
    print(i) # Prints the numbers 0 to 5 except 3.
# Prints:
# 0
# 1
# 2
# 4
# 5

#********************************************************************************************************

names = ["Alice", "Bob", "Charlie", "David"]

for name in names:
    if name == "Charlie":
        print("Found Charlie!") # Prints when 'Charlie' is found.
        break # Stops the loop after finding Charlie.

#********************************************************************************************************

temperatures = [18, 22, 30, 35]
i = 0
while i < len(temperatures): # n < 4
    if temperatures[i] > 20:
        print("Temperature", temperatures[i], "is greater than 20.")
        i += 1
        continue # O CONTINUE PULA TUDO QUE VEM DEPOIS VOLTANDO DIRETO PRO LOOP
    print("Temperature", temperatures[i], "might require a jacket.")
    i += 1