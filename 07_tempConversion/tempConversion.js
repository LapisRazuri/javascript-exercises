const convertToCelsius = function(temp) {
    let result = ( temp - 32 ) / 1.8;


    if (result == .00) {
      Number(result);
      return result;
    }


    else {
      let roundedresult = Number(result.toFixed(1));
      return roundedresult;

    }

};

const convertToFahrenheit = function(temp) {
  let result = temp * 1.8 + 32 ;
  
  if (result == .00) {
    Number(result);
    return result;
  }


  else {
    let roundedresult = Number(result.toFixed(1));
    return roundedresult;

  }
  
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
