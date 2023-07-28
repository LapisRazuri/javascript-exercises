const sumAll = function(startnum, endnum) {
    let result = 0;
    if ( typeof(startnum) != "number" || typeof(endnum) != "number") {
        return "ERROR";
    }

    else if ( startnum < 0 || endnum < 0 ) {
        return "ERROR";
    } 

    else if ( startnum < endnum ) {
        for (let i = startnum; i <= endnum; i++ ) {
        
            result += i; 
        }
    }

    else if ( startnum > endnum ) {
        for (let i = startnum; i >= endnum; i-- ) {
        
            result += i; 
        }
    }


    return result;

}
// Do not edit below this line
module.exports = sumAll;
