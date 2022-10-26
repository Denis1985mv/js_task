let calculator = {
  personal: function (value) {
      let result = `Рсчет с учетом программы лояльности: `;
      return function (preson1) {        
        result = (`${result}, скидка  для постоянного клиента ${
          travel.One
        } составила ${preson1.personal} % -  , 
             полная стоимость тура ${preson1.amount}, c учетом скидки ${
          preson1.amount * (1 - Number(preson1.personal) / 100)
        }`);
        console.log(result);
        return result;
      };
    },
  regional: function (value) {
      let result = `Рсчет с учетом программы лояльности: `;
      return function (preson1) {  
        result = (`${result}, скидка  для постоянного клиента ${
          travel.Two
        } составила ${preson1.regional} % -  , 
             полная стоимость тура ${preson1.amount}, c учетом скидки ${
          preson1.amount * (1 - Number(preson1.regional) / 100)
        }`);
        console.log(result);
        return result;
      };
    },
    quantitative: function (value) {
      let result = `Рсчет с учетом программы лояльности: `;
      return function (preson1) {  
        result = (`${result}, скидка  для постоянного клиента ${
          travel.Three
        } составила ${preson1.quantitative} % -  , 
             полная стоимость тура ${preson1.amount}, c учетом скидки ${
          preson1.amount * (1 - Number(preson1.quantitative) / 100)
        }`);
        console.log(result);
        return result;
      };
    },
    full: function (value) {
      let result = `Рсчет с учетом программы лояльности: `;
      return function (preson1) {  
        result = (`${result}, суммарная скидка для постоянного клиента ${
          travel.Fourth
        } составила ${preson1.quantitative} + ${preson1.regional} + ${preson1.personal} % -  , 
             полная стоимость тура ${preson1.amount}, c учетом скидки ${
          ((preson1.amount * (1 - Number(preson1.quantitative) / 100)) * (1 - Number(preson1.regional) / 100)) * (1 - Number(preson1.personal) / 100)
        }`);
        console.log(result);
        return result;
      };
    },
}

let preson1 = {
  amount: "24500",
  personal: "5",
  regional: "2",
  quantitative: "15",
};

let travel = {
  One: "Турист 1",
  Two: "Турист 2",
  Three: "Турист 3",
  Fourth:"Турист 4",
};

let travelFirst = calculator.personal(travel.One)(preson1);
let travelSecond = calculator.regional(travel.Two)(preson1);
let travelThird = calculator.quantitative(travel.Three)(preson1);
let travelFourth = calculator.full(travel.Fourth)(preson1);

console.log(travelFirst);
console.log(travelSecond);
console.log(travelThird);
console.log(travelFourth);

document.write(travelFirst, "<br>");
document.write(travelSecond, "<br>");
document.write(travelThird, "<br>");
document.write(travelFourth, "<br>");