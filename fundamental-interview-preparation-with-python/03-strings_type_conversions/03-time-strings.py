time = '12:34:56'
time_parts = [int(part) for part in time.split(":")] #[12, 34, 56]

print(time_parts)

seconds_since_start = time_parts[0] * 3600 + time_parts[1] * 60 + time_parts[2]

print(time_parts[0] * 3600) # 12 * 3600  ------ 1 hour comprises 3600 seconds, so we multiply the number of hours by 3600.
print(time_parts[1] * 60) # 34 * 3600 --------- 1 minute comprises 60 seconds, so we multiply the number of minutes by 60.
print(time_parts[2]) # 56 * 3600 -------------- The count of seconds remains unaltered.

seconds = 37

total_seconds = (seconds_since_start + seconds) % (24 * 3600)

hours, remainder = divmod(total_seconds, 3600)
minutes, seconds = divmod(remainder, 60)

# return f"{hours:02d}:{minutes:02d}:{seconds:02d}"

def solution(time, seconds):
    time_parts = [int(part) for part in time.split(":")]
    seconds_since_start = time_parts[0] * 3600 + time_parts[1] * 60 + time_parts[2] # HORAS + MIN + SEG (tudo em segundos)
    total_seconds = (seconds_since_start + seconds) % (24 * 3600) 
    #  (%) ensures that our total_seconds value doesn't exceed the 
    # total number of seconds in a day (86400 seconds or 24*3600 seconds).
    hours, remainder = divmod(total_seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    # Python's divmod() function ==> which takes two numbers and returns a pair 
    print(f"{hours:02d}:{minutes:02d}:{seconds:02d}")
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"
    #:02d ensures that each time value is a 2-digit number, padding with a 0 if needed.

solution('12:34:56', 37)

# ****************************************************************************************************

def add_seconds_to_times(timePoints, added_seconds):
    resultado = []
    for time in timePoints:
        time_parts = [int(part) for part in time.split(":")]
        seconds_since_start = time_parts[0] * 3600 + time_parts[1] * 60 + time_parts[2]
        total_seconds = (seconds_since_start + added_seconds) % (24 * 3600)
        hours, resto = divmod(total_seconds, 3600)
        minutes, seconds = divmod(resto, 60)
        resultado.append(f"{hours:02d}:{minutes:02d}:{seconds:02d}")
    return resultado
    
    
timePoints = ['10:00:00', '23:30:00']
added_seconds = 3600
 #['11:00:00', '00:30:00']
 
print(add_seconds_to_times(timePoints, added_seconds))

# ****************************************************************************************************

def time_period_length(time_period):
    time_array = time_period.split(" - ")
    seconds_array = []
    for time in time_array:
        time_parts = [int(part) for part in time.split(":")]
        initial_seconds = time_parts[0] * 3600 + time_parts[1] * 60 # IGNORANDO OS SEGUNDOS, QUER APENAS MINUTO NO RESULTADO
        total_seconds = initial_seconds % (24 * 3600)
        seconds_array.append(int(total_seconds))
    
    result = int((seconds_array[1] - seconds_array[0]) / 60)

    return result
    

resposta = time_period_length("12:15:30 - 14:00:00")  # should return 105 (minutes)
print(resposta)



# ****************************************************************************************************



def is_leap_year(year):
    if year % 4 != 0:
        return False
    elif year % 100 != 0:
        return True
    elif year % 400 != 0:
        return False
    else:
        return True

def add_days(date, n):
    year, month, day = map(int, date.split('-'))
    days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    while n > 0:
        if is_leap_year(year):
            days_in_month[1] = 29
        else:
            days_in_month[1] = 28
        
        remaining_days_in_month = days_in_month[month - 1] - day  # days left in the current month
        
        if n <= remaining_days_in_month:
            day += n
            n = 0
        else:
            n -= remaining_days_in_month + 1
            day = 1
            month += 1
            if month > 12:
                month = 1
                year += 1
    
    return f"{year:04d}-{month:02d}-{day:02d}"
        
   
    
date = '1999-01-01' # YYYY-MM-DD
# n = 365
n = 1000

#calculate the date after adding the given number of days
print(add_days(date, n))


# ****************************************************************************************************
