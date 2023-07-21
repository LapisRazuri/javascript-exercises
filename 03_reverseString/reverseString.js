const reverseString = function(word) {
    reverseword = '';

        for (let i = word.length -1; i >= 0; i--) {
            reverseword += word.charAt(i);

        }
        
        return reverseword;

    };

// Do not edit below this line
module.exports = reverseString;
