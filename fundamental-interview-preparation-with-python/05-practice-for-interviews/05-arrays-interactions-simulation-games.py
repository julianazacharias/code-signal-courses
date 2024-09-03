def solution(balloons):
    n = len(balloons)
    steps = 0
    while True:
        steps += 1
        new_balloons = balloons.copy()
        for i in range(n):
            share = balloons[i] // 2  # Balloons to share
            new_balloons[i] -= share  # Decrease balloons of current house.
            new_balloons[(i + 1) % n] += share  #  O "%"" garante que vai pra PŔIMEIRA CASA Increase balloons of next house.
        if new_balloons == balloons:
            break
        balloons = new_balloons
    return steps

balloons = [4, 1, 2]
print(solution(balloons))

#  O "%"" garante que vai pra PŔIMEIRA CASAIncrease balloons of next house.
# exemplo se posição 4 for a ultima, os balões tem que ir pra casa 1 (4 % 4 = 1)

# *******************************************************************************************

def solution(s):
    removed = []
    string = list(s)
    
    while len(string) > 1:
        new_string = []
        i = 0
        while i < len(string):
            if i + 1 < len(string):
                if string[i] <= string[i + 1]:
                    removed.append(string[i])
                    new_string.append(string[i + 1])
                else:
                    removed.append(string[i + 1])
                    new_string.append(string[i])
                i += 2
            else:
                new_string.append(string[i])
                i += 1
        string = new_string
        
    removed.append(string[0])
    return removed

# Example usage
s = "BCAAB"
print(solution(s))  # Expected: ['B', 'A', 'A', 'B', 'C']


# *******************************************************************************************

def tournament(knights):
    rounds = 1
    points = []
    
    if len(knights) <= 1:
        return 0
        
    while len(knights) > 1:
        for i in range(len(knights)):
            if i == len(knights)-1:
                point = knights[i] - knights[0]
            else:
                point = knights[i] - knights[i + 1]

            if point > 0:
                points.append(point)
            
        knights = points
        points = []
        if len(knights) > 1:
            rounds += 1
        else:
            return rounds
   
   
knights = [100, 50, 30, 20]
print(tournament(knights))


# *******************************************************************************************

def house_game(houses):
    # Convert numbers to strings for easier manipulation
    houses = [str(house) for house in houses]
    n = len(houses)
    l = max(len(house) for house in houses)  # Maximum length of house numbers
    
    for i in range(l):
        new_houses = houses.copy()  # Create a copy
        for j in range(n):
            if len(houses[j]) >= i + 1:
                # Transfer the i-th digit from right
                digit = houses[j][-i-1]
                new_houses[j] = new_houses[j][:len(new_houses[j])-i-1] + new_houses[j][len(new_houses[j])-i:]  # Remove the digit
                # Place the digit in the front of the next house
                new_houses[(j + 1) % n] = digit + new_houses[(j + 1) % n]
        if new_houses == houses:
            break
        houses = new_houses
    
    return [int(house) for house in houses]

# *******************************************************************************************
# *******************************************************************************************