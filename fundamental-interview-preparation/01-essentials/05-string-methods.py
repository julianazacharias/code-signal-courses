sentence = 'Python is fun!'
words = sentence.split() # no delimiter provided, splitting by whitespace
print(words)  # Output: ['Python', 'is', 'fun!']

data = 'John,Doe,35,Engineer'
info = data.split(',') # provided a ',' delimiter
print(info)  # Output: ['John', 'Doe', '35', 'Engineer']

words = ['Programming', 'with', 'Python', 'is', 'exciting!']
sentence = ' '.join(words)
print(sentence)  # Output: 'Programming with Python is exciting!'

name = '    John Doe    \t\n'
name = name.strip()
print(name)  # Output: 'John Doe'

# Furthermore, we can use lstrip() and rstrip() 
# to remove spaces, tabs, and newline characters from the left and right of a string, respectively:

name = '    John Doe    '
print(name.lstrip())  # Output: 'John Doe    '
print(name.rstrip())  # Output: '    John Doe'

num_str = '123'
print(type(num_str)) # Output: <class 'str'>
num = int(num_str)
print(type(num)) # Output: <class 'int'>

name = 'John'
age = 25
print('My name is ' + name + ', and I am ' + str(age) + ' years old.')
# Prints: My name is John, and I am 25 years old.

numbers = '1,2,3,4,5'
# Convert string to a list of numbers
num_list = [int(number) for number in numbers.split(',')]
print(num_list) # Output: [1, 2, 3, 4, 5]
# Calculate average
average = sum(num_list) / len(num_list)
print('The average is', average)  # Output: The average is 3.0

#******************************************************************************

astronauts_data = "Buzz Aldrin, 1930;Yuri Gagarin, 1934;Valentina Tereshkova, 1937"

# Splitting the string into a list of astronaut info and stripping any whitespace
astronauts_list = astronauts_data.split(";") #SEPARAR POR ;
print(astronauts_list)
cleaned_astronauts = []

for astronaut in astronauts_list:
    print(astronaut)
    name, year = astronaut.split(",")
    # cleaned_astronauts.append(name.strip() + " " + year.strip())  # Modify this line to use the join() method
    cleaned_data = ' '.join(map(lambda x: x.strip(), astronaut.split(',')))
    cleaned_astronauts.append(cleaned_data)

print(cleaned_astronauts)  # ['Buzz Aldrin 1930', 'Yuri Gagarin 1934', 'Valentina Tereshkova 1937']

#******************************************************************************

# Employee Information Management System
# A list of employee data
employee_data = "Name: John Doe, Age: 30, Role: Engineer"

# employee_info = employee_data.split()
# print(employee_info)

# Use strip to clean data and join to create a string with newlines
# cleaned_data = "\n".join(info.strip() for info in employee_info)

cleaned_data = "\n".join(map(lambda x: x.strip(), employee_data.split(',')))
print(cleaned_data)


#******************************************************************************


# A tiny piece of code that represents an HR Employee Data Management system.
# This code will manage a simple string that contains employee data.

employee_data = "Alice,Developer,30|Bob,Manager,45|Charlie,Designer,25"
# Splitting the employee data by '|' to separate each employee's info
employee_list = employee_data.split('|')
print(employee_list)

# For each employee, create a formatted string with stripped details and age eligibility for a junior position
for employee in employee_list:
    # print(employee)
    name, role, age = employee.split(',')
    if(int(age) < 40):
        eligibility = "elegivel"
    else:
        eligibility = "inelegivel"
    #Parse the employee data and add eligibility note if applicable
    print(f"Name: {name} - Role: {role} - Age: {age} - {eligibility}")
    # Example: Name: Alice - Role: Developer - Age: 30 - Eligible for junior position


#******************************************************************************


# This function processes astronaut names and planets from a string 
# then prints out a neat summary of who is exploring which planet.
def process_astronaut_data(data):
    astronaut_details = data.split(';') # SEPARA POR VIRGULA NUMA LISTA
    for detail in astronaut_details: #PERCORRE CADA ELEMENTO
        #Extract the astronaut name and explored planet from the detail, strip away the whitespace.
        detail = detail.strip()
        name, planet = detail.split("-")
        #Print the statement in the format "Astronaut [name] is exploring [planet]."
        print(f"Astronaut {name} is exploring {planet}.")
        
# String containing astronaut names and planets, separated by semicolons.
# Each astronaut-planet pair is separated by a dash.
astronaut_data = "    Neil-Mars; Buzz-Jupiter; Sally-Venus    "
process_astronaut_data(astronaut_data)



#******************************************************************************

# Space exploration crew members' data, containing their names, missions, and roles
crew_data = "Neil,Armstrong,Apollo 11,C;Buzz,Aldrin,Apollo 11,P;Michael,Collins,Apollo 11,CM"

#Split the crew_data string into a list of individual crew member information using the appropriate delimiter
members = crew_data.split(";")


# Iterate over the list of crew member data
    # For each member, split their data string using commas as delimiters
    # Print the crew member's details in a formatted string

print(members) 

for member in members:
    name, surname, ship, code = member.split(",")
    print(f"{name} {surname} {ship} {code}")

# Expected output:
# Neil Armstrong Apollo 11 C
# Buzz Aldrin Apollo 11 P
# Michael Collins Apollo 11 CM