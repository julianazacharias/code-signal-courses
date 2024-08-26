friends = ['Alice', 'Bob', 'Charlie', 'Daniel']
# `friend` is the loop variable, taking each name in the `friends` list
for friend in friends:
    # for each `friend`, this line is executed
    print(f"Hello, {friend}! Nice to meet you.")
"""
Prints:
Hello, Alice! Nice to meet you.
Hello, Bob! Nice to meet you.
Hello, Charlie! Nice to meet you.
Hello, Daniel! Nice to meet you.
"""

#********************************************************************************************************

# `num` runs through each number in the range of 5
for num in range(5):
    # This line will print numbers from 0 to 4
    print(num)

    num = 0

#********************************************************************************************************
# The loop keeps running until num is greater than or equal to 5
while num < 5:
    print(num)
    # increase num by 1 each iteration
    num += 1

#********************************************************************************************************

    # list of fruits
fruits = ['apple', 'banana', 'cherry']
# `fruit` stands for each fruit in the `fruits` list
for fruit in fruits:
    print(fruit) # prints each fruit

    word = 'hello'
# `letter` is each individual character in the `word`
for letter in word:
    print(letter) # prints each letter in 'hello'

#********************************************************************************************************

# List of numbers
numbers = [1, 2, 3, 4, 5]
total = 0
# `num` is each number in `numbers`
for num in numbers:
    total += num # add each number in the list
print(total) # prints the total sum

#********************************************************************************************************

# string
text = 'hello'
vowel_count = 0
# `letter` is each character in `text`
for letter in text:
    # If a vowel letter is found, increment the count
    if letter in 'aeiou':
        vowel_count += 1
print(vowel_count) # prints the count of vowels

#********************************************************************************************************

fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon']
# Initialize index
index = 0
# Iterate using a while loop
while index < len(fruits):
    print(fruits[index])
    index += 1  # Move to the next index

#********************************************************************************************************

# This code will create a simplified fruit salad with the provided fruits
fruits = ['apple', 'banana', 'cherry', 'date']
fruits_in_salad = ""

index = 0


# TODO: Create a while loop that assembles a string of fruit names separated by spaces, without adding a space after the last fruit
# Hint: Consider using a conditional to determine when to add a space

while index < len(fruits):
    if index != len(fruits) -1:
        fruits_in_salad += fruits[index] + " "
        print(fruits[index])
    else: 
        fruits_in_salad += fruits[index]
    index += 1

print(fruits_in_salad)  # Output the fruits in the salad

#********************************************************************************************************

# We have a set budget for accommodations over the weekend
accommodation_budget = 300
hotel_costs = {"Hotel A": 130, "Hotel B": 120, "Hotel C": 85}

total_cost = 0
chosen_hotels = []

# TODO: Let's pick hotels for our weekend stay without exceeding our budget
while total_cost < accommodation_budget and hotel_costs:
    hotel, cost = hotel_costs.popitem()
    if total_cost + cost <= accommodation_budget:
        total_cost += cost
        chosen_hotels.append(hotel)  # Add the hotel to the list of chosen hotels

print("Hotels chosen for the weekend stay:", chosen_hotels)


#********************************************************************************************************

# We might want to do some sightseeing in each country. For each country, we have a list of sights.
country_sights = {"France": ["Eiffel Tower", "Louvre Museum"],
                  "Italy": ["Colosseum", "Piazza San Marco"],
                  "Spain": ["Park Güell", "The Alhambra"],
                  "Japan": ["Mt. Fuji", "Fushimi Inari Taisha"]}

for country, sights in country_sights.items():
    print(f"***In {country}, I want to see:")
    for sight in sights:
        print(sight)



#********************************************************************************************************

# Planning a cultural tour with events for each destination.
destination_events = {
    "France": ["Cannes Film Festival", "Bastille Day Fireworks"],
    "Italy": ["Venice Carnival", "Florence Wine Festival"],
    "Spain": ["La Tomatina", "Running of the Bulls"],
    "Japan": ["Sapporo Snow Festival", "Cherry Blossom Viewing"]
}

for destination, events in destination_events.items():
    print(f"Events to attend in {destination}:")
    for event in events:
        print(f"- {event}")

#********************************************************************************************************

# Let's calculate the total and average travel cost for a selection of countries.

chosen_countries = ["France", "Italy", "Spain"]  # This list may be a result of former selection logic

# Predefined costs for each country based on previous examples
country_costs = {"France": 1000, "Italy": 800, "Spain": 900, "Japan": 1200}

total_trip_cost = 0
for country in chosen_countries:
    total_trip_cost += country_costs[country]  # Summing up the cost for each chosen country

average_cost_per_country = total_trip_cost / len(chosen_countries)  # Calculating the average cost

# Display the total cost and the average cost per country
print(f"The total cost of the trip is: ${total_trip_cost}")
print(f"The average cost per country is: ${average_cost_per_country:.2f}")

#********************************************************************************************************

# Define a function to calculate the trip cost.
def calculate_trip_cost(countries, country_costs):
    total_cost = 0
    for country in countries:
        total_cost += country_costs[country]
    return total_cost

# Presuming the chosen_countries and their costs
chosen_countries = ['France', 'Italy', 'Spain']
country_costs = {'France': 1200, 'Italy': 950, 'Spain': 800}

# Call the function
trip_cost = calculate_trip_cost(chosen_countries, country_costs)
print(f"The total cost of the trip is: ${trip_cost}")

#********************************************************************************************************

# Global list of countries in the travel wishlist
travel_wishlist = ["Greece", "Japan"]

def add_to_wishlist(country):
    # TODO: Add the country to the travel_wishlist using the append method
    travel_wishlist.append(country)

add_to_wishlist("Canada")
print(travel_wishlist)  # This should print ["Greece", "Japan", "Canada"] after you add the missing code.

# --------------- ----------------------- ---------------------- ---------------- ---------------------

# Define multiple functions and use them together to solve a problem.
def choose_countries(budget, costs):
    total_cost = 0
    chosen_countries = []
    for country, cost in costs.items():
        if total_cost + cost > budget:
            break
        total_cost += cost
        chosen_countries.append(country)
    return chosen_countries

def calculate_cost(countries, costs):
    total_cost = 0
    for country in countries:
        total_cost += costs[country]
    return total_cost

# Assuming sample data for budget and costs for demonstration
travel_budget = 5000
country_costs = {'France': 1200, 'Italy': 1500, 'Spain': 800, 'Germany': 900, 'Greece': 1100}

chosen_countries = choose_countries(travel_budget, country_costs)
trip_cost = calculate_cost(chosen_countries, country_costs)

print(f"The countries included in the trip are: {chosen_countries}")
print(f"The total cost of the trip is: ${trip_cost}")