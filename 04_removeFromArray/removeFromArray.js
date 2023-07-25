const removeFromArray = function ( array, element, anotherelement ) {
        for ( let i = 0; i <= array.length; i++ ) {
            if ( array[i] == element || array[i] == anotherelement ) {
                array.splice( i , 1 );
            }
        }
        return array;
};


removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// Do not edit below this line
module.exports = removeFromArray;
