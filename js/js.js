const stringToNumber = function (value) {
   
  let result = value;
  
  if (result >= 0){
  result = Number(value);
  console.log(result);
  return result;
  }else{
  result = parseInt(value);
  console.log(result);
  return result;
  }

};


export default stringToNumber;