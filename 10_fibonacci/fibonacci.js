const fibonacci = function( num ) {    


    let first = 0;
    let second = 1;

    let result = 1;

    if (num < 0 ) {
        return "OOPS";
    }

    else if (num == 0 ) {
        return first;
    }

    else if ( num == 1 ) {
        return second;
    }

    for (let i = 0; i <= num - 2; i++ ) {
        result = first + second;
        first = second;
        second = result;
    }
 return result;

    //const array =[0, 1];
    
    //for (let i = 2; i <= num; i++) {
        //array[ i ] =  array[ i - 1 ] + array[ i - 2 ] ;    // + ","; 
    

    //}

    //return array[num];
    }


// Do not edit below this line
module.exports = fibonacci;
