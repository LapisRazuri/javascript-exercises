const getTheTitles = function( books ) {
    const array = [];

    for ( let i = 0; i < books.length; i++ ) {
        for ( var key in books[i] ) {
                array[i] = books[i].title;
            

        
            //console.log(books[i][key]);

        }           
    }

    return array;

}

// Do not edit below this line
module.exports = getTheTitles;
