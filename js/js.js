let calculator = {
  personal: function (value) {
      let result = `Расчет с учетом программы лояльности: `;
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
      let result = `Расчет с учетом программы лояльности: `;
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

//   let travelFirst = calculator.personal(travel.One)(preson1);
//   let travelSecond = calculator.regional(travel.Two)(preson1);
//   let travelThird = calculator.quantitative(travel.Three)(preson1);
//   let travelFourth = calculator.full(travel.Fourth)(preson1);

// console.log(travelFirst);
// console.log(travelSecond);
// console.log(travelThird);
// console.log(travelFourth);

let travelValue = prompt( `Введите имя туриста \n
Cписок пользователей:\n
${travel.One}, скидка для клиента состоявляет ${preson1.personal} %.\n
${travel.Two}, скидка для клиента состоявляет ${preson1.regional} %. \n
${travel.Three}, скидка для клиента состоявляет ${preson1.quantitative} %.\n
${travel.Fourth}, скидка для клиента состоявляет ${preson1.personal} %. \n

` );

//travelValue = "1";
switch(travelValue) {
    case travelValue = travel.One :
      travelValue = calculator.personal.call(travel.One)(preson1)
      //calculator.personal(travel.One)(preson1)
      console.log(travelValue);
        break;
    case travelValue = travel.Two :
      travelValue = calculator.regional.call(travel.Two)(preson1)
        break;
    case travelValue = travel.Three :
      travelValue = calculator.quantitative.call(travel.Three)(preson1)
        break;
    case travelValue = travel.Fourth :
      travelValue = calculator.full.call(travel.Fourth)(preson1)
        break;
    default :
        alert("Такого туриста нет!")};

        console.log(travelValue);
      
document.write(travelValue, "<br>");
