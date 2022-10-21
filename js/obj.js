let obj2 = {
  myFunction: function getProp(o, name = "") {
    for (let prop in o) {
      if (o[prop] !== null && typeof o[prop] === "object") {
        if (prop === null) {
          getProp(o[prop], `${prop}`);
        } else {
          getProp(o[prop], `${name}${prop}-`);
        }
      } else {
        console.log("Свойство: " + [name] + [prop] + " - " + o[prop]);
        document.write(
          "Свойство: " + [name] + [prop] + " - " + o[prop] + "<br>"
        );
      }
    }
  },
};

let obj1 = {
  EnotOne: {
    EnotTwo: {
      EnotThree: {
        EnotFour:
          "<br>" +
          "<img src='https://placepic.ru/wp-content/uploads/2018/11/s1200-45.jpg' style='width:400px'>",
      },
    },
  },
  firstName: "Витя",
  lastName: "Киселёв",
  age: 45,
  children: null,
  dates: {
    birthday: "26.01.1977",
    wedding: "05.09.2000",
    graduationFromUniversity: "07.06.2003",
  },
};