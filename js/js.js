
function price(travelOne) {
  //console.log(travelOne);
  let result = `Рсчет с учетом программы лояльности: `;
  return function (preson1) {
   // console.log(travelOne);
   // console.log(preson1);
   
    result = (`${result}, скидка  для постоянного клиента ${
      travelOne.name
    } составила ${preson1.personal} % -  , 
         полная стоимость тура ${preson1.amount}, c учетом скидки ${
      preson1.amount * (1 - Number(preson1.personal) / 100)
    }`);
    console.log(result);
    return result;
  };
}

let preson1 = {
  amount: "24500",
  personal: "5",
  regional: "2",
  quantitative: "15",
};

let travelOne = {
  name: "Турист 1",
};

let result = price(travelOne)(preson1);
//let result = price.call(travelOne, preson1);
//let result = price.call()(preson1);
document.write(result);
console.log(result);
//let result = price()();
