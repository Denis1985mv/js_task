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

let vasyaPoland = regions.poland.persons.vasya;
let alexPoland = regions.poland.persons.alex;
let alexGreece = regions.greece.persons.alex;
let svetaGreece = regions.greece.persons.sveta;
let vasyaHungary = regions.hungary.persons.vasya;
let alexHungary = regions.hungary.persons.alex;
let svetaHungary = regions.hungary.persons.sveta;
console.log(vasyaPoland);

let calculator = {
  result: function () {
    let discountsOn = 0;
    let discountsOnValue;
    console.log(valuePersons);
    console.log(valuePersons.amount);

    if (valuePersons.amount > 15000 && valuePersons.amount < 30000) {
      discountsOn = 0.9;
    } else if (valuePersons.amount > 30000 && valuePersons.amount < 50000) {
      discountsOn = 0.85;
    } else if (valuePersons.amount > 50000) {
      discountsOn = 0.81;
    }

    if (discountsOn > 0) {
      discountsOnValue = valuePersons.amount * discountsOn;
      console.log(discountsOnValue, "zdes");
    } else if (discountsOn === 0) {
      discountsOnValue = ` Колличественной скидки нету!`;
    }

    return function () {
      let result =
        valuePersons.amount * (1 - Number(valuePersons.personal) / 100);
      console.log(result);
      let resultRegianal =
        valuePersons.amount * (1 - Number(regions.discounts) / 100);
      let resultFull =
        valuePersons.amount *
        (1 - Number(regions.discounts) / 100) *
        (1 - Number(valuePersons.personal) / 100);
      console.log(resultFull);
      let resultFullMax =
        valuePersons.amount *
        (1 - Number(regions.discounts) / 100) *
        (1 - Number(valuePersons.personal) / 100) *
        discountsOn;

      if (resultFullMax === 0) {
        resultFullMax = resultFull;
      }

      return function () {
        result = `Полная стоисость: ${valuePersons.amount}${"<br>"} 
            Региональная скидка: ${regions.discounts} %   
            стоимость с учетом региональной скидки: ${resultRegianal.toFixed(2)}${"<br>"} 
            Cкидка  персоанальная: ${valuePersons.personal} %
            стоимость с учетом персональной скидки: ${result}${"<br>"} 
            С учетом Всех скидок (кроме количественной):  ${resultFull.toFixed(2)}${"<br>"} 
            Cтоимость с учетом количественной скидки:${discountsOnValue}${"<br>"} 
            Итоговая стоисмость:  ${resultFullMax.toFixed(2)}${"<br>"} 
          `;
        console.log(result);
        return result;
      };
    };
  },
};

let contry = prompt(
  `Доступные регионы:
    "Poland"
    "Greece" 
    "Hungary" 
    ${price["greece"]}
    Введите страну: `,
  `Poland`
);
let regionsPersons;
//contry= 'Poland';
if (contry === "Poland" || contry === "Greece" || contry === "Hungary") {
  if (contry === "Poland") {
    regionsPersons = prompt(
      `
    База клиентов:
    vasya
    alex
    Введите имя клиента`,
      `vasya`
    );

    switch (regionsPersons) {
      case (regionsPersons = "vasya"):
        regions.discounts = regionsPoland.discounts;
        valuePersons = vasyaPoland;
        console.log(valuePersons);
        regionsPersons = calculator.result.call(regions.discounts)(
          valuePersons
        )(resultDntsiscouOn);
        break;
      case (regionsPersons = "alex"):
        regions.discounts = regionsPoland.discounts;
        valuePersons = alexPoland;
        console.log(valuePersons, "здесь");
        regionsPersons = calculator.result.call(regions.discounts)(
          valuePersons
        )(resultDntsiscouOn);
        break;

      default:
        alert("Такого туриста нет!");
    }
  } else if (contry === "Greece") {
    regionsPersons = prompt(
      `
      База клиентов:
      alex
      sveta
      Введите имя клиента`,
      `vasya`
    );
    switch (regionsPersons) {
      case (regionsPersons = "alex"):
        regions.discounts = regionsGreece.discounts;
        valuePersons = alexGreece;
        regionsPersons = calculator.result.call(regions.discounts)(
          valuePersons
        )(resultDntsiscouOn);
        break;
      case (regionsPersons = "sveta"):
        regions.discounts = regionsGreece.discounts;
        valuePersons = svetaGreece;
        regionsPersons = calculator.result.call(regions.discounts)(
          valuePersons
        )(resultDntsiscouOn);

        break;
      default:
        alert("Такого туриста нет!");
    }
  } else if (contry === "Hungary") {
    regionsPersons = prompt(
      `
      База клиентов:
      vasya
      alex
      sveta
      Введите имя клиента`,
      `vasya`
    );
    switch (regionsPersons) {
      case (regionsPersons = "vasya"):
        regions.discounts = regionsHungary.discounts;
        valuePersons = vasyaHungary;
        regionsPersons = calculator.result.call(regions.discounts)(
          valuePersons
        )(resultDntsiscouOn);
        break;
      case (regionsPersons = "alex"):
        regions.discounts = regionsHungary.discounts;
        valuePersons = svetaHungary;
        regionsPersons = calculator.result.call(regions.discounts)(
          regions.discounts
        )(resultDntsiscouOn);
        break;
      case (regionsPersons = "sveta"):
        regions.discounts = regionsHungary.discounts;
        valuePersons = alexHungary;
        regionsPersons = calculator.result.call(regions.discounts)(
          regions.discounts
        )(resultDntsiscouOn);
        break;
      default:
        alert("Такого клиента нет!");
    }
  }
} else {
  alert("Такой страны нет!");
}
document.write(regionsPersons, "<br>");
