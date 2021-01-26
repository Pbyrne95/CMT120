# Exercise 1
def reduceFraction(num, den):
    """
    This Function takes two numbers and finds the smallest Fraction
    """

    div = 2
    # runs while div is then the smalest number between num and div 
    while div <= \
        min(num,den):
        if num % div == 0 and den % div == 0: # finds all common factors and resassings num and div each time
            num = num/div 
            den = den/div
        else:  # if no common factors then increment div by one 
            div+=1
    return (int(num), int(den)) # return the numbers as tuple 



# Exercise 2
def isMagicDate(day, month, year):
    """
    This function takes the day times by the month and
    checks if that == to the last two digits of the year
    """
    YY = year % 100 ## removes the last two digits in the year
    return day*month == YY ## check if the last two digits can be reached by multiplying dd * mm 
    


# Exercise 3
def sublist(l):
    """
    Take any list and return all possible sublist in order of length    
    """
    count = 0 
    startingIndex = len(l)
    endIndex = len(l)
    returnThis = []
    while count <= \
        len(l):
        returnThis.append(l[startingIndex:endIndex])

        if endIndex == len(l):
            count+=1
            startingIndex = 0 
            endIndex = count 
        else:
            startingIndex+=1 
            endIndex+=1
    return returnThis


# Exercise 4
def pigLatin(word):
    """
    Takes a word and translates it into pigLatin
    """

    # Defining variables that will be used throughout the algorhymn 
    capCheck = word[0]
    iter_word = word.lower()
    
    vowels,specialChars = ['a','e','i','o','u'],['!','#','.','*','?'] #Defining a list contain vowels and special charecters to be checked at the end of the algo

    # Defining a list and a variable alongside boolean values which alter their state after the for loop
    vowel_checker = []
    return_word = ''
    vowel_bool = capCheck in vowels
    capCheckBool = capCheck == word[0].upper()

     
    if vowel_bool == False: # initiating a for loop in order to define how the word is changed
        for index,value in enumerate(iter_word):

            if value in vowels:
                vowel_checker.append(index)
       
        first_vowel = min(vowel_checker)  # finds the first vowel and used that to change the state of the word
        return_word = iter_word[first_vowel:] + iter_word[:first_vowel] + 'ay'
    else:
        return_word = iter_word + 'way'

    
    splitchars = "".join([i for i in return_word if i not in specialChars])
    specChars = "".join([i for i in return_word if i in specialChars]) # splits the letters and finds any specials charecters 

   
    if capCheckBool:  # checks is the first letter was a capital 
        return splitchars[0].capitalize() + splitchars[1:] + specChars
    else:
        return splitchars + specChars


# Exercise 5
def morseCode(message):
    """
    takes in any input and returns what that message would be in Morsecode 
    """
    # Initates the variables to return 
    return_string  = ''
    space = ' ' # a check for white space
    message = message.upper() #Changing the input to match what is in the dictionary
    m_dict = { 'A':'.-', 'B':'-...',
                    'C':'-.-.', 'D':'-..', 'E':'.',
                    'F':'..-.', 'G':'--.', 'H':'....',
                    'I':'..', 'J':'.---', 'K':'-.-',
                    'L':'.-..', 'M':'--', 'N':'-.',
                    'O':'---', 'P':'.--.', 'Q':'--.-',
                    'R':'.-.', 'S':'...', 'T':'-',
                    'U':'..-', 'V':'...-', 'W':'.--',
                    'X':'-..-', 'Y':'-.--', 'Z':'--..',
                    '1':'.----', '2':'..---', '3':'...--',
                    '4':'....-', '5':'.....', '6':'-....',
                    '7':'--...', '8':'---..', '9':'----.',
                    '0':'-----'}

    for letter in message: # looping through the dictionary 
        if letter not in m_dict and letter in space: # if the letter is not in dict and is white space -> skip iteration
            continue
        if letter in m_dict and letter not in space: # if letter is in the iteration and not white space add to the return_String
            return_string += m_dict[letter] + ' '


    return  return_string.strip() # retrun the retrunString and remove white spaces 


# Exercise 6
def int2Text(num):
    """
    Takes in any interagr below 1000 and returns that number as text
    """
    # initializing three different dictionaries with three different number types 
    num2words1 = {0:"",1: 'one', 2: 'two', 3:'three', 4: 'four', 5: 'five',
                6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten'}
    teens =    {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
                15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
    num2words2 = {0:"",1:'ten', 2:'twenty', 3:'thirty', 4:'forty', 5:'fifty', 6:'sixty', 7:'seventy', 8:'eighty', 9:'ninety'}

    #changing the input into a string in order to split the string 
    check = str(num)
    return_string = ' '

    # Depening on the length of the string -> will depend on which dictinariy it itterates through 
    if len(check) == 1: 
        if check == '0':
            return_string ='zero' # as zero is not in the dictionary this loop check for zero and returns if the number is zeros
        
        else:
            return_string = num2words1[int(check)]
        
    # checks if the input number length is two 
    if len(check) == 2:
        if int(check) >= 10 and int(check) <= 19: # a check to see if the number in the teens dictionary
            return_string = teens[int(check)] # iterating through the teens dictionary 
                
        else: # iterating through the other dictionaries and combining the output to the retrun string 
            fristNum = check[0] 
            secondNum = check[1]
            return_string = num2words2[int(fristNum)] + ' ' + num2words1[int(secondNum)]
        
        
        
    if len(check) == 3: # if the number length is three take part in the various loops 
        if check[1:] =='00':
            return_string = num2words1[int(check[0])] + ' ' + 'hundred'  # if the number is 'something' hundred iterate through first loop and add hundredd to the string 
        
        elif int(check[1:]) >= 10 and int(check[1:]) <= 19:
            return_string = num2words1[int(check[0])] + ' hundred ' + teens[int(check[1:])] # if the second part of number is in teens then iterate through first and second dict 
        
        else: # iterate through the first dicitionary add the string 'hundred' and iterate through the other apprioate dicitonaries
            return_string = num2words1[int(check[0])] + ' hundred ' + num2words2[int(check[1])] + ' ' + num2words1[int(check[2])]
        
    return return_string 

# Exercise 7
def missingComment(filename):
    """
    Takes in a files and retuns a list of functionNames that do have comments above them 
    """

    count = 0 # tracking how many lines appear in the file 
    iter_list = [] #used to iterate through the file and gather each line into a iist 

    # boolean values which will be used in a later loop 
    functionCheck = 'def'
    commentCheck = '#'

    # opening the file using a content manager 
    with open(filename, "r") as file:
        lines_list = file.readlines()
       
        for line in lines_list:
            count += 1
            #look for lines that start with "def "
            if line[0:3] == functionCheck:
                # check is the line above has a comment
                if(lines_list[count-2][0] != commentCheck):
                    iter_list.append(line[4:-2].split(' '))
    return_list = []

    # below loop just look for the function name 
    if iter_list != []: # a check here to prevent any unnessasery computation 
        for elem in iter_list:
            for functions in elem:
                for index,funcName in enumerate(functions):
                    if funcName == '(': 
                        return_list.append(functions[:index]) # when the index of ( append this to the return list
    return return_list 



# Exercise 8
def consistentLineLength(filename, length):
    """
    Takes in any file with text and returns it to a fixed spaced in a list 
    """
    # Defining variables to referenced throughout the programme 
    list_of_lines = []
    indexLength = length + 1
    # Opens the files and puts it into a list  as single string 
    with open(filename, "r") as text_file:
        text_list = text_file.read().splitlines()
        text_string = " ".join(text_list) 

        # iterates through the joined string using the length as index 
        while len(text_string) \
            > length:
            line_length = text_string[:indexLength].rfind(' ') 
            list_of_lines.append(text_string[:line_length])
            text_string = text_string[line_length + 1:]

    # appening the result of the loop to a list 
    list_of_lines.append(text_string)
    
    return list_of_lines


# Exercise 9
def knight_moves(start_pos):
    legit_moves=[]
    columns=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    rows=['1','2','3','4','5','6','7','8']

    # identify column and row id from start pos
    start_pos.split()
    column_search,row_search = start_pos[0],start_pos[1]
    column_idx=0
    row_idx=0
    for idx in range(len(columns)):
        if columns[idx] == column_search:
            column_idx = idx
        if rows[idx] == row_search:
            row_idx = idx

        
    # Defines where you can not move in boolean values 
    has_double_left= column_idx - 2 >=0
    has_double_right = column_idx + 2 < 8
    has_double_up = row_idx + 2 < 8
    has_double_down = row_idx - 2 >=0
    has_single_up = row_idx + 1 < 8
    has_single_down = row_idx -1 >=0
    has_single_left = column_idx -1 >=0
    has_single_right = column_idx + 1 < 8

    # check which boolean value is True and produces a new move if so and append it to legit_moves

    # considers all single_up of single_down moves 
    if has_single_up and has_double_left:
            left_move_up =columns[column_idx-2]+ rows[row_idx+1]
            legit_moves.append(left_move_up)
    if has_single_down and has_double_left:
            left_move_down =  columns[column_idx-2]+ rows[row_idx-1]
            legit_moves.append(left_move_down)
    #considers all single_left moves 
    if has_single_left and has_double_up:
        north_move_left = columns[column_idx-1] + rows[row_idx+2]
        legit_moves.append(north_move_left)
    if has_single_right and has_double_up:
       south_move_left= columns[column_idx+1] + rows[row_idx+2]
       legit_moves.append(south_move_left)
    # considers all single_right moves 
    if has_single_right and has_double_down:
       double_right_single_up = columns[column_idx + 1] + rows[row_idx - 2]
       legit_moves.append(double_right_single_up)
    if has_single_left and has_double_down:
       double_up_single_left = columns[column_idx - 1] + rows[row_idx - 2]
       legit_moves.append(double_up_single_left)

    #considers all possible double right_moves
    if has_double_right and has_single_up:
        double_right_single_up = columns[column_idx + 2] + rows[row_idx + 1]
        legit_moves.append((double_right_single_up))
    if has_double_right and has_single_down:
        double_right_single_down = columns[column_idx + 2] + rows[row_idx -1]
        legit_moves.append(double_right_single_down)
    # return a list of legit moves 
    return legit_moves

def knight(p1, p2, num_moves):
    """
    function which uses a stack to track all legal moves from start to end using a stack 
    """
    # if p1 is equal to p2 it will return True 
    if p1 == p2:
        return True 
        
    # deffining key variables throughout the function 
    knights_tour=[]
    moves_stack=[]
    starting_point = p1
    pos_moves = knight_moves(starting_point)
    moves_stack.append(pos_moves)
    knights_tour.append(p1)
    # loop runs while the stack is not empty -> return false is the stack is empty
    while len(moves_stack)\
        >0: 
        current_no_moves = len(moves_stack)
        if p2 in pos_moves:
            return True

        # if num_moves less than target num moves add new moves_level to stack
        if current_no_moves < num_moves and len(moves_stack[-1]) > 0:
            # choose astartin point and get the moves.
            starting_point = moves_stack[-1].pop()
            # add the new starting point to starting points
            knights_tour.append(starting_point)
            # check the new moves and make sure no previous starting points
            pos_moves = knight_moves(knights_tour[-1])
            if p2 in pos_moves:
                print(knights_tour)
                return True
            candidate_moves=[]
            for potential_move in pos_moves:
                if potential_move not in knights_tour:
                    candidate_moves.append(potential_move)
            moves_stack.append(candidate_moves)
        # if the last point in the stack empty pop off that list 
        else: 
            moves_stack.pop()
            knights_tour.pop()
    return False


# Exercise 10
def warOfSpecies(environment):
    """
    Takes in an initial envirnment and alters each position depending on what is in each position 
    """
    # defining key variables which will be used throughout the function
    iter_string = "".join(environment)
    final_string = ""
    return_env_list = []
    amount_of_X = "X"
    amount_of_O = "O"
    amount_of_dot = "."
 
    # defining the height and width of the string -> this will depend how long the string actually runs for 
    stackHeight = 0
    stackWidth = 0
    for countWidth in (environment):
        stackWidth += 1
        for countHeight in countWidth:
            stackHeight += 1
    stackHeight = int(stackHeight / stackWidth)

    def is_most_common_neighbour():
        """
        Helper function used inside this function as the variables are not global -> compares weighting of the species in each spacing 
        """
        if species_x_neighbours > species_o_neighbours:
            return amount_of_X
        elif species_o_neighbours > species_x_neighbours:
            return amount_of_O
        else:
            return amount_of_dot

 
    # initiates a loop with a sequence starting from 0 to the length of the enivirnment 
    for idxCheck in range (len(iter_string)):
        species_x_neighbours = 0
        species_o_neighbours = 0
        empty_neighbours = 0
    # Top-left neighbour
        if idxCheck > stackHeight and idxCheck != (stackHeight*2)-1:
            if iter_string[idxCheck-(stackHeight+1)] == amount_of_dot:
                empty_neighbours += 1
            elif iter_string[idxCheck-(stackHeight+1)] == amount_of_X:
                species_x_neighbours += 1
            elif iter_string[idxCheck-(stackHeight+1)] == amount_of_O:
                species_o_neighbours += 1

 
    # below blocks of code identofy the appriopate weighting of each part of the stringand increment the species variables 
    # Top neighbour
        if idxCheck not in [0,stackHeight,stackHeight*2]:
            if iter_string[idxCheck-1] == amount_of_dot:
                empty_neighbours += 1
            elif iter_string[idxCheck-1] == amount_of_X:
                species_x_neighbours += 1
            elif iter_string[idxCheck-1] == amount_of_O:
                species_o_neighbours += 1
    # Top-right neighbour
        if idxCheck < stackHeight*2 and idxCheck not in [0,stackHeight]:
            if iter_string[idxCheck+(stackHeight-1)] == amount_of_dot:
                empty_neighbours += 1
            elif iter_string[idxCheck+(stackHeight-1)] == amount_of_X:
                species_x_neighbours += 1
            elif iter_string[idxCheck+(stackHeight-1)] == amount_of_O:
                species_o_neighbours += 1
    # Left neighbour
        if idxCheck > stackHeight-1:
            if iter_string[idxCheck-stackHeight] == amount_of_dot:
                empty_neighbours += 1
            elif iter_string[idxCheck-stackHeight] == amount_of_X:
                species_x_neighbours += 1
            elif iter_string[idxCheck-stackHeight] == amount_of_O:
                species_o_neighbours += 1
    # Right neighbour
        if idxCheck < stackHeight*2:
            if iter_string[idxCheck+stackHeight] == amount_of_dot:
                empty_neighbours += 1
            elif iter_string[idxCheck+stackHeight] == amount_of_X:
                species_x_neighbours += 1
            elif iter_string[idxCheck+stackHeight] == amount_of_O:
                species_o_neighbours += 1
    # Bottom-left neighbour
        if idxCheck > stackHeight-1 and idxCheck not in [(stackHeight*2)-1,(stackHeight*stackWidth)-1]:
            if iter_string[idxCheck-(stackHeight-1)] == amount_of_dot:
                empty_neighbours += 1
            elif iter_string[idxCheck-(stackHeight-1)] == amount_of_X:
                species_x_neighbours += 1
            elif iter_string[idxCheck-(stackHeight-1)] == amount_of_O:
                species_o_neighbours += 1
    # Bottom neighbour
        if idxCheck not in [stackHeight-1,(stackHeight*2)-1,(stackHeight*stackWidth)-1]:
            if iter_string[idxCheck+1] == amount_of_dot:
                empty_neighbours += 1
            elif iter_string[idxCheck+1] == amount_of_X:
                species_x_neighbours += 1
            elif iter_string[idxCheck+1] == amount_of_O:
                species_o_neighbours += 1
     # Bottom-right neighbour
        if idxCheck < (stackHeight*2)-1 and idxCheck not in [stackHeight-1,(stackHeight*stackWidth)-1]:
             if iter_string[idxCheck+(stackHeight+1)] == amount_of_dot:
                 empty_neighbours += 1
             elif iter_string[idxCheck+(stackHeight+1)] == amount_of_X:
                 species_x_neighbours += 1
             elif iter_string[idxCheck+(stackHeight+1)] == amount_of_O:
                 species_o_neighbours += 1
         
        # final block which chnges the state of the string calling on the helper function 
        
        if iter_string[idxCheck] == amount_of_dot and species_x_neighbours >= 2 or iter_string[idxCheck] == amount_of_dot and species_o_neighbours >= 2:
            final_string += is_most_common_neighbour()
        elif iter_string[idxCheck] != amount_of_dot and species_o_neighbours + species_x_neighbours > 6:
            final_string += amount_of_dot 
        elif iter_string[idxCheck] == amount_of_X and species_x_neighbours < 3:
            final_string += amount_of_dot
        elif iter_string[idxCheck] == amount_of_X and species_x_neighbours < species_o_neighbours:
            final_string += amount_of_dot
        elif iter_string[idxCheck] == amount_of_O and species_o_neighbours < 3:
            final_string += amount_of_dot
        elif iter_string[idxCheck] == amount_of_O and species_o_neighbours < species_x_neighbours:
            final_string += amount_of_dot
        else:
            final_string += iter_string[idxCheck]

    while \
        final_string:
        return_env_list.append(final_string[:stackHeight])
        final_string = final_string[stackHeight:]

    return return_env_list
