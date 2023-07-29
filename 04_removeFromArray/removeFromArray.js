const removeFromArray = function ( array, ...args ) {
            for (let j = 0; j < args.length; j++ ) {

                for ( let i = 0; i < array.length; i++ ) {
                    if ( args[j] === array[i] ) {
                        array.splice( i , 1 );
                        j--;
                        break;
                    }
                }

            }
            return array;
};


removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// Do not edit below this line
module.exports = removeFromArray;
