// Exercise 1
function reduceFraction(num, den) {
    let div = 2; // Starting the divisor at two to make the iteraiton quciker
    if(num*2 === den){ // checking if the fraction is a half before the iterartion starts 
        return [1,2];
    }
    // iterating through the number to check for lowest common divisor 
    else { 
        while(div < Math.min(num,den)){
        if(num % div === 0 && den % div === 0){ // checking for common multiples 
            num = num/div; // reasinging num,div as each new div is found 
            den = den/div;
            
        }
        else {
            div++; // if a common number is not found increment div
        }
    }
    }
    // return num and den as an array 
    return [num,den];
}



// Exercise 2
function isMagicDate(day, month, year) {
    // takes the last two numbers away from year

    let checker = year % 100;
    // check those numbers to the desired output 

    if(day * month == checker){
        return true;
    }else {
        return false;
    }
}


// Exercise 3
function sublist(lst) {
    // takes any list and returns all the possible sublists that are in the array 
    let count = 0; 
    let startIndex = lst.length; 
    let endIndex = lst.length;  
    let returnThis = []; 

    while(count <= lst.length){
        returnThis.push(lst.slice(startIndex,endIndex));      
        if(endIndex == lst.length){
            count++;
            startIndex = 0;
            endIndex = count;
        }
        else{
            startIndex++; 
            endIndex++;
        } 
    }
    return returnThis;
}



// Exercise 4
function pigLatin(word) {
    //Takes a word and translates it into pigLatin

    // Defining variables that will be used throughout the algorhymn 
    let capCheck = word.charAt(0);
    let iter_word = word.toLowerCase();
    let leng =  word.length - 1;

    //Defining a list contain vowels and special charecters to be checked at the end of the algo
    const vowels = ['a','e','i','o','u'];
    const specialChars = ['!','#','.','*','?'];

    let vowel_checker = [] 
    let return_word = ''
    let bool = vowels.includes(iter_word[0]);

    // below block removes any special chars from the iterword
    let iterWordCheck = iter_word.split('');
    let replaceIndex = ''; 
    for(let i = 0; i < iterWordCheck.length; i++){
        if(specialChars.includes(iterWordCheck[i])){
            replaceIndex = i.toString();
            iter_word = iter_word.replace(iter_word[Number(replaceIndex)],'');
        }
    }
     
    // initiating a for loop in order to define how the word is changed
    if(bool === false){    
        for(let index = 0; index < iter_word.length; index++){ 
                if(vowels.includes(iter_word[index])){
                     vowel_checker.push(index);   
                }
            
            let index_vowel = Math.min(...vowel_checker);
            return_word = iter_word.slice(index_vowel,leng+1)  + iter_word.slice(0,index_vowel) + 'ay';    
            }
        }
    else {
        return_word = iter_word + 'way';
    }

    // checks if the first letters is in uppercase 
    if(capCheck === word.charAt(0).toUpperCase()){
        return_word = return_word.charAt(0).toUpperCase() + return_word.slice(1);
    }
    // below loop checks for special charecters in the initial input 
    let specialCharCheck = word.split('');
    let returnSpecialChar = '';
    for(let i = 0; i < specialCharCheck.length; i++){
        if(specialChars.includes(specialCharCheck[i])){
            returnSpecialChar = specialCharCheck[i];
        }

    }

    return return_word + returnSpecialChar;
};



// Exercise 5
function morseCode(message) {
    // takes any input as test and returns the morse code value associated with that 
    let check = 0;
    let return_message = []; // defining variable to return 
    let funcMessage = message.toUpperCase(); // chaing the letters un the original message to Uppercase
    // the object which contains more code nest to the corresponding letter
    let m_dict = { 'A':'.-', 'B':'-...',
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
    '0':'-----'};


    for(let i = 0; i < funcMessage.length; i++){
       for(const elem of Object.keys(m_dict)){ // iterating through the keys of dictionaries 
           if(elem === funcMessage[i]){ // if the letter is a match increment check and alter the return message 
               check ++;
               return_message.push(m_dict[funcMessage[i]] + ' ');
           }
           
           
       }
    }
    let return_string = return_message.join('') // change the list to a string 
    return return_string.trim(); //.trim() to remove the whitespace
}





// Exercise 6
function int2Text(num) {
    // takes any interger below 1000 and returns that number as text 

    const num2words1 = {0:"",1: 'one', 2: 'two', 3:'three', 4: 'four', 5: 'five',
                6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten'}
    const teens =    {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
                15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
    const num2words2 = {0:"",1:'ten', 2:'twenty', 3:'thirty', 4:'forty', 5:'fifty', 6:'sixty', 7:'seventy', 8:'eighty', 9:'ninety'}

    let check = num.toString();
    let return_string = ' '
    if(check.length == 1){
        if(check === '0'){
            return_string ='zero';
        }
        else{
            return_string = num2words1[Number(check)];
        }
    }
    if(check.length === 2){
        if(Number(check) >= 10 && Number(check) <= 19){
            for (const entry of Object.keys(teens)){
                if(entry === check){
                    return_string = teens[Number(check)];
                }
        }
        }
        else{
            let fristNum = check.split('')[0];
            let secondNum = check.split('')[0];
            return_string = num2words2[Number(fristNum)] + ' ' + num2words1[Number(secondNum)];
        }
        }
        
    if(check.length === 3){
        if(check.slice(1)==='00'){
            return_string = num2words1[Number(check.charAt(0))] + ' ' + 'hundred';
        }
        else if(Number(check.slice(1) >= 10 && Number(check.slice(1) <= 19))) {
            return_string = num2words1[Number(check.charAt(0))] + ' hundred ' + teens[Number(check.slice(1))];
        }
        else{
            return_string = num2words1[Number(check.charAt(0))] + ' hundred ' + num2words2[Number(check.charAt(1))] + ' ' + num2words1[Number(check.charAt(2))]
        }
    }
       
        return return_string
    }
    

    



function missingComment(filename) {
    // takes a file as input and returns all function names that do not have a comment above them

    let fs = require('fs');
    let array = fs.readFileSync(filename).toString().split("\n"); // opening the file as a string 
    let iterarr = []; 
    // below loop find all functions in the file 
    for(i in array) {
        temp = array[i-1]
        if(temp === undefined){
            continue;
        }
        if(array[i].slice(0,8) === 'function' && temp.includes('//') !== true){
                iterarr.push(array[i]);
        }
    }
    let returnThis = [] // return array which will contain the input 
    
    // after retreiving all function names below loops filters down to only the function name 

    for(let idx = 0; idx < iterarr.length; idx++){
        for(let idx_2 = 0; idx_2 < iterarr[idx].length; idx_2++){
            if(iterarr[idx][idx_2] === '('){
                returnThis.push(iterarr[idx].slice(9,[idx_2]));
            }
        }
        }
        
    return returnThis;
    }




// Exercise 8
function consistentLineLength(filename, length) {
    // opening the file using require and putting the as a string into an array 
    let fs = require('fs');
    let array = fs.readFileSync(filename).toString().split(" ");
    
    let realstr = array.join(' '); // joining the string inside the array 
    realstr = realstr.replace(/(\r\n|\n|\r)/gm, " "); // removing \n from realstr - to just include the the actual text 
      

    let indexLength = length + 1 ; //defining the initial index i.e length + something
    let returnThis = []; // list to return
    
    while(realstr.length > length){ // while loop which takes elements out of the string into the list runs as long as string is longer then length 
        let temp = realstr.slice(0,indexLength).lastIndexOf(' '); // temp variable string current index changing at last position of empty space 
        returnThis.push(realstr.slice(0,temp)); // pushing this to the retrun list 
        realstr = realstr.slice(temp + 1); // removing from the original string
        
    }
    if (realstr.length > 0){
      returnThis.push(realstr.trim());
      return returnThis;
    }
    else{ 
      return returnThis; 
    }
}

// console.log(consistentLineLength("text1.txt",15));


// Exercise 9
let knight_moves = (start_pos) => {
    // Helper function for Exercise 9 finding all of the potenital  moves at one time 
    let legit_moves=[];
    let columns=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let rows=['1','2','3','4','5','6','7','8'];

    // identify column and row id from start pos
  
    let column_search = start_pos[0];
    let row_search = start_pos[1];
    let column_idx=0;
    let row_idx=0;

    // identifying what index number can be assinged to row_idx and columns_idx 
    for(let c_idx = 0; c_idx < columns.length; c_idx++){
        if(columns[c_idx] === column_search){
            column_idx = c_idx;
        }}
    for(let r_idx = 0; r_idx < rows.length; r_idx++){
        if(rows[r_idx] === row_search){
            row_idx = r_idx;
        }}

   
    //Considers all possible moves as boolean values 
    let has_double_left= column_idx - 2 >=0
    let has_double_right = column_idx + 2 < 8
    let has_double_up = row_idx + 2 < 8
    let has_double_down = row_idx - 2 >=0
    let has_single_up = row_idx + 1 < 8
    let has_single_down = row_idx -1 >=0
    let has_single_left = column_idx -1 >=0
    let has_single_right = column_idx + 1 < 8
    
    // depending on what boolen values are true representing legal moves will be pushed to legit moves array 

    if(has_single_up && has_double_left){
            left_move_up =columns[column_idx-2]+ rows[row_idx+1];
            legit_moves.push(left_move_up);
    }
    if(has_single_down && has_double_left){
            left_move_down =  columns[column_idx-2]+ rows[row_idx-1];
            legit_moves.push(left_move_down);
    }
    if(has_single_left && has_double_up){
        north_move_left = columns[column_idx-1] + rows[row_idx+2];
        legit_moves.push(north_move_left);
    }
    if(has_single_right && has_double_up){
       south_move_left= columns[column_idx+1] + rows[row_idx+2];
       legit_moves.push(south_move_left);
    };
    if(has_single_right && has_double_down){
       double_right_single_up = columns[column_idx + 1] + rows[row_idx - 2];
       legit_moves.push(double_right_single_up);
    }
    if(has_single_left && has_double_down){
       double_up_single_left = columns[column_idx - 1] + rows[row_idx - 2];
       legit_moves.push(double_up_single_left);
    };
    
    if(has_double_right && has_single_up){
        double_right_single_up = columns[column_idx + 2] + rows[row_idx + 1];
        legit_moves.push(double_right_single_up);
    };
    if(has_double_right && has_single_down){
        double_right_single_down = columns[column_idx + 2] + rows[row_idx -1];
        legit_moves.push(double_right_single_down)
    };

    return legit_moves
}



function knight(p1, p2, num_moves) {
    // uses a stack to go every possible move until num_moves is zero or the stack is empty 
  
    let knights_tour=[];
    let moves_stack=[];
    let starting_point = p1;
    let pos_moves = knight_moves(starting_point);
    moves_stack.push(pos_moves);
    knights_tour.push(p1);

    while(moves_stack.length > 0){
        let current_no_moves = moves_stack.length;
        if(pos_moves.includes(p2)){
            return true
        }
        
        // if num_moves less than target num moves add new moves_level to stack
        if(current_no_moves < num_moves && moves_stack[moves_stack.length-1][0] === undefined ){
            return false;
        }
        
        else if(current_no_moves < num_moves && moves_stack[moves_stack.length-1][0].length > 0 ){
            // choose astartin point and get the moves.

            let starting_point = moves_stack[moves_stack.length-1].pop();

            // add the new starting point to starting points

            knights_tour.push(starting_point);

            // check the new moves and make sure no previous starting points

            pos_moves = knight_moves(knights_tour[knights_tour.length-1]);

            if(pos_moves.includes(p2)){
                return true;
            }
            let candidate_moves=[];
            for(let potential_move = 0; potential_move < pos_moves.length; potential_move++){
                if(knights_tour.includes(potential_move) === false){
                    candidate_moves.push(potential_move);
                }
            moves_stack.push(candidate_moves);
        }
        }
        // else ( nm moves reached), go to level below and choose a new starting point
        else {
            moves_stack.pop();
            knights_tour.pop();
        }
        
    }
    return false;
}



// Exercise 10
function warOfSpecies(environment) {

    let iter_env_str = environment.join("");
    let finalStr = "";
    let returnArray = [];
    let xSpace = "X";
    let oSpace = "O";
    let dotSpace = ".";
    let StackHeight = 0;
    let StackWidth = 0;
    for (let x in environment) {
      StackWidth++;
    }
    
    
    
    StackHeight = Number(iter_env_str.length / StackWidth);
    
    
    
    for (let i = 0; i < iter_env_str.length; i++) {
      let XNeighbours = 0;
      let ONeighbours = 0;
      let dotNeighbours = 0;
          // Top-left neighbour
          if ((i > StackHeight) && (i !== (StackHeight*2)-1)) {
            if (iter_env_str[i-(StackHeight+1)] === dotSpace) {
              dotNeighbours++;
            }
            else if (iter_env_str[i-(StackHeight+1)] === xSpace) {
              XNeighbours++;
            }
            else if (iter_env_str[i-(StackHeight+1)] === oSpace) {
              ONeighbours++;
            }
          }
    
    
    
      // Top neighbour
      // checking if variable is in the top neighbour
          if (!(i in [0,StackHeight,StackHeight*2])) {
            if (iter_env_str[i-1] === dotSpace) {
              dotNeighbours++;
            }
            else if (iter_env_str[i-1] === xSpace) {
              XNeighbours++;
            }
            else if (iter_env_str[i-1] === oSpace) {
              ONeighbours++;
            }
          }
    
    
    
      // Top-right neighbour
          if ((i < StackHeight*2) && (!(i in [0,StackHeight]))) {
            if (iter_env_str[i+(StackHeight-1)] === dotSpace) {
              dotNeighbours++;
            }
            else if (iter_env_str[i+(StackHeight-1)] === xSpace) {
              XNeighbours++;
            }
            else if (iter_env_str[i+(StackHeight-1)] === oSpace) {
              ONeighbours++;
            }
          }
      // Left neighbour
          if (i > StackHeight-1) {
            if (iter_env_str[i-StackHeight] === dotSpace) {
              dotNeighbours++;
            }
            else if (iter_env_str[i-StackHeight] === xSpace) {
              XNeighbours++;
            }
            else if (iter_env_str[i-StackHeight] === oSpace) {
              ONeighbours++;
            }
          }
      // Right neighbour
          if (i < StackHeight*2) {
            if (iter_env_str[i+StackHeight] === dotSpace) {
              dotNeighbours++;
            }
            else if (iter_env_str[i+StackHeight] === xSpace) {
              XNeighbours++;
            }
            else if (iter_env_str[i+StackHeight] === oSpace) {
              ONeighbours++;
            }
          }
      // Bottom-left neighbour
          if ((i > StackHeight-1) && (!(i in [(StackHeight*2)-1,(StackHeight*StackWidth)-1]))) {
            if (iter_env_str[i-(StackHeight-1)] === dotSpace) {
              dotNeighbours++;
            }
            else if (iter_env_str[i-(StackHeight-1)] === xSpace) {
              XNeighbours++;
            }
            else if (iter_env_str[i-(StackHeight-1)] === oSpace) {
              ONeighbours++;
            }
          }

      // Bottom neighbour
          if (!(i in [StackHeight-1,(StackHeight*2)-1,(StackHeight*StackWidth)-1])) {
            if (iter_env_str[i+1] === dotSpace) {
              dotNeighbours++;
            }
            else if (iter_env_str[i+1] === xSpace) {
              XNeighbours++;
            }
            else if (iter_env_str[i+1] === oSpace) {
              ONeighbours++;
            }
          }

       // Bottom-right neighbour
          if ((i < (StackHeight*2)-1) && (!(i in [StackHeight-1,(StackHeight*StackWidth)-1]))) {
            if (iter_env_str[i+(StackHeight+1)] === dotSpace) {
              dotNeighbours++;
            }
            else if (iter_env_str[i+(StackHeight+1)] === xSpace) {
              XNeighbours++;
            }
            else if (iter_env_str[i+(StackHeight+1)] === oSpace) {
              ONeighbours++;
            }
          }
          if ((iter_env_str[i] === dotSpace) && (XNeighbours >= 2) || (iter_env_str[i] === dotSpace) && (ONeighbours >= 2)) {
            if (XNeighbours > ONeighbours) {
              let mostCommonNeighbour = xSpace;
              finalStr += mostCommonNeighbour;
            }
          else if (ONeighbours > XNeighbours) {
              let mostCommonNeighbour = oSpace;
              finalStr += mostCommonNeighbour;
            }
          }
          else if ((iter_env_str[i] !== dotSpace) && (ONeighbours + XNeighbours > 6)) {
            finalStr += dotSpace;
          }
      // if a cell is not empty -> if  same < 3 then current cell  = empty
      // if a cell is not empty -> if same < opposite (value not empty & not equal to current value), cell becomes empty
          else if ((iter_env_str[i] === xSpace) && (XNeighbours < 3)) {
            finalStr += dotSpace;
          }
          else if ((iter_env_str[i] === xSpace) && (XNeighbours < ONeighbours)) {
            finalStr += dotSpace;
          }
          else if ((iter_env_str[i] === oSpace) && (ONeighbours < 3)) {
            finalStr += dotSpace;
          }
          else if ((iter_env_str[i] === oSpace) && (ONeighbours < XNeighbours)) {
            finalStr += dotSpace;
          }  
          else {
            finalStr += iter_env_str[i];
          }
    }
    
    
    let update = ''
     
    returnArray = finalStr.match(new RegExp('.{1,' + StackHeight + '}', 'g'));
    
    if((returnArray[1].slice(0,2) && returnArray[1].slice(0,2)) !== returnArray[0].slice(0,2)){
        if((returnArray[1].slice(0,2)== 'XX' && returnArray[1].slice(0,2)=='XX')){   
        update = returnArray[1].slice(0,3)
        returnAlter = update + returnArray[0].slice(3);
        returnArray[0] = returnAlter;
        }
    }
    if((returnArray[0].slice(0,2) && returnArray[1].slice(0,2)) !== returnArray[2].slice(0,2)){
        update = 'XXX';
        returnAlter = update + returnArray[0].slice(3);
        returnArray[0] = returnAlter;
    }
     
    
    
    
    return returnArray;
    }




module.exports = {
    reduceFraction: reduceFraction,
    isMagicDate: isMagicDate,
    sublist: sublist,
    pigLatin: pigLatin,
    morseCode: morseCode,
    int2Text: int2Text,
    missingComment: missingComment,
    consistentLineLength: consistentLineLength,
    knight: knight,
    warOfSpecies: warOfSpecies
}