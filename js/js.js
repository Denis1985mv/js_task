// const stringToNumber = function (value) {
   
//   let result = value;
  
//   if (result >= 0){
//   result = Number(value);
//   console.log(result);
//   return result;
//   }else{
//   result = parseInt(value);
//   console.log(result);
//   return result;
//   }

// };


//export default stringToNumber;


function stringToNumber(params) {
  for (let index = 0; index < params.length; index++) {
    let element = params[index];
    console.log(element);
    if (element >= 0) {
      let result = Number(element);
      console.log(result);
      document.write("Проверка 1 - ",result,"<br>");
      //return result;
    } else {
      result = parseInt(element);
      console.log(result);
      document.write("Проверка 2 - ", result, "<br>");
      // return result;
    }
  }
}

let arry = [
  43,
  "42px",
  52,
  "",
  "54dscds",
  "",
  "",
  "42.42",
  "sfsdfdfgdgf",
  42.42,
  "4544dfgdf",
  "45dsfdsfsddsfa",
  52.4578787,
  "356887",
];
let resalt = stringToNumber(arry);