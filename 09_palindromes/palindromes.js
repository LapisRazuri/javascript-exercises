const palindromes = function ( word ) { 
    //let result = word.replace(/[^a-z]/gi, "")
    
    
        let result = word.match(/[a-z0-9]/gi)
        console.log(result)
         
            //for (let i = 0; i < word.length; i++ ) {
            //if ( word.charAt(i) != [i] ) {continue};   
            //result += word.charAt(i);
            //}

     
        result = String(result).toLowerCase();
        console.log(result);              
        let reverseword = ""; 

            for (let i = result.length -1; i >= 0; i--) {
                //if ( word.charAt(i) != word.match(/[a-z]/i) ) {continue}; 
                reverseword += result.charAt(i); 

                  
            }

            

        if ( result === reverseword ) {
            return true;
            }
              
        else {
            return false;
            }
               
      }         
                
        


// Do not edit below this line
module.exports = palindromes;
