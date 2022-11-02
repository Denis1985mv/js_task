
 let price = {
  discountsOnQuantity: {
    15000: "10",
    30000: "15",
    50000: "19",
  },
  regions: {
    poland: {
      discounts: "3",
      persons: {
        vasya: {
          amount: "24500",
          personal: "5",
        },
        alex: {
          amount: "60500",
          personal: "1.5",
        },
      },
    },
    greece: {
      discounts: "6",
      persons: {
        alex: {
          amount: "20300",
          personal: "1.5",
        },
        sveta: {
          amount: "2500",
          personal: "2",
        },
      },
    },
    hungary: {
      discounts: "4.3",
      persons: {
        vasya: {
          amount: "49000",
          personal: "5",
        },
        alex: {
          amount: "12300",
          personal: "1.5",
        },
        sveta: {
          amount: "100500",
          personal: "2",
        },
      },
    },
  },
};

function dntsiscouOn(price) {
  for (key in price) {
    console.log(key);
    if (key === "discountsOnQuantity") {
      console.log(price[key]);
      return price[key];
    }
  }
}

function getDetal(regions) {
  for (key in regions) {
    let poland;
    if (key === "poland") {
      console.log(regions[key]);
      poland = regions[key];
    }
    return poland;
  }
}

function getDetalGreece(regions) {
  for (key in regions) {
    console.log(regions[key]);
    console.log(key);
    let greece;
    if (key === "greece") {
      console.log(regions[key]);
      greece = regions[key];
      console.log(greece);
      return greece;
    }
    console.log(greece);
  }
}

function start(price) {
  for (key in price) {
    console.log(price[key]);
    console.log(key);
    if (key === "regions") {
      console.log(price[key]);
      let regions = price[key];
      console.log(regions.greece);
      return regions;
    }
  }
}

let regions = start(price);
console.log(regions);
console.log(regions.poland.persons.vasya.amount);

let resultDntsiscouOn = dntsiscouOn(price);
let regionsPoland = getDetal(regions);
let regionsGreece = getDetalGreece(regions);
let regionsHungary = price.regions.hungary;

let calculator = {
  vasya: function () {
    let discountsOn;
    if (
      regionsPoland.persons.vasya.amount > 15000 &&
      regionsPoland.persons.vasya.amount < 30000
    ) {
      discountsOn = 0.9;
    } else if (
      regionsPoland.persons.vasya.amount > 30000 &&
      regionsPoland.persons.vasya.amount < 50000
    ) {
      discountsOn = 0.85;
    } else if (regionsPoland.persons.vasya.amount > 50000) {
      discountsOn = 0.81;
    }
    let discountsOnValue =
      regionsPoland.persons.vasya.amount * discountsOn;
    return function () {
      let result =
        regionsPoland.persons.vasya.amount *
        (1 - Number(regionsPoland.persons.vasya.personal) / 100);
      console.log(result);
      let resultRegianal =
        regionsPoland.persons.vasya.amount *
        (1 - Number(regionsPoland.discounts) / 100);
      let resultFull =
        regionsPoland.persons.vasya.amount *
        (1 - Number(regionsPoland.discounts) / 100) *
        (1 - Number(regionsPoland.persons.vasya.personal) / 100);
      console.log(resultFull);
      let resultFullMax =
        regionsPoland.persons.vasya.amount *
        (1 - Number(regionsPoland.discounts) / 100) *
        (1 - Number(regionsHungary.persons.vasya.personal) / 100) *
        discountsOn;

      return function () {
        result = `Полная стоисость: ${
          regionsPoland.persons.vasya.amount
        }${"<br>"} 
        Региональная скидка: ${regionsPoland.discounts} % -  ,
        стоимость с учетом региональной скидки: ${resultRegianal},${"<br>"} 
        Cкидка  персоанальная: ${regionsPoland.persons.vasya.personal} 
        стоимость с учетом персональной скидки: ${result}${"<br>"} 
        С учетом Всех скидок (кроме количественной):  ${resultFull}${"<br>"} 
        Cтоимость с учетом количественной скидки:${discountsOnValue}${"<br>"} 
        Итоговая стоисмость:  ${resultFullMax}${"<br>"} 
      `;
        console.log(result);
        return result;
      };
    };
  },
  alex: function () {
    let discountsOn;
    if (
      regionsPoland.persons.alex.amount > 15000 &&
      regionsPoland.persons.alex.amount < 30000
    ) {
      discountsOn = 0.9;
    } else if (
      regionsPoland.persons.alex.amount > 30000 &&
      regionsPoland.persons.alex.amount < 50000
    ) {
      discountsOn = 0.85;
    } else if (regionsPoland.persons.alex.amount > 50000) {
      discountsOn = 0.81;
    }
    let discountsOnValue =
      regionsPoland.persons.alex.amount * discountsOn;
    return function () {
      let result =
        regionsPoland.persons.alex.amount *
        (1 - Number(regionsPoland.persons.alex.personal) / 100);
      console.log(result);
      let resultRegianal =
        regionsPoland.persons.alex.amount *
        (1 - Number(regionsPoland.discounts) / 100);
      let resultFull =
        regionsPoland.persons.alex.amount *
        (1 - Number(regionsPoland.discounts) / 100) *
        (1 - Number(regionsPoland.persons.alex.personal) / 100);
      console.log(resultFull);
      let resultFullMax =
        regionsPoland.persons.alex.amount *
        (1 - Number(regionsPoland.discounts) / 100) *
        (1 - Number(regionsHungary.persons.alex.personal) / 100) *
        discountsOn;

      return function () {
        result = `Полная стоисость: ${
          regionsPoland.persons.alex.amount
        }${"<br>"} 
        Региональная скидка: ${regionsPoland.discounts} % -  ,
        стоимость с учетом региональной скидки: ${resultRegianal},${"<br>"} 
        Cкидка  персоанальная: ${regionsPoland.persons.alex.personal} 
        стоимость с учетом персональной скидки: ${result}${"<br>"} 
        С учетом Всех скидок (кроме количественной):  ${resultFull}${"<br>"} 
        Cтоимость с учетом количественной скидки:${discountsOnValue}${"<br>"} 
        Итоговая стоисмость:  ${resultFullMax}${"<br>"} 
      `;
        console.log(result);
        return result;
      };
    };
  },

  alexGreece: function () {
    let discountsOn;
    if (
      regionsGreece.persons.alex.amount > 15000 &&
      regionsGreece.persons.alex.amount < 30000
    ) {
      discountsOn = 0.9;
    } else if (
      regionsGreece.persons.alex.amount > 30000 &&
      regionsGreece.persons.alex.amount < 50000
    ) {
      discountsOn = 0.85;
    } else if (regionsGreece.persons.alex.amount > 50000) {
      discountsOn = 0.81;
    }
    let discountsOnValue =
      regionsGreece.persons.alex.amount * discountsOn;
    return function () {
      let result =
        regionsGreece.persons.alex.amount *
        (1 - Number(regionsGreece.persons.alex.personal) / 100);
      console.log(result);
      let resultRegianal =
        regionsGreece.persons.alex.amount *
        (1 - Number(regionsGreece.discounts) / 100);
      let resultFull =
        regionsGreece.persons.alex.amount *
        (1 - Number(regionsGreece.discounts) / 100) *
        (1 - Number(regionsGreece.persons.alex.personal) / 100);
      console.log(resultFull);
      let resultFullMax =
        regionsGreece.persons.alex.amount *
        (1 - Number(regionsGreece.discounts) / 100) *
        (1 - Number(regionsHungary.persons.alex.personal) / 100) *
        discountsOn;

      return function () {
        result = `Полная стоисость: ${
          regionsGreece.persons.alex.amount
        }${"<br>"} 
        Региональная скидка: ${regionsGreece.discounts} % -  ,
        стоимость с учетом региональной скидки: ${resultRegianal},${"<br>"} 
        Cкидка  персоанальная: ${regionsGreece.persons.alex.personal} 
        стоимость с учетом персональной скидки: ${result}${"<br>"} 
        С учетом Всех скидок (кроме количественной):  ${resultFull}${"<br>"} 
        Cтоимость с учетом количественной скидки:${discountsOnValue}${"<br>"} 
        Итоговая стоисмость:  ${resultFullMax}${"<br>"} 
      `;
        console.log(result);
        return result;
      };
    };
  },


  svetaGreece: function () {
    let discountsOn;
    if (
      regionsGreece.persons.sveta.amount > 15000 &&
      regionsGreece.persons.sveta.amount < 30000
    ) {
      discountsOn = 0.9;
    } else if (
      regionsGreece.persons.sveta.amount > 30000 &&
      regionsGreece.persons.sveta.amount < 50000
    ) {
      discountsOn = 0.85;
    } else if (regionsGreece.persons.sveta.amount > 50000) {
      discountsOn = 0.81;
    }

    if(discountsOn === Number){
    let discountsOnValue =
      regionsGreece.persons.sveta.amount * discountsOn;
    }else{
      discountsOnValue = "нету скідкі ";
    }
    return function () {
      let result =
        regionsGreece.persons.sveta.amount *
        (1 - Number(regionsGreece.persons.sveta.personal) / 100);
      console.log(result);
      let resultRegianal =
        regionsGreece.persons.sveta.amount *
        (1 - Number(regionsGreece.discounts) / 100);
      let resultFull =
        regionsGreece.persons.sveta.amount *
        (1 - Number(regionsGreece.discounts) / 100) *
        (1 - Number(regionsGreece.persons.alex.personal) / 100);
      console.log(resultFull);
      let resultFullMax =
        regionsGreece.persons.sveta.amount *
        (1 - Number(regionsGreece.discounts) / 100) *
        (1 - Number(regionsHungary.persons.sveta.personal) / 100) *
        discountsOn;
        if(resultFullMax != Number){
          resultFullMax = resultFull;
        } 

      return function () {
        result = `Полная стоисость: ${
          regionsGreece.persons.sveta.amount
        }${"<br>"} 
        Региональная скидка: ${regionsGreece.discounts} % -  ,
        стоимость с учетом региональной скидки: ${resultRegianal},${"<br>"} 
        Cкидка  персоанальная: ${regionsGreece.persons.sveta.personal} 
        стоимость с учетом персональной скидки: ${result}${"<br>"} 
        С учетом Всех скидок (кроме количественной):  ${resultFull}${"<br>"} 
        Cтоимость с учетом количественной скидки:${discountsOnValue}${"<br>"} 
        Итоговая стоисмость:  ${resultFullMax}${"<br>"} 
      `;
        console.log(result);
        return result;
      };
    };
  },



  vasyaHungary: function () {
    let discountsOn;
    if (
      regionsHungary.persons.vasya.amount > 15000 &&
      regionsHungary.persons.vasya.amount < 30000
    ) {
      discountsOn = 0.9;
    } else if (
      regionsHungary.persons.vasya.amount > 30000 &&
      regionsHungary.persons.vasya.amount < 50000
    ) {
      discountsOn = 0.85;
    } else if (regionsHungary.persons.vasya.amount > 50000) {
      discountsOn = 0.81;
    }
    let discountsOnValue =
      regionsHungary.persons.vasya.amount * discountsOn;
    return function () {
      let result =
        regionsHungary.persons.vasya.amount *
        (1 - Number(regionsHungary.persons.vasya.personal) / 100);
      console.log(result);
      let resultRegianal =
        regionsHungary.persons.vasya.amount *
        (1 - Number(regionsHungary.discounts) / 100);
      let resultFull =
        regionsHungary.persons.vasya.amount *
        (1 - Number(regionsHungary.discounts) / 100) *
        (1 - Number(regionsHungary.persons.vasya.personal) / 100);
      console.log(resultFull);
      let resultFullMax =
        regionsHungary.persons.vasya.amount *
        (1 - Number(regionsHungary.discounts) / 100) *
        (1 - Number(regionsHungary.persons.vasya.personal) / 100) *
        discountsOn;

      return function () {
        result = `Полная стоисость: ${
          regionsHungary.persons.vasya.amount
        }${"<br>"} 
        Региональная скидка: ${regionsHungary.discounts} % -  ,
        стоимость с учетом региональной скидки: ${resultRegianal},${"<br>"} 
        Cкидка  персоанальная: ${regionsHungary.persons.vasya.personal} 
        стоимость с учетом персональной скидки: ${result}${"<br>"} 
        С учетом Всех скидок (кроме количественной):  ${resultFull}${"<br>"} 
        Cтоимость с учетом количественной скидки:${discountsOnValue}${"<br>"} 
        Итоговая стоисмость:  ${resultFullMax}${"<br>"} 
      `;
        console.log(result);
        return result;
      };
    };
  },
  alexHungary: function () {
    let discountsOn;
    if (
      regionsHungary.persons.alex.amount > 15000 &&
      regionsHungary.persons.alex.amount < 30000
    ) {
      discountsOn = 0.9;
    } else if (
      regionsHungary.persons.alex.amount > 30000 &&
      regionsHungary.persons.alex.amount < 50000
    ) {
      discountsOn = 0.85;
    } else if (regionsHungary.persons.alex.amount > 50000) {
      discountsOn = 0.81;
    }


    if(discountsOn === Number){
    let discountsOnValue =
    regionsHungary.persons.alex.amount * discountsOn;
    }else{
      discountsOnValue = "нету скідкі ";
    }

    

    return function () {
      let result =
        regionsHungary.persons.alex.amount *
        (1 - Number(regionsHungary.persons.alex.personal) / 100);
      console.log(result);
      let resultRegianal =
        regionsHungary.persons.alex.amount *
        (1 - Number(regionsHungary.discounts) / 100);
      let resultFull =
        regionsHungary.persons.alex.amount *
        (1 - Number(regionsHungary.discounts) / 100) *
        (1 - Number(regionsHungary.persons.alex.personal) / 100);
      console.log(resultFull);
      let resultFullMax =
        regionsHungary.persons.alex.amount *
        (1 - Number(regionsHungary.discounts) / 100) *
        (1 - Number(regionsHungary.persons.alex.personal) / 100) *
        discountsOn;

        if(resultFullMax != Number){
          resultFullMax = resultFull;
        } 

      return function () {
        result = `Полная стоисость: ${
          regionsHungary.persons.alex.amount
        }${"<br>"} 
        Региональная скидка: ${regionsHungary.discounts} % -  ,
        стоимость с учетом региональной скидки: ${resultRegianal},${"<br>"} 
        Cкидка  персоанальная: ${regionsHungary.persons.alex.personal} 
        стоимость с учетом персональной скидки: ${result}${"<br>"} 
        С учетом Всех скидок (кроме количественной):  ${resultFull}${"<br>"} 
        Cтоимость с учетом количественной скидки:${discountsOnValue}${"<br>"} 
        Итоговая стоисмость:  ${resultFullMax}${"<br>"} 
      `;
        console.log(result);
        return result;
      };
    };
  },
  svetaHungary: function () {
    let discountsOn;
    if (
      regionsHungary.persons.sveta.amount > 15000 &&
      regionsHungary.persons.sveta.amount < 30000
    ) {
      discountsOn = 0.9;
    } else if (
      regionsHungary.persons.sveta.amount > 30000 &&
      regionsHungary.persons.sveta.amount < 50000
    ) {
      discountsOn = 0.85;
    } else if (regionsHungary.persons.sveta.amount > 50000) {
      discountsOn = 0.81;
    }
    let discountsOnValue =
      regionsHungary.persons.sveta.amount * discountsOn;
    return function () {
      let result =
        regionsHungary.persons.sveta.amount *
        (1 - Number(regionsHungary.persons.sveta.personal) / 100);
      console.log(result);
      let resultRegianal =
        regionsHungary.persons.sveta.amount *
        (1 - Number(regionsHungary.discounts) / 100);
      let resultFull =
        regionsHungary.persons.sveta.amount *
        (1 - Number(regionsHungary.discounts) / 100) *
        (1 - Number(regionsHungary.persons.sveta.personal) / 100);
      console.log(resultFull);
      let resultFullMax =
        regionsHungary.persons.sveta.amount *
        (1 - Number(regionsHungary.discounts) / 100) *
        (1 - Number(regionsHungary.persons.sveta.personal) / 100) *
        discountsOn;

      return function () {
        result = `Полная стоисость: ${
          regionsHungary.persons.sveta.amount
        }${"<br>"} 
        Региональная скидка: ${regionsHungary.discounts} % -  ,
        стоимость с учетом региональной скидки: ${resultRegianal},${"<br>"} 
        Cкидка  персоанальная: ${regionsHungary.persons.sveta.personal} 
        стоимость с учетом персональной скидки: ${result}${"<br>"} 
        С учетом Всех скидок (кроме количественной):  ${resultFull}${"<br>"} 
        Cтоимость с учетом количественной скидки:${discountsOnValue}${"<br>"} 
        Итоговая стоисмость:  ${resultFullMax}${"<br>"} 
      `;
        console.log(result);
        return result;
      };
    };
  },
  
};

let contry = prompt(`Доступные регионы:
"Poland"
"Greece" 
"Hungary" 
${price['greece']}
Введите страну: `, `Poland`);
let regionsPersons = prompt(`
База клиентов:
vasya
alex
sveta
Введите имя клиента`, `vasya`);

if (contry === "Poland") {
  switch (regionsPersons) {
    case (regionsPersons = "vasya"):
      regionsPersons = calculator.vasya.call(regionsPoland.discounts)(
        regionsPoland.persons
      )(resultDntsiscouOn);
      break;
    case (regionsPersons = "alex"):
      regionsPersons = calculator.alex.call(regionsPoland.discounts)(
        regionsPoland.persons
      )(resultDntsiscouOn);
      break;

    default:
      alert("Такого туриста нет!");
  }
} else if(contry === "Greece"){
  switch (regionsPersons) {
    case (regionsPersons = "alex"):
      regionsPersons = calculator.alexGreece.call(
        regionsGreece.discounts
      )(regionsGreece.persons)(resultDntsiscouOn);
      break;
    case (regionsPersons = "sveta"):
      regionsPersons = calculator.svetaGreece.call(
        regionsGreece.discounts
      )(regionsGreece.persons)(resultDntsiscouOn);

      break;
    default:
      alert("Такого туриста нет!");
  }
}
else if (contry === "Hungary") {
  switch (regionsPersons) {
    case (regionsPersons = "vasya"):
      regionsPersons = calculator.vasyaHungary.call(
        regionsHungary.discounts
      )(regionsHungary.persons)(resultDntsiscouOn);
      break;
    case (regionsPersons = "alex"):
      regionsPersons = calculator.alexHungary.call(
        regionsHungary.discounts
      )(regionsHungary.persons)(resultDntsiscouOn);
      break;
      case (regionsPersons = "sveta"):
      regionsPersons = calculator.svetaHungary.call(
        regionsHungary.discounts
      )(regionsHungary.persons)(resultDntsiscouOn);
      break;
    default:
      alert("Такого клиента нет!");
  }
}

document.write(regionsPersons, "<br>");