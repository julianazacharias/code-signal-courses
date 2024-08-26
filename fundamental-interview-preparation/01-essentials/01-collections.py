# Defining a list and a string
my_list = [1, 2, 3, 4]
my_string = 'hello'

# Now let's try to change the first element of both these collections
my_list[0] = 100
# Uncommenting the below line will throw an error
# my_string[0] = 'H'  

# Creating a list
fruits = ['apple', 'banana', 'cherry']

# Add a new element at the end
fruits.append('date') # ['apple', 'banana', 'cherry', 'date']

# Inserting an element at a specific position
fruits.insert(1, 'bilberry') # ['apple', 'bilberry', 'banana', 'cherry', 'date']

# Removing a particular element
fruits.remove('banana') # ['apple', 'bilberry', 'cherry', 'date']

# Accessing elements using indexing
first_fruit = fruits[0] # apple
last_fruit = fruits[-1] # date

# Creating a string
greeting_string = "Hello, world!"

# Accessing characters using indexing
first_char = greeting_string[0]  # 'H'
last_char = greeting_string[-1]  # '!'

# Making the entire string lowercase
lowercase_greeting = greeting_string.lower()  # 'hello, world!'

# Define a list and a string
my_list = [1, 2, 3, 4, 5]
my_string = "Hello"

# Slicing: my_list[start:end], `start` inclusive, `end` exclusive
slice_list = my_list[2:4] # [3, 4]
slice_string = my_string[1:3] # "el"

# Concatenation: my_list + another_list
concatenate_list = my_list + [6, 7, 8] # [1, 2, 3, 4, 5, 6, 7, 8]
concatenate_string = my_string + ", world!" # "Hello, world!"

# Repetition: my_list * n # 
repeat_list = my_list * 2 # [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
repeat_string = my_string * 2 # "HelloHello"

# Finding the first occurrence of an element in a list or a string
# Note that if the element is not found, `index` throws an exception
# So we should initially check the existence by the operator `in`,
# Then use the `index` method if it exists using the `if-else` construction.
# If the element is not found, the indices are assigned to `-1`
found_1_in_list = 1 in my_list # Returns: True
found_8_in_list = 8 in my_list # Returns: False
found_in_string = 'l' in my_string.lower() # Returns True
index_1_in_list = my_list.index(1) if found_1_in_list else -1 # Returns: 0
index_8_in_list = my_list.index(8) if found_8_in_list else -1 # Returns: -1
index_in_string = my_string.lower().index('l') if found_in_string else -1 # Returns: 2

# Sorting items in a list
sorted_list = sorted(my_list, reverse=True) # [5, 4, 3, 2, 1]